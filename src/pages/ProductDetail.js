import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../api";
const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const accessToken = localStorage.getItem("access_token"); // ✅ Check if user is logged in

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${API_URL}products/${id}/`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleGetQuotation = async () => {
        if (!accessToken) {
            alert("Please create an account or log in first.");
            navigate("/logon");
            return;
        }

        try {
            const response = await axios.post(
                `${API_URL}/api/get-quotation/`,
                { product_id: id },
                { headers: { Authorization: `Bearer ${accessToken}` } }
            );
            console.log("Quotation sent:", response.data);
            alert("Your quotation request has been sent successfully!");
        } catch (error) {
            console.error("Error sending quotation request:", error);
            alert(error.response?.data?.error || "Failed to send quotation request.");
        }
    };

    if (loading) return <div className="text-center text-xl mt-10">Loading...</div>;
    if (!product) return <div className="text-center text-xl mt-10 text-red-500">Product not found</div>;

    return (
        <div className="container mx-auto p-8">
            <div className="max-w-4xl mx-auto bg-white-900 text-white shadow-lg rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Product Image */}
                    <div className="p-4 flex justify-center">
                        <img src={product.hover_image} alt={product.name} className="w-[550px] h-[700px] object-contain rounded-md" />
                    </div>

                    {/* Product Details */}
                    
                    <div className="p-6">
                        <h2 className="text-3xl text-gray font-bold">{product.name}</h2>
                        <p className="text-gray-400 mt-2">{product.description}</p>
                        <p className="text-black mt-2">You can check the product specifications table below or download the product's data sheet for more info, by clicking on the Data Sheet button below.</p>
                        <p className="text-gray-400 mt-2">You could also press the Contact Me button after creating an account to let us know which product are you interested in. Our experts will contact you shortly.</p>
                        {product.name === "SUPRA" || product.name === "PROBO" || product.name === "ERGO" || product.name === "OPTIMO" || product.name === "ACER" ? (
                        <table className="w-full border-collapse border border-gray-500 mt-4">
                        <tr className="bg-gray-700 text-white">
                        <th className="border p-2">Feature</th>
                        <th className="border p-2">Details</th>
                        </tr>
                        <tr>
                        <td className="border p-2 text-black">Main Power Supply</td>
                        <td className="border p-2 text-black">{product.feature1}</td>
                        </tr>
                        <tr>
                        <td className="border p-2 text-black">Power</td>
                        <td className="border p-2 text-black">{product.feature2}</td>
                        </tr>
                        <tr>
                        <td className="border p-2 text-black">Torque(Nm) or Thrust(N)</td>
                        <td className="border p-2 text-black">{product.feature3}</td>
                        </tr>
                        <tr>
                        <td className="border p-2 text-black">Operating T° (°C Min/Max.)</td>
                        <td className="border p-2 text-black">{product.feature4}</td>
                        </tr>
                        <tr>
                        <td className="border p-2 text-black">Protection class (IP)</td>
                        <td className="border p-2 text-black">{product.feature5}</td>
                        </tr>
                        </table>
                        ) : null}

                        {/* Get Quotation Button */}
                        <button 
                            onClick={handleGetQuotation} 
                            className="w-full mt-6 bg-green-500 text-white text-center py-2 rounded-md hover:bg-green-600 transition"
                        >
                            Contact Me
                        </button>

                        {/* PDF Download Button */}
                        <a 
                            href={product.pdf_file} 
                            target="_blank"  
                            rel="noopener noreferrer"
                            className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"
                        >
                            Data Sheet
                        </a>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
};

export default ProductDetail;
