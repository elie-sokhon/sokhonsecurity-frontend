import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { searchProducts } from "../api";

const SearchResults = () => {
    const { query } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await searchProducts(query);
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSearchResults();
    }, [query]);

    return (
        <div className="bg-white-900 min-h-screen p-8 text-white flex justify-center">
            <div className="w-full max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-6">Search Results for "{query}"</h2>

                {loading ? (
                    <p className="text-center text-lg">Loading...</p>
                ) : products.length > 0 ? (
                    <div className="flex flex-col items-center">
                        {products.map((product) => (
                            <div 
                                key={product.id} 
                                className="bg-white text-gray-900 w-full max-w-3xl rounded-lg shadow-lg p-6 mb-6 flex flex-col md:flex-row items-center"
                            >
                                {/* Product Image */}
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <img 
                                        src={product.hover_image} 
                                        alt={product.name} 
                                        className="w-48 h-auto object-contain rounded-md"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                                    <h3 className="text-2xl font-bold">{product.name}</h3>
                                    <p className="text-gray-600 mt-2">{product.description}</p>

                                    {/* View Details Button */}
                                    <Link 
                                        to={`/products/${product.id}`} 
                                        className="mt-4 inline-block bg-blue-500 text-white text-center px-6 py-2 rounded-md hover:bg-blue-600 transition"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-lg text-red-400">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
