import React, { useEffect } from "react";
import Bg_Image from "../assets/bg-image.jpg";
import Timer from "../components/Landing_Page/Timer";
import Advertistment from "../components/Landing_Page/Advertistment";
import News_n_Media from "../components/Landing_Page/News_n_Media";
import Upcoming_Events from "../components/Landing_Page/Upcoming_Events";
import Karate_Gallery from "../components/Landing_Page/Karate_Gallery";
import Home_Slider from "../components/Landing_Page/Home_Slide";
import Footer from "../components/Footer/Footer";
import KarateLearningCenter from "../components/Landing_Page/KarateLearningCenter";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const starts = new Date().getTime() + 28 * 24 * 60 * 60 * 1000;


  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);
  
  return (
    <div>
      <img
        src={Bg_Image}
        alt="SL-Karate"
        className="object-cover w-full h-screen mt-0 Bg-Image"
       data-aos="fade-down"
    

      />
      <Home_Slider />
      <Timer starts={starts} />
      <Advertistment />
      {/* <KarateLearningCenter/> */}
      <News_n_Media />
      <Upcoming_Events />
      <Karate_Gallery />
      <Footer />
    </div>
  );
}
