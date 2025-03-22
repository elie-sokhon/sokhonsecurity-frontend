import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // ✅ Check if user is logged in
        const token = localStorage.getItem("access_token");
        setIsLoggedIn(!!token); // Convert token to boolean
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            navigate(`/search/${searchQuery}`);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("access_token"); // ✅ Remove token
        setIsLoggedIn(false); // ✅ Update state
        navigate("/logon"); // ✅ Redirect to login page
    };

    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
            {/* Home Link */}
            <Link to="/" className="text-2xl font-bold">Home</Link>
            
            {/* Navigation Links */}
            <div className="flex space-x-6 items-center">
                <Link to="/products" className="hover:text-blue-400">All Products</Link>

                {/* Show "Logged In" and Logout Button if the user is authenticated */}
                {isLoggedIn ? (
                    <>
                        <span className="text-green-400">Logged In</span>
                        <button 
                            onClick={handleLogout} 
                            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/logon" className="hover:text-blue-400">Log in</Link>
                )}
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="p-2 rounded-l bg-gray-700 text-white focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
                    Search
                </button>
            </form>
        </nav>
    );
};

export default Navbar;
