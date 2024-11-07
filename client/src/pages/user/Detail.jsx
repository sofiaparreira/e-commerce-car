import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState()
  const [mainImage, setMainImage] = useState("");


  const handleGetDetail = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${id}`
      );
      const data = await response.json();
      setProduct(data)
      if (data.ProductImages && data.ProductImages.length > 0) {
        setMainImage(data.ProductImages[0].url);
      }
      console.log("Detalhes do produot", data);
    } catch (error) {
      console.log("Erro ao buscar detalhes do produto: ", error);
    }
  };

  useEffect(() => {
    handleGetDetail();
  }, [id]);

  

  if(!product) return <p>Carregando...</p>

  return (
    <div>
      <NavBar />
      <section class="flex h-full min-h-screen justify-center items-center">
        <div class="w-full mx-auto px-4 sm:px-6 lg:px-0">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
            <div class="img">
            <div className="img-box h-full max-lg:mx-auto">
                <img
                  src={mainImage}
                  alt={product.model}
                  className="max-lg:mx-auto lg:ml-auto h-full object-cover"
                />
              </div>
              {/* Lista de miniaturas */}
              <div className="flex mt-4 space-x-2 overflow-x-auto">
                {product.ProductImages.map((img, index) => (
                  <img
                    key={img.id}
                    src={img.url}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-20 h-20 object-cover cursor-pointer transition-transform transform hover:scale-100 hover:border-4 hover:border-gray-300 hover:shadow-lg"
                    onClick={() => setMainImage(img.url)}
                  />
                ))}
              </div>
            </div>
            <div class="data w-full my-110 lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
              <div class="data w-full max-w-2xl">
                <div className="flex justify-between mb-8">
                <span>
                    <h2 class="font-bold text-3xl text-gray-900 mb-4">
                      {product.model}
                    </h2>
                    <span className="border-b border-red-500 py-1 px-4 ">{product.brand}</span>
                </span>

                <h6 class="font-semibold text-2xl leading-9 mb-12 text-gray-900 pr-5 mr-5">
                  R$220
                </h6>
                </div>
               
               <ul className="text-gray-500 list-disc px-4">
                <li>{product.engine} </li>
                <li>{product.power} CV</li>
                

               </ul>
               <div className="text-gray-500 text-base font-normal mt-12 border border-gray-200 rounded p-4 mb-8">
                  {product.description
                    .split("\n")
                    .map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                </div>

                 
                  
                </div>
               
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
