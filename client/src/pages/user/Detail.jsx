import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState()


  const handleGetDetail = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/detail/${id}`
      );
      const data = await response.json();
      setProduct(data)
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
      <section class="flex h-screen justify-center items-center">
        <div class="w-full mx-auto px-4 sm:px-6 lg:px-0">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
            <div class="img">
              <div class="img-box h-full max-lg:mx-auto ">
                <img
                  src="https://pagedone.io/asset/uploads/1700471600.png"
                  alt="Yellow Tropical Printed Shirt image"
                  class="max-lg:mx-auto lg:ml-auto h-full object-cover"
                />
              </div>
            </div>
            <div class="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
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
                <li>Potência: {product.power}</li>
                <li>Motor: {product.engine} </li>

               </ul>

                <p class="text-gray-500 text-base font-normal mt-12 border border-gray-200 rounded p-4 mb-8">
                 Descrição: {product.description}
                  
                </p>

        
                 
                  
                </div>
               
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
