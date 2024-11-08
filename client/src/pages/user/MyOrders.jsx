import React from 'react'
import NavBar from '../../components/NavBar'
import CardOrders from '../../components/CardOrders'

const MyOrders = () => {
  return (
    <div className="bg-white text-gray-900">
        <NavBar />

        <div className='pt-32 mx-32'>
            <h1 className='text-2xl font-semibold pb-1'>Meus Pedidos</h1>
            <p className='mb-16 text-sm'>Histórico de todas as suas compras!</p>
            <div className='grid grid-cols-2'>
                <CardOrders />
            </div>
        </div>
    </div>
  )
}

export default MyOrders
