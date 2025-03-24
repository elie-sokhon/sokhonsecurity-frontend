import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/wallpaper.jpg";

const Logon = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
            {/* Left Side - Text + Buttons */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:pl-20 text-center md:text-left py-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Sokhon Security</h1>
                <p className="text-base md:text-lg text-gray-300 mb-4">Enjoy the best experience.</p>
                <p className="text-sm md:text-base text-gray-400 mb-8">Log in to access all our services.</p>

                <Link
                    to="/login"
                    className="w-full md:w-56 text-center bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-300 transition"
                >
                    LOG IN
                </Link>

                <Link
                    to="/signup"
                    className="w-full md:w-56 text-center border border-white font-semibold py-3 rounded-md mt-4 hover:bg-gray-700 transition"
                >
                    REGISTER
                </Link>
            </div>

            {/* Right Side - Image */}
            <div className="w-full md:w-1/2 h-64 md:h-full">
                <img
                    src={image}
                    alt="Sokhon Security"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Logon;
