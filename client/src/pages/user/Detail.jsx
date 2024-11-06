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

        
                 
                  <button class="group  mt-32 py-4 px-5 rounded-full bg-red-50 text-red-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-red-100">
                    <svg
                      class="stroke-red-600 "
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                        stroke=""
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
               
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
