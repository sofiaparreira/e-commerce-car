import React from 'react'
import NavBar from '../../components/NavBar'
import CardOrders from '../../components/CardOrders'

const Orders = () => {
  return (
    <div className="bg-white text-gray-900">
        <NavBar />

        <div className='pt-32 mx-32'>
            <CardOrders />
        </div>
    </div>
  )
}

export default Orders
