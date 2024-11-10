import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Payment = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();

  const { orderId, totalPrice } = location.state || {}; // Verifique se orderId e totalPrice são passados corretamente

  // Função para atualizar o status do pedido no backend
  const handlePaymentPago = async () => {
    if (!orderId) {
      console.error("Pedido não encontrado!");
      alert("Erro: ID do pedido não encontrado.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/order/${orderId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Pago" }),
      });
      
    
  
      // Verifique a resposta da API
      const text = await response.text(); // Lê a resposta como texto
      console.log("Resposta da API:", text); // Verifica o que está vindo da API
  
      // Se a resposta não estiver vazia, tente parsear
      let data = {};
      if (text) {
        data = JSON.parse(text); // Apenas parseia se a resposta não estiver vazia
      }
  
      if (response.ok) {
        setIsPaid(true); // Marca o pedido como pago
      } else {
        console.error("Erro no backend:", data.error || "Erro desconhecido");
        alert("Erro ao processar pagamento. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao atualizar status do pedido:", error);
      alert("Erro ao tentar realizar o pagamento.");
    }
  };
  

  return (
    <>
      {!isPaid && (
        <>
          <h2>ID do Pedido: {orderId}</h2>
          <h3>Valor Total: R$ {totalPrice}</h3>

          <div className="font-sans bg-white p-4">
            <div className="max-w-4xl mx-auto">
              {/* Formulário de pagamento */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <form>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Primeiro nome"
                          className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-red-500 outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Último nome"
                          className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-red-500 outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-red-500 outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Telefone"
                          className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-red-500 outline-none"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-4 mt-12">
                <button
                  onClick={handlePaymentPago} // Chama a função para realizar o pagamento
                  type="button"
                  className="px-16 py-3 text-sm font-semibold tracking-wide bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Confirmar Pagamento
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {isPaid && (
        <div className="py-8">
          <Link className="mb-8 mt-8 underline mx-8" to="/home">
            Página inicial{" "}
          </Link>

          <div className="mt-4 flex flex-col items-center justify-center py-64">
            <p className="text-center text-gray-600 flex gap-2">
              Obrigado, <span className="first-letter:uppercase">{firstName}</span>
            </p>
            <p className="mt-4 text-green-500 text-xl mb-4">
              Pagamento efetuado com sucesso
            </p>
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
