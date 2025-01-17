import React from 'react';
import Navbar from '../components/Navbar';
import LoggedINNavbar from '../components/LoggedInNav';

function Home() {
  return (
    <div className="Home-screen relative w-screen h-screen">
      {/* Navbar */}
      <LoggedINNavbar />

      {/* Background Image */}
      <img
        src="/Deshbandhu-Pranab.jpg"
        alt="Library background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="flex items-center justify-center h-full relative z-10 px-4">
        <p className="text-white text-center font-bold font-sans">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            DCMS Doorstep Library Service
          </span>
          <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4">
            Bringing knowledge to your doorstep.
          </span>
        </p>
      </div>

      {/* Background Overlay (for better readability) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
    </div>
  );
}

export default Home;
