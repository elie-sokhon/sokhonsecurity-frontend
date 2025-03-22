import React, { useState } from "react";
import { registerUser } from "../api";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await registerUser(username, email, password);
            setMessage("Signup successful! Please login.");
        } catch (error) {
            setMessage("Signup failed. Try again.");
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Signup;
