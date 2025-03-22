import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../api";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [resetMessage, setResetMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(username, password);
            localStorage.setItem("access_token", response.data.access);

            // ✅ Check if user is verified
            if (response.data.error) {
                setMessage(response.data.error);
            } else {
                setMessage("Login successful!");
                setTimeout(() => navigate("/products"), 500);
                setTimeout(() => {
                    window.location.reload();
                }, 500); // ✅ Redirect after 1.5 sec
            }
        } catch (error) {
            setMessage("Login failed. Check your credentials.");
        }
    };

    // ✅ Handle "Forgot Password"
    const handlePasswordReset = async () => {
        try {
            await axios.post(`${API_URL}/api/request-password-reset/`, { email });
            setResetMessage("Password reset email sent!");
        } catch (error) {
            setResetMessage("Failed to send password reset email.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 text-white shadow-md rounded-lg">
            <h2 className="text-2xl text-white font-bold text-center">Login</h2>
            <form onSubmit={handleLogin} className="mt-4">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border rounded mt-2 bg-gray-700 text-white" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded mt-2 bg-gray-700 text-white" />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition">Login</button>
            </form>
            {message && <p className="text-center mt-4">{message}</p>}

            {/* ✅ Forgot Password Section */}
            <div className="mt-6">
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded bg-gray-700 text-white" />
                <button onClick={handlePasswordReset} className="w-full bg-red-500 text-white p-2 rounded mt-2 hover:bg-red-600 transition">Forgot Password?</button>
                {resetMessage && <p className="text-center mt-4">{resetMessage}</p>}
            </div>
        </div>
    );
};

export default Login;
