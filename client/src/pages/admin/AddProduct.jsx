import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropdownWithSearch from "../../components/Menususp";
import InputDefault from "../../components/InputDefault";
import Label from "../../components/Label";


export default function AddProduct() {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [price, setPrice] = useState(0.0);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [power, setPower] = useState("");
  const [engine, setEngine] = useState("");
  const [images, setImages] = useState([]);          
  const [imagePreviews, setImagePreviews] = useState([]);


  const navigate = useNavigate()

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 85 }, (_, index) => currentYear - index);

  async function addProduct(productData) {
    try {
      const formData = new FormData();
      Object.entries(productData).forEach(([key, value]) => {
        formData.append(key, value);
      });
      console.log(...formData.entries());

      const response = await fetch("http://localhost:3000/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Produto adicionado", result);
        navigate('/admin'); 
      } else {
        console.error("Erro ao adicionar produto", result.error);
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  }

  const handleImageChange = async (files) => {
    const filesArray = Array.from(files);
    const base64Images = await Promise.all(filesArray.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    }));
    setImages(base64Images);
    const previews = base64Images; 
    setImagePreviews(previews);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!model || !brand || !year || !price || !quantity || !description || !power || !engine) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    const product = {
      model,
      brand,
      year: Number(year),
      price: Number(price),
      images,
      quantity: Number(quantity),
      description,
      power: Number(power),
      engine,
    };
    console.log(product)
    addProduct(product);
  };

  
  


  return (
    <>
    <div className="m-8 ">
    <Link to='/admin' className="rounded-full bg-red-100 w-8 h-8 flex justify-center items-center">
        <svg  xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path className="fill-red-600" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
    </Link>
    </div>
    <form className="mx-8 sm:mx-20 lg:mx-48 my-16">
      <h2 className="text-xl border-b border-red-600 pb-4 font-semibold text-gray-900">
        Adicionar Produto
      </h2>
      <div className="grid grid-cols-4 gap-y-6 gap-x-8 mt-4 border-b border-gray-900/10 pb-16">
        <div className="sm:col-span-4">
          <label
            htmlFor="model"
            className="block text-sm/6 font-medium text-gray-900 mb-2"
          >
            Modelo
          </label>

          <InputDefault
            onChange={(e) => setModel(e.target.value)}
            value={model}
            id={"model"}
            name={"model"}
          />
        </div>

        <div className="sm:col-span-3">
          <Label htmlFor={"brand"} text={"Marca"} />

          <DropdownWithSearch selectedBrand={brand} onSelectBrand={setBrand} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor={"engine"} text={"Motor"} />

          <InputDefault
            onChange={(e) => setEngine(e.target.value)}
            value={engine}
            id={"engine"}
            name={"engine"}
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor={"power"} text={"Potência"} />

          <InputDefault
            onChange={(e) => setPower(Number(e.target.value))}
            value={power}
            id={"power"}
            name={"power"}
          />
        </div>

        <div className="sm:col-span-1">
          <Label htmlFor={"year"} text={"Ano"} />

          <div className="mt-2">
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="block outline-none w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="sm:col-span-1">
          <Label htmlFor={"price"} text={"Valor"} />

          <InputDefault
            onChange={(e) => setPrice(Number(e.target.value))}
            value={price}
            id={"price"}
            name={"price"}
          />
        </div>

        <div className="grid grid-cols-4 sm:col-span-3">
          <div className="sm:col-span-1">
            <Label htmlFor={"price"} text={"Quantidade"} />

            <InputDefault
              onChange={(e) => setQuantity(Number(e.target.value))}
              value={quantity}
              id={"quantity"}
              name={"quantity"}
            />
          </div>
        </div>

        <div className="col-span-full">
          <Label htmlFor={"description"} text={"Descrição"} />

          <div className="mt-2">
            <textarea
              id="description"
              name="description"
              rows={3}
              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="col-span-full">
          <Label htmlFor={"cover-photo"} text={"Foto do produto"} />
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          {imagePreviews?.length > 0 ? (
            <div className="text-center">
              <img src={imagePreviews} alt="Pré-visualização" className="mx-auto h-48 w-48 object-cover" />
              <button
                type="button"
                onClick={removeImage}
                className="mt-4 text-red-600 hover:underline"
              >
                Remover imagem
              </button>
            </div>
          ) : (
            <div className="text-center">
              <PhotoIcon
                aria-hidden="true"
                className="mx-auto h-12 w-12 text-gray-300"
              />
              <div className="mt-6 flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-500"
                >
                  <span>Carregar um arquivo</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    multiple
                    className="sr-only"
                    onChange={(e) => handleImageChange(e.target.files)}
                  />
                </label>
                <p className="pl-1">ou arraste e solte</p>
              </div>
              <p className="text-xs text-gray-600">PNG, JPG, GIF até 10MB</p>
            </div>
          )}
        </div>
        </div>
      </div>{" "}
      {/* grid end */}
      <div className="mt-6 flex items-center justify-end gap-x-12">
        <Link
          to="/admin"
          type="button"
          className="text-sm/6 font-semibold text-gray-900"
        >
          Cancel
        </Link>
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md bg-red-600 px-16 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Save
        </button>
      </div>
    </form>
    </>
  );
}