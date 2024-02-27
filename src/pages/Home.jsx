import React from 'react'
import Bg_Image from "../assets/bg-image.jpg";
import Timer from '../helpers/Timer';
import Advertistment from '../helpers/Advertistment';

export default function Home() {
  return (
    <div>
      <img
          src={Bg_Image}
          alt="SL-Karate"
          className="mt-0 Bg-Image"
        />

<Timer/>
<Advertistment/>
        
    </div>
    
    // <div className='bg-black '>
    //   <img
    //       src={Bg_Image}
    //       alt="SL-Karate"
    //       className=" Bg-Image"
    //     />
    //     <Timer/>
    // </div>

  )
}
