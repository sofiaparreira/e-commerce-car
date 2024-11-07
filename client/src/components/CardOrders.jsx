import React from "react";

const CardOrders = () => {
  return (
    <div className="grid grid-cols-3 border rounded-lg p-8 boder-gray-200">
      <img className="col-span-1" src="" alt="" />

      <div>
        <div className="flex justify-between items-center">
            <h1 className="py-2 font-semibold text-xl">Model do Carro</h1>
            <span className=" font-bold text-2xl text-red-600">R$ 1000,000</span>
        </div>
        <div className="flex gap-x-16  ">
            <div className="mb-4">
                <p>brand</p>
                <p>data</p>
            </div>
            <div className="mb-4">
                <p>power</p>
                <p>engine</p>
            </div>
       
        </div>

        <span className="bg-red-100 text-red-700 px-8 py-1.5 text-sm rounded-md">Pendente</span>

      </div>
    </div>
  );
};

export default CardOrders;
