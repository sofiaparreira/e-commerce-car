import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CardProduct = ({ product }) => {
  //consumindo o CartRoutes
  const handleAddToCart = async () => {
    try {
      const response = await axios.post("http://localhost:3000/cart/add", {
        userId: 1,
        productId: product.id,
        quantity: 1,
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error adding product to cart: ", error.response.data);
    }
  };

  const navigate = useNavigate();

  const handleContextMenu = (e) => {
    e.preventDefault();
    navigate(`/admin/edit/${product.id}`);
  };

  const firstImage =
    product.ProductImages && product.ProductImages.length > 0
      ? product.ProductImages[product.ProductImages.length - 1].url
      : product.image;

  return (
    <div
      className="bg-white text-white rounded-xl pb-8"
      onClick={handleContextMenu}
    >
      <img
        className="rounded-2xl object-cover object-center"
        src={firstImage}
        alt={product.model}
      />
      <div className="p-8">
        <h2 className="text-2xl text-zinc-800 font-medium first-letter:uppercase">
          {product.model}
        </h2>
        <p className="text-gray-600 first-letter:uppercase">{product.brand}</p>
        <div className="flex items-center space-x-2 text-gray-600 font-medium">
          <span className="first-letter:uppercase">{product.engine}</span>
          <span>|</span>
          <span>{product.power} CV</span>
        </div>
        <p className="text-gray-600 first-letter:uppercase">{product.year}</p>
        <p className="text-xl text-zinc-900 mt-8 font-semibold">
          R${" "}
          {product.price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
        className="bg-red-600 mx-8 rounded-xl px-24 py-3 z-10"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default CardProduct;
