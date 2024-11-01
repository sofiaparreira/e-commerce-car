import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import banner1 from "../../assets/banner1.jpg";
import CardProduct from "../../components/CardProduct";

const Home = () => {
  return (
    <div className="bg-zinc-200 text-gray-900">
      <NavBar />

      <div
        className="relative flex-col flex  justify-center bg-cover bg-center xl:aspect-[16/7] aspect-[16/10] py-32"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        {/* Gradiente: preto com opacidade 80 no topo, opacidade 50 no meio e opacidade 80 na parte inferior */}
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

      <section className="px-40 py-16 bg-zinc-100">
        <h1 className="text-3xl font-medium">Carros</h1>
        <p className="text-gray-600 text-sm mt-1">
          Nossos melhores carros esportivos
        </p>

        <div className="mt-16 grid grid-cols-3 gap-16">
          <CardProduct />
        </div>
      </section>
    </div>
  );
};

export default Home;
