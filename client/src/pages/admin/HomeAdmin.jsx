import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.PNG'
import banner3 from '../../assets/banner3.PNG'
import banner4 from '../../assets/banner4.jpg'
import banner5 from '../../assets/banner5.jpg'
import banner6 from '../../assets/banner6.jpg'
import banner7 from '../../assets/banner7.jpg'
import CardProduct from '../../components/CardProduct'

const HomeAdmin = () => {

  const [products, setProducts] = useState([])
  const [currentBanner, setCurrentBanner] = useState(0)

  const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7] 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Erro ao buscar produto', error)
      }
    }
    fetchProducts()
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length)
    }, 10000) // 1000 =1seg
    return () => clearInterval(interval)
  }, [banners.length])


  
  return (
    <div className='bg-white text-gray-900'>
      <NavBar />

      <div className="relative flex-col flex items-center justify-center bg-cover bg-center aspect-[16/6]"  style={{ backgroundImage: `url(${banners[currentBanner]})` }}>
      
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <h1 className='text-white relative pb-16 text-3xl'>Sport Cars</h1>
    
        <Link className="relative text-white text-center font-light py-2 px-12 border border-white transition-all duration-200  hover:shadow hover:shadow-gray-100">
          COMPRAR
        </Link>

        
      </div>

      <section className='px-44 py-16'>
          <div className='flex justify-between'>
              <h1 className='text-3xl font-medium'>Carros</h1>
              <Link to='/admin/add' className='px-6 flex items-center gap-4 text-white rounded-md bg-red-600'><svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path className='fill-white' d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>Adicionar produto</Link>
          </div>
              <p className='text-gray-600 text-sm mt-1'>Nossos melhores carros esportivos</p>
 

          <div className='mt-16 grid grid-cols-3 gap-32'>
            {products.map(product => (
              <CardProduct key={product.id} product={product}/>
            ))}

          </div>
      </section>



    </div>
  )
}

export default HomeAdmin
