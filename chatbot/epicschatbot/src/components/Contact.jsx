import React, { useState } from 'react';
import { motion } from 'framer-motion';
import fish from '../assets/fish.png';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-cyan-100 to-blue-200 text-gray-800 relative" 
      style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* Fish Animation in Background */}
      <motion.img
        src={fish}
        alt="Fish"
        className="absolute"
        initial={{ x: "-20vw" }}
        animate={{ x: "100vw" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ width: "150px", height: "auto", top: "100px", zIndex: 0, opacity: 0.6 }}
      />
      <motion.img
        src={fish}
        alt="Fish"
        className="absolute"
        initial={{ x: "-30vw" }}
        animate={{ x: "100vw" }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ width: "120px", height: "auto", top: "250px", zIndex: 0, opacity: 0.5 }}
      />
      <motion.img
        src={fish}
        alt="Fish"
        className="absolute"
        initial={{ x: "-35vw" }}
        animate={{ x: "100vw" }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ width: "180px", height: "auto", bottom: "50px", zIndex: 0, opacity: 0.4 }}
      />

      <header className="text-center py-10 relative z-10">
        <h1 className="text-5xl font-bold text-orange-400" 
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Contact Us
        </h1>
      </header>

      <div className="relative max-w-4xl mx-auto px-4 overflow-hidden z-10">
        <form 
          onSubmit={handleSubmit} 
          className="rounded-2xl shadow-xl p-8 relative z-10" 
          style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}
        >
          <div className="mb-6">
            <label 
              htmlFor="name" 
              className="block text-2xl text-blue-900 mb-2" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Name*
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              className="w-full p-4 rounded-xl border-2 border-blue-300 focus:border-cyan-500 outline-none" 
              required
            />
          </div>

          <div className="mb-6">
            <label 
              htmlFor="email" 
              className="block text-2xl text-blue-900 mb-2" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Email*
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full p-4 rounded-xl border-2 border-blue-300 focus:border-cyan-500 outline-none" 
              required
            />
          </div>

          <div className="mb-6">
            <label 
              htmlFor="message" 
              className="block text-2xl text-blue-900 mb-2" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Message
            </label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange}
              className="w-full p-4 rounded-xl border-2 border-blue-300 focus:border-cyan-500 outline-none" 
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit" 
            className="bg-orange-400 text-white py-3 px-6 rounded-full shadow-md hover:bg-orange-500 transition"
          >
            Send Your Message!
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
