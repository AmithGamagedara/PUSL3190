import React from 'react';

const KarateLearningCenter = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="flex items-center justify-between w-full p-8 bg-white rounded-lg shadow-lg">
        {/* Text Container */}
        <div className="w-1/2 p-4">
          <h1 className="mb-2 text-xl font-bold">Welcome to the Karate Learning Center</h1>
          <p className="text-base text-gray-700">Explore our tutorial videos and discover valuable tips for beginners.</p>
          <div className="mt-4">
            <button className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Learn More
            </button>
            <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
              Sign up
            </button>
          </div>
        </div>
        {/* Image Container */}
        <div className="flex items-center justify-center w-1/2 p-4">
          <div className="flex items-center justify-center w-full bg-gray-300 rounded h-1/2">
            <span className="text-lg text-white">Image Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KarateLearningCenter;
