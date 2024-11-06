import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Payment = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [fullName, setFullName] = useState('')

  const handlePayment = () => {

    setIsPaid(false);

      setIsPaid(true);

  };

  return (
    <>
    {!isPaid && (
      <div className="mx-52 mt-16">
        <h1 className="text-2xl mb-16">Dados para Entrega</h1>

        <div className="flex flex-col gap-y-8">
          <input onChange={(e) => setFullName(e.target.value)} className="border border-gray-300 rounded-md px-2 py-2 outline-none" required placeholder="Nome Completo" type="text" />
          <input className="border border-gray-300 rounded-md px-2 py-2 outline-none" required placeholder="Endereço" type="text" />
          <div className="flex gap-16">
            <input className="border border-gray-300 rounded-md px-2 py-2 outline-none w-full" required placeholder="Número" type="text" />
            <input className="border border-gray-300 rounded-md px-2 py-2 outline-none w-full" required placeholder="Complemento" type="text" />
          </div>
          <input className="border border-gray-300 rounded-md px-2 py-2 outline-none w-full" required placeholder="CPF" type="text" />
          <input type="text" />
        </div>

        <div className="flex justify-center items-center">
          <button className="w-full rounded-md py-2 bg-red-600 text-white" onClick={handlePayment}>
            Pagar
          </button>
        </div>
      </div>
      )}

      {isPaid && (
        <div className="py-8">
          <Link className="mb-8 mt-8 underline mx-8" to='/home'>Página inicial </Link>

        <div className="mt-4 flex flex-col items-center justify-center py-64">
        <p className="text-center text-gray-600 flex gap-2  ">Obrigado, <p className="first-letter:uppercase">{fullName}</p></p>
        <p className="mt-4 text-green-500 text-xl mb-4">Pagamento efetuado com sucesso</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28"
          width="28"
          viewBox="0 0 512 512"
          className="mt-2" 
        >
          <path
            className="fill-green-500"
            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
          />
        </svg>
      </div>
      </div>
      )}

    </>
  );
};

export default Payment;
