import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetchProducts();
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        loadProducts();
    }, []);

    // Group products by category and subcategory
    const groupedProducts = products.reduce((acc, product) => {
        const category = product.category || "Uncategorized";
        const subcategory = product.subcategory || "Other";

        if (!acc[category]) {
            acc[category] = {};
        }
        if (!acc[category][subcategory]) {
            acc[category][subcategory] = [];
        }

        acc[category][subcategory].push(product);
        return acc;
    }, {});

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-6">All Products</h2>
            
            {Object.entries(groupedProducts).map(([category, subcategories]) => (
                <div key={category} className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h3>
                    
                    {Object.entries(subcategories).map(([subcategory, products]) => (
                        <div key={subcategory} className="mb-6">
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                                        <div className="relative w-full h-60 flex items-center justify-center overflow-hidden rounded-md group">
                                            <img 
                                                src={product.image} 
                                                alt={product.name} 
                                                className="w-full h-full object-contain transition-opacity duration-300 absolute group-hover:opacity-0"
                                            />
                                            <img 
                                                src={product.hover_image} 
                                                alt={`${product.name} Hover`} 
                                                className="w-full h-full object-contain transition-opacity duration-300 absolute opacity-0 group-hover:opacity-100"
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                                        <p className="text-gray-600">{product.title}</p>
                                        
                                        <Link to={`/products/${product.id}`} className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600">
                                            View Product
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
