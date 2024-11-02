import React from 'react'

const CardProduct = ({ product }) => {
  return (
    <div className='bg-white text-white rounded-xl'>
        <img className='rounded-2xl' src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Lamborghini_Si%C3%A1n_IAA_2019_JM_1094.jpg" alt="" />
        <div className='p-8'>
            <h2 className='text-2xl text-zinc-800 font-medium first-letter:uppercase'>{product.model}</h2>
            <p className='text-gray-600 first-letter:uppercase'>{product.brand}</p>
            <p className='text-xl text-zinc-900 mt-8 font-semibold'>R$ {product.price}</p>
        </div>

        <button className='bg-red-600 mx-8 rounded-xl mb-4 px-24 py-2'>Adicionar ao carrinho</button>
      
    </div>
  )
}

export default CardProduct
