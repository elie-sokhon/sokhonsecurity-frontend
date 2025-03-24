import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gateImage from "../assets/gate.webp";
import { fetchProducts } from "../api";

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const loadFeaturedProducts = async () => {
            try {
                const response = await fetchProducts();
                const featured = response.data.filter(product => product.featured === true);
                setFeaturedProducts(featured);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        loadFeaturedProducts();
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: `url(${gateImage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Sokhon Security</h1>
                    <p className="text-base md:text-lg mt-4 max-w-md md:max-w-2xl">
                        Protecting your home and business with high-quality security gates.
                    </p>
                    <Link to="/products" className="mt-6 bg-blue-500 px-6 py-3 rounded text-white font-semibold hover:bg-blue-600">
                        View All Products
                    </Link>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="bg-gray-100 py-12 px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
                    {featuredProducts.length > 0 ? (
                        featuredProducts.map((product) => (
                            <div key={product.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs">
                                <img
                                    src={product.hover_image}
                                    alt={product.name}
                                    className="w-[280px] h-[300px] object-contain rounded-md"
                                />
                                <h3 className="text-lg md:text-xl font-semibold mt-4">{product.name}</h3>
                                <p className="text-gray-600 text-sm text-center">{product.description.substring(0, 80)}...</p>
                                <Link to={`/products/${product.id}`} className="block mt-4 bg-blue-500 text-white text-center py-2 px-6 rounded-md hover:bg-blue-600">
                                    View Details
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No featured products available.</p>
                    )}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white text-gray-800 p-6 md:p-12 text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold">Why Choose Sokhon Security?</h2>
                <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto">
                    We provide reliable, durable, and state-of-the-art security solutions tailored for your needs. Our products ensure maximum protection with advanced automation technology.
                </p>
                <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto">
                    At Sokhon Security, we provide end-to-end solutions – from professional installation of our security products to exceptional after-sales service. Our team ensures seamless setup, ongoing maintenance, and reliable support to guarantee your long-term security and satisfaction.
                </p>
            </div>

            {/* About Us Section */}
            <div className="bg-gray-100 text-gray-900 p-6 md:p-12 text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>
                <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto">
                    With over 20 years of experience, Sokhon Security is committed to delivering the best security gate solutions. We focus on innovation, durability, and customer satisfaction.
                </p>
                <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto">
                    Our team of experts is dedicated to providing high-quality products and exceptional service to ensure your safety and peace of mind.
                </p>
            </div>

            {/* Contact Us Section */}
            <section id="contact" className="bg-white py-12 px-4 text-center rounded-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-base md:text-lg text-gray-600 mb-4">
                    Have questions or need assistance? We’re here to help!
                </p>
                <div className="text-gray-700 space-y-2">
                    <p className="text-lg md:text-xl font-semibold">📞 Phone: 03615205</p>
                    <p className="text-lg md:text-xl font-semibold">📧 Email: sokhon.sec.sarl@gmail.com</p>
                    <p className="text-lg md:text-xl font-semibold">📍 Address: Rabweh, Maten Area</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
