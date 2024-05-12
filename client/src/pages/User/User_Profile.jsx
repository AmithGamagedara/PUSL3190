import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../pages/AuthContext";

export default function UserProfile() {
  const Navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    Navigate("/signin");
  };

  return (
    <div className="bg-[#161616] min-h-screen pt-16">
      {" "}
     
      <div className="flex flex-col items-center justify-center">
        <div className="relative z-10 max-w-4xl mx-auto mt-24 text-gray-900 bg-white rounded-lg shadow-xl">
          {" "}

          <div className="relative z-0 h-32 overflow-hidden rounded-t-lg">
            {" "}
          
            <img
              className="object-cover object-top w-full"
              src="https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3069.jpg"
              alt=""
            />
            <button
              onClick={handleSignOut}
              className="absolute z-20 p-2 text-white bg-transparent rounded-full top-4 right-4 hover:bg-gray-700 focus:outline-none"
              type="button"
            >
              <FaSignOutAlt size={24} />
            </button>
          </div>
          <div className="relative z-10 w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
            <img
              className="object-cover object-center h-32"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
              alt=""
            />
          </div>
          <div className="mt-2 text-center">
            <h2 className="text-xl font-semibold">Dumsantha Senadheera</h2>
            <p className="text-gray-500">Black Belter</p>
          </div>
          <div className="p-4 mx-8 mt-2 mb-8 border-t border-gray-300">
            <div className="flex flex-col items-stretch gap-4 mt-8">
              <button className="p-4 text-black bg-white border border-black rounded hover:bg-black hover:text-white">
                Edit Profile
              </button>
              <button className="p-4 text-black bg-white border border-black rounded hover:bg-black hover:text-white">
                Settings
              </button>
              <button className="p-4 text-black bg-white border border-black rounded hover:bg-black hover:text-white">
                View History
              </button>
              <button className="p-4 text-black bg-white border border-black rounded hover:bg-black hover:text-white">
                Upcoming Events
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
