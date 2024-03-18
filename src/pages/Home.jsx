import React from "react";
import Bg_Image from "../assets/bg-image.jpg";
import Timer from "../helpers/Timer";
import Advertistment from "../helpers/Advertistment";
import News_n_Media from "../helpers/News_n_Media";
import Upcoming_Events from "../helpers/Upcoming_Events";
import Karate_Gallery from "../helpers/Karate_Gallery";
import Home_Slider from "../components/Landing_Page/Home_Slide";

export default function Home() {
  const deadline = new Date().getTime() + 28 * 24 * 60 * 60 * 1000;

  return (
    <div>
      <img
        src={Bg_Image}
        alt="SL-Karate"
        className="object-cover w-full h-screen mt-0 Bg-Image"
      />
      <Home_Slider />
      <Timer deadline={deadline} />
      <Advertistment />
      <News_n_Media />
      <Upcoming_Events />
      <Karate_Gallery />
    </div>
  );
}
