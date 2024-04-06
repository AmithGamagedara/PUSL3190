import React from "react";
import Bg_Image from "../assets/bg-image.jpg";
import Timer from "../helpers/Timer";
import Advertistment from "../components/Landing_Page/Advertistment";
import News_n_Media from "../components/Landing_Page/News_n_Media";
import Upcoming_Events from "../components/Landing_Page/Upcoming_Events";
import Karate_Gallery from "../components/Landing_Page/Karate_Gallery";
import Home_Slider from "../components/Landing_Page/Home_Slide";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const starts = new Date().getTime() + 28 * 24 * 60 * 60 * 1000;

  return (
    <div>
      <img
        src={Bg_Image}
        alt="SL-Karate"
        className="object-cover w-full h-screen mt-0 Bg-Image"
      />
      <Home_Slider />
      <Timer starts={starts} />
      <Advertistment />
      <News_n_Media />
      <Upcoming_Events />
      <Karate_Gallery />
      <Footer />
    </div>
  );
}
