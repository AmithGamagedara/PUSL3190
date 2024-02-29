import React from 'react'

export default function Karate_Gallery() {
  return (
    <div className='w-full bg-[#161616] px-32'>
        <h1 className="flex flex-wrap py-6 text-xl font-bold cursor-pointer sm:text-xl">
          <span className="text-[#FF1616]">#Karate</span>
          <span className="text-slate-50">Photos</span>
        </h1>

<div class="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div>
            <img class="block h-full w-full object-cover object-center rounded-lg" src="https://www.wkf.net/imagenes/noticias/destacado-noticia20211120200819.jpg" alt=""/>
        </div>
        <div>
            <img class="block h-full w-full object-cover object-center rounded-lg" src="https://www.wkf.net/imagenes/galeria/2021-senior-world-championships/WKF_World_Karate_Championship_Dubai2021_2_16.11.20201.jpg" alt=""/>
        </div>
        <div>
            <img class="block h-full w-full object-cover object-center rounded-lg" src="https://www.wkf.net/imagenes/galeria/2022-karate-1-premier-league-fujairah/karate1fujairah_03_06.jpg" alt=""/>
        </div>
        <div>
            <img class="block h-full w-full object-cover object-center rounded-lg" src="https://www.wkf.net/imagenes/noticias/2017-wkf-official-calendar-announced-477.jpg" alt=""/>
        </div>
        <div>
            <img class="block h-full w-full object-cover object-center rounded-lg" src="https://www.wkf.net/imagenes/noticias/destacado-noticia20230313094433.jpg" alt=""/>
        </div>
        <div>
            <img class="block h-full w-full object-cover object-center rounded-lg" src="https://www.wkf.net/imagenes/noticias/111118_wc_01.jpg" alt=""/>
        </div>
    </div>
<br />
    </div>
  )
}
