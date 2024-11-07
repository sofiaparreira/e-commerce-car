import React, { useState } from "react";

const CardOrders = () => {
  const [status, setStatus] = useState("Pendente");

  const handleStatusClick = () => {
    setStatus((prevStatus) => {
      if (prevStatus === "Pendente") return "Pago";
      if (prevStatus === "Pago") return "Enviado";
      if (prevStatus === "Enviado") return "Entregue";

      return "Pendente";
    });
  };

  return (
    <div className="flex gap-16 border rounded-lg py-8 border-gray-200">
      <div>
        <img className="w-64" src="" alt="" />
      </div>

      <div>
        <div className="flex gap-8 mb-2">
          <h1 className="font-semibold text-lg">Modelo do Carro</h1>
          <span
            onClick={handleStatusClick}
            className={`${
              status === "Pendente"
                ? "bg-red-100 text-red-700"
                : status === "Pago"
                ? "bg-green-100 text-green-700"
                : status === "Enviado"
                ? "bg-orange-100 text-orange-700"
                : "bg-blue-100 text-blue-700"
            } px-4 flex items-center text-sm rounded cursor-pointer`}
          >
            {status}
          </span>
        </div>
        <span className="font-bold text-xl text-red-600">R$ 1.000.000</span>
        <p className="pt-4 text-sm">Data do Pedido pelo user</p>
      </div>
    </div>
  );
};

export default CardOrders;
