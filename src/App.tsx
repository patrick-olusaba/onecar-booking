import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import WhatsAppFloat from "./components/whatsapp/WhatsAppFloat";

import Home from "./pages/Home";
import VehiclePage from "./pages/Vehicle";
import Booking from "./pages/Booking";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";

import "./styles/globals.css";

const App: React.FC = () => {
    return (
        <>
            {/* Shared site header */}
            <Header />

            {/* Page routing */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vehicle" element={<VehiclePage />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* Shared site footer */}
            <Footer />

            {/* Floating WhatsApp CTA */}
            <WhatsAppFloat />
        </>
    );
};

export default App;
