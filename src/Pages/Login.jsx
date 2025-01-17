import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function OtpLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const navigate=useNavigate() ; 

  const handleSendOtp = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid phone number!");
      return;
    }

    // Mock OTP generation
    const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(mockOtp);
    setOtpSent(true);
    alert(`OTP sent to ${phoneNumber}: ${mockOtp}`); // Simulating OTP send
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      alert("OTP Verified Successfully!");
      alert('Logged In Successfully ! Welcome to DCMS DoorStep Library')
      navigate('/LoggedinHome')
      setOtpSent(false);
      setPhoneNumber("");
      setOtp("");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
    <Navbar/>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">OTP Login</h2>

        {!otpSent ? (
          <>
            <PhoneInput
              country={"in"}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              inputStyle={{
                width: "100%",
                height: "40px",
                fontSize: "16px",
                marginBottom: "10px",
              }}
              buttonStyle={{
                borderRadius: "0",
              }}
            />
            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-2 border rounded-md mb-4"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default OtpLogin;
