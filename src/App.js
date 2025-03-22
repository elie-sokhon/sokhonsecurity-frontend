import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import SearchResults from "./pages/SearchResults";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logon from "./pages/Logon";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Main Page */}
                <Route path="/products" element={<ProductList />} /> {/* All Products Page */}
                <Route path="/search/:query" element={<SearchResults />} /> {/* Search Results Page */}
                <Route path="/products/:id" element={<ProductDetail />} /> {/* Product Details Page */}
                <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
                <Route path="/login" element={<Login />} /> {/* Login Page */}
                <Route path="/logon" element={<Logon />} />
                <Route path="/reset-password/:uidb64/:token" element={<ResetPassword />} />
            </Routes>
        </Router>
    );
};

export default App;
