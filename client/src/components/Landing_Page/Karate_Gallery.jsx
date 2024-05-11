import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Karate_Gallery() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full bg-[#161616] px-28">
      <h1
        className="flex flex-wrap py-6 text-xl font-bold cursor-pointer sm:text-xl"
      >
        <span className="text-[#FF1616] font-sans">#Karate</span>
        <span className="font-sans text-slate-50">Photos</span>
      </h1>

      <div
        className="grid grid-cols-1 gap-2 mb-8 sm:grid-cols-3"
      >
        <div>
          <img
            className="block object-cover object-center w-full h-full rounded-lg"
            src="https://www.wkf.net/imagenes/noticias/destacado-noticia20211120200819.jpg"
            alt=""
            data-aos="zoom-in"
          />
        </div>
        <div>
          <img
            className="block object-cover object-center w-full h-full rounded-lg"
            src="https://www.wkf.net/imagenes/galeria/2021-senior-world-championships/WKF_World_Karate_Championship_Dubai2021_2_16.11.20201.jpg"
            alt=""
            data-aos="zoom-in"
          />
        </div>
        <div>
          <img
            className="block object-cover object-center w-full h-full rounded-lg"
            src="https://www.wkf.net/imagenes/galeria/2022-karate-1-premier-league-fujairah/karate1fujairah_03_06.jpg"
            alt=""
            data-aos="zoom-in"
          />
        </div>
        <div>
          <img
            className="block object-cover object-center w-full h-full rounded-lg"
            src="https://www.wkf.net/imagenes/noticias/2017-wkf-official-calendar-announced-477.jpg"
            alt=""
            data-aos="zoom-in"
          />
        </div>
        <div>
          <img
            className="block object-cover object-center w-full h-full rounded-lg"
            src="https://www.wkf.net/imagenes/noticias/destacado-noticia20230313094433.jpg"
            alt=""
            data-aos="zoom-in"
          />
        </div>
        <div>
          <img
            className="block object-cover object-center w-full h-full rounded-lg"
            src="https://www.wkf.net/imagenes/noticias/111118_wc_01.jpg"
            alt=""
            data-aos="zoom-in"
          />
        </div>
      </div>
      <br />
    </div>
  );
}
