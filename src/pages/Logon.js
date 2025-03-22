import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/wallpaper.jpg";
const Logon = () => {
    return (
        <div className="flex h-screen bg-gray-900 text-white">
            {/* Left Side - Buttons */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-20">
                <h1 className="text-4xl font-bold mb-8">Sokhon Security</h1>
                <p className="text-lg text-gray-300 mb-6">Enjoy the best experience.</p>
                <p className="text-gray-400 mb-10">Log in to access all our services.</p>
                
                <Link to="/login" className="w-56 text-center bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-300 transition">
                    LOG IN
                </Link>

                <Link to="/signup" className="w-56 text-center border border-white font-semibold py-3 rounded-md mt-4 hover:bg-gray-700 transition">
                    REGISTER
                </Link>
            </div>

            {/* Right Side - Image */}
            <div className="w-1/2">
                <img 
                    src={image}  // ✅ Update with the correct image path
                    alt="Sokhon Security"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Logon;
