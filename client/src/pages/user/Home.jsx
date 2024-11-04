import React, { useEffect, useState } from 'react'
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.PNG'
import banner3 from '../../assets/banner3.PNG'
import banner4 from '../../assets/banner4.jpg'
import banner5 from '../../assets/banner5.jpg'
import banner6 from '../../assets/banner6.jpg'
import banner7 from '../../assets/banner7.jpg'
import CardProduct from "../../components/CardProduct";

const Home = () => {

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
    <div className="bg-zinc-200 text-gray-900">
      <NavBar />

      <div
        className="relative flex-col flex  justify-center bg-cover bg-center xl:aspect-[16/7] aspect-[16/10] py-32"
        style={{ backgroundImage: `url(${banners[currentBanner]})` }}>
      
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1))",
          }}
        ></div>
        <div className="lg:mx-32 sm:mx-16 mx-8">
          <h1 className="text-white relative pb-4 md:text-6xl text-3xl font-base">
            Drift & Drive
          </h1>
          <p className="text-gray-100 max-md:text-sm relative pb-32 w-full lg:w-2/3 2xl:w-1/2">
            Sua referência em carros esportivos luxuosos e de drift. Aqui, você
            encontra uma seleção exclusiva de modelos que combinam performance e
            estilo, prontos para proporcionar uma experiência de condução
            emocionante. Descubra seu próximo carro dos sonhos conosco!"
          </p>

          <Link className="relative text-white text-center font-light py-2 px-12 border border-white transition-all duration-200 hover:shadow hover:shadow-gray-100">
            COMPRAR
          </Link>
        </div>
      </div>

      <section className="px-44 py-16 bg-zinc-100">
        <h1 className="text-3xl font-medium">Carros</h1>
        <p className="text-gray-600 text-sm mt-1">
          Nossos melhores carros esportivos
        </p>

        <div className="mt-16 grid grid-cols-3 gap-16">
        {products.map(product => (
              <CardProduct key={product.id} product={product}/>
            ))}

        </div>
      </section>
    </div>
  );
};

export default Home;
