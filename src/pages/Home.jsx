import React from 'react'
import Bg_Image from "../assets/bg-image.jpg";
import Timer from '../helpers/Timer';

export default function Home() {
  return (
    <div cl>
      <img
          src={Bg_Image}
          alt="SL-Karate"
          className="Bg-Image h-200 w-full"
        />
        <Timer/>
    </div>

  )
}
