import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CardProduct = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      const response = await axios.post("http://localhost:3000/cart/add", {
        userId: 1, 
        productId: product.id, 
        quantity: 1,
      });
      console.log("Product added successfully:", response.data.message);
    } catch (error) {
    
      if (error.response && error.response.data) {
        console.error("Error adding product to cart:", error.response.data);
        alert(`Error: ${error.response.data.message || "Unable to add to cart"}`);
      } else if (error.request) {
        console.error("Network error or server did not respond:", error.message);
        alert("Network error: Could not connect to server.");
      } else {
        console.error("Unexpected error:", error.message);
        alert("An unexpected error occurred.");
      }
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
      className="border boder-gray-200   text-white rounded-xl pb-4"
      onClick={handleContextMenu}
    >
      <img
        className="rounded-2xl object-cover object-center h-72 w-full"
        src={firstImage}
        alt={product.model}
      />
      <div className="px-4 py-8">
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

      <div className="px-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
          className="bg-red-600 rounded-lg w-full py-2 z-10"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
