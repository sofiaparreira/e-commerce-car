import React from 'react'

const CardProduct = () => {
  return (
    <div className='bg-zinc-100 text-white'>
        <img src="" alt="" />
        <div className='p-8'>
            <h2 className='text-2xl text-zinc-800 font-medium first-letter:uppercase'>Porche 101</h2>
            <p className='text-gray-600 first-letter:uppercase'>marca</p>
            <p className='text-xl text-red-600 mt-8'>R$ 300.000</p>
        </div>

        <button className='bg-red-600 w-full py-2'>Adicionar ao carrinho</button>
      
    </div>
  )
}

export default CardProduct
