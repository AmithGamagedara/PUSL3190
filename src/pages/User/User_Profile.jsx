import React from "react";
import Ad_Banner from "../../assets/Ad-banner.jpg";
import Footer from "../../components/Footer/Footer";

export default function UserProfile() {
  return (
    <div className=" bg-[#161616] min-h-screen">
    <div className="flex flex-col items-center justify-center mt-0 ml-0 ">
      <div className="max-w-4xl mx-auto mt-24 text-gray-900 bg-white rounded-lg shadow-xl">
        <div className="h-32 overflow-hidden rounded-t-lg">
          <img
            class="object-cover object-top w-full"
            src="https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3069.jpg?t=st=1711308364~exp=1711311964~hmac=9ccc6e71fd08d51ae33fcc92c4c5dab26b2b34f869ad815606386465170e957a&w=996"
            alt=""
          />
        </div>
        <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
          <img
            class="object-cover object-center h-32"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="mt-2 text-center">
          <h2 className="text-xl font-semibold">Dumsantha Senadheera</h2>
          <p className="text-gray-500">Black Belter</p>
        </div>

        <div className="p-4 mx-8 mt-2 mb-8 border-t border-gray-300">
          <div class="grid grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-red-500 h-36">01</div>
            <div className="p-4 bg-red-500 h-36">02</div>
            <div className="p-4 bg-red-500 h-36">03</div>
            <div className="p-4 bg-red-500 h-36">04</div>
            <div className="p-4 bg-red-500 h-36">05</div>
            <div className="p-4 bg-red-500 h-36">06</div>
          </div>
        </div>
      </div>


      
    </div>
    <div className="mt-24">
    <Footer/>
    </div>

    </div>
  );
}
