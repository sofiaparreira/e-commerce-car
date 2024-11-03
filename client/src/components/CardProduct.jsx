import React from 'react'
import { useNavigate } from 'react-router-dom';

const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  const handleContextMenu = (e) => {
    e.preventDefault(); 
    navigate(`/admin/edit/${product.id}`); 
  };

   const firstImage = product.ProductImages && product.ProductImages.length > 0 ? product.ProductImages[product.ProductImages.length - 1].url : product.image;
  return (
    <div className='bg-white text-white rounded-xl' onClick={handleContextMenu}>
        <img 
          className="rounded-2xl w-248 h-248 object-cover object-center" 
          src={firstImage} 
          alt={product.model} 
        />
        <div className='p-8'>
            <h2 className='text-2xl text-zinc-800 font-medium first-letter:uppercase'>{product.model}</h2>
            <p className='text-gray-600 first-letter:uppercase'>{product.brand}</p>
            <div className='flex items-center space-x-2 text-gray-600 font-medium'>
                <span className='first-letter:uppercase'>{product.engine}</span>
                <span>|</span>
                <span>{product.power} CV</span>
            </div>
            <p className='text-gray-600 first-letter:uppercase'>{product.year}</p>
            <p className='text-xl text-zinc-900 mt-8 font-semibold'>
              R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
        </div>

        <button className='bg-red-600 mx-8 rounded-xl mb-4 px-24 py-2'>Adicionar ao carrinho</button>
      
    </div>
  )
}

export default CardProduct
