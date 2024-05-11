import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Advertistment = () => {
 
  const renderArrowPrev = (clickHandler, hasPrev) => {
    return (
      hasPrev && (
        <button
          onClick={clickHandler}
          className="absolute z-10 p-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full left-4 top-1/2 hover:bg-opacity-75"
        >
          <AiOutlineLeft className="text-white" size={24} />
        </button>
      )
    );
  };

  
  const renderArrowNext = (clickHandler, hasNext) => {
    return (
      hasNext && (
        <button
          onClick={clickHandler}
          className="absolute z-10 p-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full right-4 top-1/2 hover:bg-opacity-75"
        >
          <AiOutlineRight className="text-white" size={24} />
        </button>
      )
    );
  };

  return (
    <div className="container mx-auto ">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        className="rounded-lg shadow-lg"
      >
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1555597408-26bc8e548a46?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 1"
            className="object-cover w-full h-48 sm:h-80"
          />
          <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black via-transparent to-transparent">
            <p className="font-sans text-2xl font-extrabold tracking-wider text-white shadow-lg sm:text-3xl">
              Practice
            </p>
            <p className="mt-2 font-sans text-lg text-white shadow-lg sm:text-xl">
              Karate practice involves dedicated training sessions to refine techniques, improve conditioning, and master katas (forms).
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1525198104776-f6e8a873f9b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 2"
            className="object-cover w-full h-48 sm:h-80"
          />
          <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black via-transparent to-transparent">
            <p className="font-sans text-2xl font-extrabold tracking-wider text-white shadow-lg sm:text-3xl">
              Discipline
            </p>
            <p className="mt-2 font-sans text-lg text-white shadow-xl sm:text-lg">
              Discipline in karate embodies commitment to self-improvement, perseverance, and respect for dojo rules and peers.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1555597408-bda2ca384d49?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 3"
            className="object-cover w-full h-48 sm:h-80"
          />
          <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black via-transparent to-transparent">
            <p className="font-sans text-2xl font-extrabold tracking-wider text-white shadow-2xl sm:text-3xl drop-shadow-lg">
              Meditation
            </p>
            <p className="mt-2 font-sans text-lg text-white shadow-xl sm:text-xl drop-shadow-lg">
              In karate, meditation focuses the mind and centers one's spirit, helping practitioners cultivate inner peace and clarity.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Advertistment;
