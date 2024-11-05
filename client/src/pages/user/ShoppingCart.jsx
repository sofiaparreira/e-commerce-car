import React, { useEffect, useState } from "react";
import ItemCart from "../../components/ItemCart";

const ShoppingCart = () => {
  const [itemsCart, setItemsCart] = useState([]);
  const [userID, setUserID] = useState(localStorage.getItem("userId"));

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cart/${userID}`);
        if (!response.ok) {
          console.log("Erro ao buscar itens no carrinho");
          return;
        }
        const data = await response.json();
        const productIds = data.map((item) => item.productId);

        const fetchedProducts = await fetchProducts(productIds);
        setItemsCart(fetchedProducts);
      } catch (error) {
        console.error("Erro ao buscar dados do carrinho:", error);
      }
    };

    const fetchProducts = async (productIds) => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const allProducts = await response.json();

        const selectedProducts = allProducts.filter((product) =>
          productIds.includes(product.id)
        );

        return selectedProducts;
      } catch (error) {
        console.error("Erro ao buscar os produtos", error);
      }
    };

    if (userID) {
      fetchItems();
    }
  }, [userID]);

  const handleUpdateItem = async (productId, quantity) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${userID}/${productId}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });
      if (!response.ok) {
        console.log("Erro ao atualizar item no carrinho");
        return;
      }
      const data = await response.json();
      setItemsCart(data.cart);
    } catch (error) {
      console.error("Erro ao atualizar item no carrinho:", error);
    }
  };

  const handleDeleteItem = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${userID}/${productId}/delete`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        console.log("Erro ao deletar item do carrinho");
        return;
      }
      const data = await response.json();
      setItemsCart(data.cart);
    } catch (error) {
      console.error("Erro ao remover item do carrinho:", error);
    }
  };

  const calculateTotal = () => {
    return itemsCart.reduce((total, item) => {
      const price = item.price || 0;
      const quantity = item.quantity || 1;
      const itemTotal = price * quantity;

      return total + itemTotal;
    }, 0);
  };

  return (
    <div>
      <section className="py-24 relative">
        <div className="lg:max-w-7xl 2xl:px-0 lg:px-8 px-16 mx-auto">
          <h2 className="title font-bold text-3xl leading-10 mb-8 text-zinc-900 max-lg:text-center">
            Meu Carrinho
          </h2>
          <div className="mt-16 grid grid-cols-3 gap-32">
            {itemsCart.length > 0 ? (
              itemsCart.map((product) => (
                <ItemCart
                  key={product.id}
                  product={product}
                  onDelete={() => handleDeleteItem(product.id)}
                  onUpdate={handleUpdateItem}
                />
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
              {calculateTotal()}
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
