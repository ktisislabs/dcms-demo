import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Section */}
      <div className="absolute inset-0">
        <img
          src="/Deshbandhu-Pranab.jpg"
          alt="Library background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 overflow-y-auto">
        <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-2xl sm:max-w-3xl lg:max-w-4xl w-full">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-4 sm:mb-6 tracking-wide leading-tight">
            Deshbandhu Chittaranjan Memorial Society
          </h1>

          {/* Subheader */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center font-medium mb-6 sm:mb-8">
            Dedicated to philanthropy, culture, and the enduring legacy of a great leader.
          </p>

          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold text-gray-800">Who We Are:</span>{' '}
              Deshbandhu Chittaranjan Memorial Society, established in 1973, is
              a philanthropic organization dedicated to advancing cultural and
              social causes. We honor the legacy of Deshbandhu Chittaranjan Das,
              one of India's tallest freedom leaders.
            </p>
            <p>
              <span className="font-semibold text-gray-800">About:</span>{' '}
              Chittaranjan Das, a mentor to Netaji Subhash Chandra Bose and a
              freedom fighter, continues to inspire generations through his
              selfless service. Our Society, formed under the guidance of Prime
              Minister Indira Gandhi, is devoted to societal welfare.
            </p>
            <p>
              <span className="font-semibold text-gray-800">Our Mission:</span>{' '}
              We are a non-profit organization providing services like medical
              care, libraries, and cultural programs to uplift the community.
            </p>
            <p>
              <span className="font-semibold text-gray-800">Founded:</span> 5th
              November 1973.
            </p>
            <p>
              <span className="font-semibold text-gray-800">Vision:</span>{' '}
              Striving to fulfill Deshbandhu Chittaranjan Das’s vision of
              selfless service, our Society bridges the gap between tradition
              and modern welfare through initiatives in education, culture, and
              health.
            </p>
            <p>
              <span className="font-semibold text-gray-800">History:</span> The
              Society’s origins trace back to the Chittaranjan Das Centenary
              Celebration Committee. Over decades, it has grown into an
              institution that embodies the essence of service and commitment
              to the public good.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
