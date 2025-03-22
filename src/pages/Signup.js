import React, { useState } from "react";
import { registerUser } from "../api";


const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [fullName, setFullName] = useState("");  
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await registerUser(username, email, password, fullName, phoneNumber);
            setMessage("Signup successful! Please check your email to verify your account.");
            
            // ✅ Clear form fields after successful signup
            setUsername("");
            setEmail("");
            setPassword("");
            setFullName("");
            setPhoneNumber("");
        } catch (error) {
            setMessage("Signup failed. Try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 text-white shadow-md rounded-lg">
            <h2 className="text-2xl text-white font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSignup} className="mt-4">
                <input type="text" placeholder="Full Name" 
                    value={fullName}
                    className="w-full p-2 border rounded mt-2 bg-gray-700 text-white" 
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input type="text" placeholder="Username" 
                    value={username}
                    className="w-full p-2 border rounded mt-2 bg-gray-700 text-white" 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input type="email" placeholder="Email" 
                    value={email}
                    className="w-full p-2 border rounded mt-2 bg-gray-700 text-white" 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Password" 
                    value={password}
                    className="w-full p-2 border rounded mt-2 bg-gray-700 text-white" 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="text" placeholder="Phone Number" 
                    value={phoneNumber}
                    className="w-full p-2 border rounded mt-2 bg-gray-700 text-white" 
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition">
                    Sign Up
                </button>
            </form>
            {message && <p className="text-center mt-4">{message}</p>}
        </div>
    );
};

export default Signup;
