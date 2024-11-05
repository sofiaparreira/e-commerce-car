import React from "react";

const ItemCart = ({ product }) => {
  const imageUrl = product.ProductImages && product.ProductImages.length > 0
    ? product.ProductImages[0].url
    : "https://pagedone.io/asset/uploads/1701162826.png";
  return (
    <div className="rounded-lg border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
      <div className="col-span-12 lg:col-span-2 img box">
        <img
          src={imageUrl} 
          alt={product.model}
          className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
        />
      </div>
      <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-medium text-2xl first-letter:uppercase mb-2 leading-9 text-gray-900">
            {product.model}
          </h2>
        </div>
        <span className="px-4 py-1 text-base rounded-md bg-red-100 text-red-700">{product.brand}</span>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <input
              type="number"
              className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center"
              value={product.quantity || 1}
              onChange={() => {}}
            />
          </div>
          <h6 className="text-red-600 font-bold text-xl leading-9 text-right">
            R$ {product.price}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
