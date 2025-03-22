import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../api";
const ResetPassword = () => {
    const { uidb64, token } = useParams(); // Get parameters from URL
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/api/reset-password/${uidb64}/${token}/`, {
                new_password: newPassword,
            });

            setMessage("Password reset successful! Redirecting to login...");
            setTimeout(() => navigate("/logon"), 3000); // Redirect to login page after 3s
        } catch (error) {
            setMessage("Failed to reset password. The link may be expired.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 text-white shadow-md rounded-lg">
            <h2 className="text-2xl text-white font-bold text-center">Reset Password</h2>
            <form onSubmit={handlePasswordReset} className="mt-4">
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-2 border rounded mt-2 bg-gray-700 text-white"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition">
                    Reset Password
                </button>
            </form>
            {message && <p className="text-center mt-4">{message}</p>}
        </div>
    );
};

export default ResetPassword;
