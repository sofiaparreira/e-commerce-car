import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DropdownWithSearch from "../../components/Menususp";
import InputDefault from "../../components/InputDefault";
import Label from "../../components/Label";

export default function EditProduct() {
  const { id } = useParams();
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
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 85 }, (_, index) => currentYear - index);

  // Função para buscar o produto
  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);

      if (!response.ok) {
        throw new Error(`Erro: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setModel(data.model || "");
      setBrand(data.brand || "");
      setYear(data.year || new Date().getFullYear());
      setPrice(data.price || 0.0);
      setQuantity(data.quantity || 1);
      setDescription(data.description || "");
      setPower(data.power || "");
      setEngine(data.engine || "");
      setImages(data.images || []); // Para exibir imagens existentes
      setImagePreviews(data.images || []);
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Função para atualizar o produto
  const addProduct = async (productData) => {
    try {
      const formData = new FormData();
      Object.entries(productData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Produto atualizado", result);
        navigate('/admin');
      } else {
        console.error("Erro ao atualizar produto", result.error);
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };

  // Função para manipular a mudança de imagens
  const handleImageChange = async (files) => {
    const filesArray = Array.from(files);
    const base64Images = await Promise.all(filesArray.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    }));

    setImages((prev) => [...prev, ...base64Images]);
    setImagePreviews((prev) => [...prev, ...base64Images]);
  };

  // Função para remover uma imagem
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
  };

  // Função para lidar com a submissão do formulário
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

    addProduct(product);
  };

  return (
    <>
      <div className="m-8 ">
        <Link to='/admin' className="rounded-full bg-red-100 w-8 h-8 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512">
            <path className="fill-red-600" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
          </svg>
        </Link>
      </div>
      <form className="mx-8 sm:mx-20 lg:mx-48 my-16" onSubmit={handleSubmit}>
        <h2 className="text-xl border-b border-red-600 pb-4 font-semibold text-gray-900">
          Editar Produto
        </h2>
        <div className="grid grid-cols-4 gap-y-6 gap-x-8 mt-4 border-b border-gray-900/10 pb-16">
          <div className="sm:col-span-4">
            <label htmlFor="model" className="block text-sm/6 font-medium text-gray-900 mb-2">
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
              <Label htmlFor={"quantity"} text={"Quantidade"} />
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
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
          </div>

          <div className="col-span-full">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Imagens</h2>
            <div className="flex gap-x-2">
              <input
                type="file"
                multiple
                onChange={(e) => handleImageChange(e.target.files)}
                className="border-0 text-gray-900 shadow-sm"
              />
              <button
                type="button"
                className="rounded-md bg-red-600 text-white px-2 py-1"
                onClick={() => {
                  setImages([]);
                  setImagePreviews([]);
                }}
              >
                Remover todas
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
              {imagePreviews.map((image, index) => (
                <div key={index} className="relative">
                  <img src={image} alt={`preview ${index}`} className="w-full h-full object-cover rounded-md" />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-md"
                    onClick={() => removeImage(index)}
                  >
                    X
                  </button>
                  {index === 0 && <span className="absolute top-1 left-1 bg-white text-red-600 px-1">Foto principal</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 mt-8">
          <button type="submit" className="rounded-md bg-red-600 text-white px-4 py-2">
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
