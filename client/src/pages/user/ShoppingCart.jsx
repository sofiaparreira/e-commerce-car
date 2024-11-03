import React, { useState } from "react";
import ItemCart from "../../components/ItemCart";

const ShoppingCart = () => {
  const [itemsCart, setItemsCart ] = useState()
  

  return (
    <div>
      <section className="py-24 relative">
        <div className="lg:max-w-7xl 2xl:px-0 lg:px-8 px-16 mx-auto">
          <h2 className="title font-bold text-3xl leading-10 mb-8 text-zinc-900 max-lg:text-center">
            Meu Carrinho
          </h2>

          <ItemCart />


          {/* Repeat for other items in the cart */}
          <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
            <h5 className="text-gray-900 font-semibold text-xl leading-9 w-full max-md:text-center max-md:mb-4">
              Total
            </h5>
                       
              <h6 className="font-bold text-3xl lead-10 text-red-600">$440</h6>
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
