import React from 'react'
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'
import banner1 from '../../assets/banner1.jpg'
import CardProduct from '../../components/CardProduct'

const Home = () => {
  return (
    <div className='bg-white text-gray-900'>
      <NavBar />

      <div className="relative flex-col flex items-center justify-center bg-cover bg-center aspect-[16/6]" style={{ backgroundImage: `url(${banner1})` }}>
      
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <h1 className='text-white relative pb-16 text-3xl'>Sport Cars</h1>
    
        <Link className="relative text-white text-center font-light py-2 px-12 border border-white transition-all duration-200  hover:shadow hover:shadow-gray-100">
          COMPRAR
        </Link>

        
      </div>

      <section className='px-40 py-16'>
          <h1 className='text-3xl font-medium'>Carros</h1>
          <p className='text-gray-600 text-sm mt-1'>Nossos melhores carros esportivos</p>

          <div className='mt-16 grid grid-cols-3 gap-16'>
            <CardProduct/>

          </div>
      </section>



    </div>
  )
}

export default Home
