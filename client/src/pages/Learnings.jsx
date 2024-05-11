import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import videoData from "../helpers/videos.json";

export default function Learnings() {
  const navigate = useNavigate();

  const goToAccuracyCheck = () => {
    navigate("/learning/accuracy-check");
  };

  useEffect(() => {
    // Initialize AOS with a default animation duration of 1 second
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16 bg-[#161616] min-h-screen">
      <div className="px-32 mt-8">
        <div className="flex items-center justify-between mb-8">
          <h1
            className="text-sm font-bold sm:text-2xl text-[#FF1616]"
            data-aos="fade-down"
          >
            Learnings
          </h1>
          <button
            onClick={goToAccuracyCheck}
            className="relative px-4 py-2 font-bold text-red-500 bg-black border border-red-500 rounded-md hover:bg-zinc-950 hover:text-red-500 "
          >
            Check Accuracy
            <span className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-red-500 rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-red-500 rounded-full"></span>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {videoData.map((video, index) => (
            <div key={index} className="overflow-hidden rounded">
              <div
                className="relative mb-2"
                style={{ paddingBottom: "56.25%" }}
              >
                <video className="absolute top-0 left-0 w-full h-full" controls>
                  <source src={video.src} type={video.type} />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h2 className="text-lg font-semibold text-left text-white">
                {video.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
