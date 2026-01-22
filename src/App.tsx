import {Routes, Route } from 'react-router-dom';
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home";
import "./styles/globals.css";
import React from "react";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Contact from "./pages/Contact.tsx";
import WhatsAppFloat from "./components/whatsapp/WhatsAppFloat.tsx";

const App: React.FC = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />

            <WhatsAppFloat />
        </>
    );
};

export default App;
