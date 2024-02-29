import React from 'react'
import Bg_Image from "../assets/bg-image.jpg";
import Timer from '../helpers/Timer';
import Advertistment from '../helpers/Advertistment';
import News_n_Media from '../helpers/News_n_Media';
import Upcoming_Events from '../helpers/Upcoming_Events';
import Karate_Gallery from '../helpers/Karate_Gallery';
import Slider from '../components/Home_Slide';

export default function Home() {
  return (
    <div>

      
      <img
          src={Bg_Image}
          alt="SL-Karate"
          className="object-cover w-full h-screen mt-0 Bg-Image"
        />

<Timer/>
<Advertistment/>
<News_n_Media/>
<Upcoming_Events/>
<Karate_Gallery/>
        
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
