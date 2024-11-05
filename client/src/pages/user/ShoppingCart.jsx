import React, { useEffect, useState } from "react";
import ItemCart from "../../components/ItemCart";

const ShoppingCart = () => {
  const [itemsCart, setItemsCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);

  const userID = localStorage.getItem("userId");
  console.log("O ID DO USUARIO É:", userID);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cart/${userID}`);

        if (!response.ok) {
          console.log("Erro ao mostrar itens no carrinho");
        }
        const data = await response.json();
        
        // Aqui filtramos e pegamos apenas os productId
        const productIds = data.map((item) => item.productId);
        console.log("Product IDs no carrinho: ", productIds);  // Verifique no console se está retornando os IDs corretamente
        setItemsCart(productIds);  // Armazenamos apenas os IDs dos produtos no estado
      } catch (error) {
        console.error(error);
      }
    };

    if (userID) {
      fetchItems();
    }
  }, [userID]);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products/`);
      if (!response.ok) {
        console.log("Erro ao mostrar itens no carrinho");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="py-24 relative">
        <div className="lg:max-w-7xl 2xl:px-0 lg:px-8 px-16 mx-auto">
          <h2 className="title font-bold text-3xl leading-10 mb-8 text-zinc-900 max-lg:text-center">
            Meu Carrinho
          </h2>
          <div className="mt-16 grid grid-cols-3 gap-32">
            {/* Removido a renderização de products, pois não está definido */}
          </div>

          <div>
            {/* Exibe apenas os ids dos produtos que estão no carrinho */}
            {itemsCart.length > 0 ? (
              itemsCart.map((productId) => (
                <div key={productId}>
                  <p>Produto ID: {productId}</p>
                </div>
              ))
            ) : (
              <p>Seu carrinho está vazio.</p>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
            <h5 className="text-gray-900 font-semibold text-xl leading-9 w-full max-md:text-center max-md:mb-4">
              Total
            </h5>
            <h6 className="font-bold text-3xl lead-10 text-red-600">
              R${" "}
              {itemsCart.reduce((total, item) => total + item.priceAll, 0).toFixed(2)}
            </h6>
          </div>
          <div className="max-lg:max-w-lg max-lg:mx-auto">
            <button className="rounded-full mt-8 py-4 px-6 bg-red-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-red-700">
              Confirmar Compra
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCart;
