import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        setIsLoggedIn(!!token);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            navigate(`/search/${searchQuery}`);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        setIsLoggedIn(false);
        navigate("/logon");
    };

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-lg">
            <div className="flex justify-between items-center">
                {/* Left - Logo/Home */}
                <Link to="/" className="text-2xl font-bold">Home</Link>

                {/* Hamburger Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Nav + Search */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/products" className="hover:text-blue-400">All Products</Link>
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
                    <form onSubmit={handleSearch} className="flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 rounded-l bg-gray-700 text-white focus:outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {menuOpen && (
                <div className="flex flex-col mt-4 space-y-4 md:hidden">
                    <Link to="/products" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>All Products</Link>
                    {isLoggedIn ? (
                        <>
                            <span className="text-green-400">Logged In</span>
                            <button 
                                onClick={() => {
                                    handleLogout();
                                    setMenuOpen(false);
                                }} 
                                className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/logon" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Log in</Link>
                    )}
                    <form onSubmit={(e) => { handleSearch(e); setMenuOpen(false); }} className="flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 rounded-l bg-gray-700 text-white focus:outline-none w-full"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
                            Search
                        </button>
                    </form>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
