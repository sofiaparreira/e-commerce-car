import React, { useState } from "react";

const Payment = () => {
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    if (isPaid) {
      setIsPaid === true;
    } else {
      setIsPaid === false;
    }
  };

  return (
    <div className="mx-52 mt-16">
      <h1 className="text-2xl mb-16">Dados para Entrega</h1>

      <div className="flex flex-col gap-y-8">
          <input className="border boder-gray-300 rounded-md px-2 py-2 outline-none" placeholder="Nome Completo" type="text" />
          <input className="border boder-gray-300 rounded-md px-2 py-2 outline-none" placeholder="Endereço" type="text" />
          <div className="flex gap-16">
            <input className="border boder-gray-300 rounded-md px-2 py-2 outline-none w-full" placeholder="Número" type="text" />
            <input className="border boder-gray-300 rounded-md px-2 py-2 outline-none w-full" placeholder="Complemento" type="text" />
          </div>
          <input className="border boder-gray-300 rounded-md px-2 py-2 outline-none w-full" placeholder="cpf" type="text" />
          <input type="text" />
      </div>

      <div className="flex justify-center items-center"><button className="w-full rounded-md py-2 bg-red-600 text-white" onClick={handlePayment}>Pagar</button></div>

      {isPaid && <div>Pagamento efetuado com sucesso</div>}
    </div>
  );
};

export default Payment;
