// ItemCart.js
import React, { useState, useEffect } from "react";

const ItemCart = ({ product, onUpdate, onDelete }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);

  // Sincroniza a quantidade inicial do produto quando o `product.quantity` muda
  useEffect(() => {
    setQuantity(product.quantity || 1);
  }, [product.quantity]);

  const imageUrl = product.ProductImages && product.ProductImages.length > 0
    ? product.ProductImages[0].url
    : "https://pagedone.io/asset/uploads/1701162826.png";

  const handleIncreaseQuantity = () => {
    if (quantity < product.stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onUpdate(product.id, newQuantity);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdate(product.id, newQuantity);
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
      onUpdate(product.id, newQuantity);
    }
  };

  const handleRemoveItem = () => {
    onDelete(product.id);
  };

  return (
    <div className="rounded-lg border-2 border-gray-200 p-4 lg:pt-8 lg:px-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 gap-x-4">
      <div className="col-span-12 lg:col-span-2 img box">
        <img
          src={imageUrl}
          alt={product.model}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-medium text-2xl first-letter:uppercase mb-2 leading-9 text-gray-900">
            {product.model}
          </h2>
        </div>
        <span className="px-4 py-1 text-base rounded-md bg-red-100 text-red-700">{product.brand}</span>
        
        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecreaseQuantity}
              className="text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              disabled={quantity <= 1}
            >
              -
            </button>
            
            <input
              type="number"
              className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={product.stock}
            />

            <button
              onClick={handleIncreaseQuantity}
              className="text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              disabled={quantity >= product.stock}
            >
              +
            </button>
          </div>

          <button
            onClick={handleRemoveItem}
            className="text-red-600 font-semibold hover:text-red-800 ml-4"
          >
            Remover
          </button>

          <h6 className="text-red-600 font-bold text-xl leading-9 text-right ml-auto">
            R$ {product.price * quantity}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
