import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home";
import ProductCate from "./pages/ProductCate";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Thank from "./components/Thank/Thank";

const App = () => {
  return (
    <>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<ProductCate cate="new" />} />
          <Route path="/men" element={<ProductCate cate="men" />} />
          <Route path="/women" element={<ProductCate cate="women" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product/:id/:name" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*"  element={<ErrorPage />} />
          <Route path="/thank"  element={<Thank />} />
        </Routes>
        <Footer />
    </>
  );
};

export default App;
