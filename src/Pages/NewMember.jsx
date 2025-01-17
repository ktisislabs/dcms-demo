import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function NewMember() {




  return (
    <>
    
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <Navbar/>
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
              Become a Member
            </h2>
            <p className="text-gray-600 text-center mb-6">
              For becoming a member, please contact <span className="font-semibold">DCMS</span>.
            </p>
            <button
              
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Close
            </button>
          </div>
        </div>
      
    </>
  );
}

export default NewMember;
