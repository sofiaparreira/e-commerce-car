import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.PNG";
import banner3 from "../../assets/banner3.PNG";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";
import banner6 from "../../assets/banner6.jpg";
import banner7 from "../../assets/banner7.jpg";
import CardProduct from "../../components/CardProduct";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState(""); 
  const [search, setSearch] = useState('')

  const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produto", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const filteredProducts = products.filter((product) =>
    (selectedBrand ? product.brand === selectedBrand : true) &&
    (search ? product.model.toLowerCase().includes(search.toLowerCase()) : true)
  );

  return (
    <div className="bg-zinc-200 text-gray-900">
      <NavBar />

      <div
        className="relative flex-col flex justify-center bg-cover bg-center xl:aspect-[16/7] aspect-[16/10] py-32"
        style={{ backgroundImage: `url(${banners[currentBanner]})` }}
      >
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
            emocionante. Descubra seu próximo carro dos sonhos conosco!
          </p>

          <Link className="relative text-white text-center font-light py-2 px-12 border border-white transition-all duration-200 hover:shadow hover:shadow-gray-100">
            COMPRAR
          </Link>
        </div>
      </div>

      <section className="px-44 py-16 bg-zinc-100">
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium">Carros</h1>

          <select
            name="brand"
            id="brand"
            className="px-12 rounded-md"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Nissan">Nissan</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Audi">Audi</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Mazda">Mazda</option>
          </select>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          Nossos melhores carros esportivos
        </p>

        <form class="flex items-center w-full mt-16 mb-8 x-auto">
          <label class="sr-only" for="voice-search">
            Search
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
              >
                <path
                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              required=""
              placeholder="Search..."
              class="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              id="voice-search"
              type="text"
            />
            <button
              onClick={() => setSearch('')} 
              class="absolute inset-y-0 end-0 flex items-center pe-3"
              type="button"
            ></button>
          </div>
          <button
            class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            type="submit"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="w-4 h-4 me-2"
            >
              <path
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
              ></path>
            </svg>
            Search
          </button>
        </form>

       

        <div className="mt-16 grid grid-cols-3 gap-16">
          {filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
