// src/components/AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHandsHelping, FaSeedling, FaTrophy, 
  FaWater, FaShieldAlt, FaRecycle, FaMicrochip 
} from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 text-gray-800 py-10">

      {/* Introduction Section */}
      <section className="text-center mb-20 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-cyan-800 mb-4"
        >
          Pure Drop - Pure Life
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl mx-auto w-11/12 md:w-8/12 text-cyan-900"
        >
          Bringing you the essence of purity with innovative water solutions designed to enhance your lifestyle.
        </motion.p>
      </section>

      {/* Our Vision and Mission */}
<section className="text-center mb-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 md:w-10/12 mx-auto">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform"
    >
      <h2 className="text-4xl font-serif font-bold text-cyan-700 mb-4">Our Vision</h2>
      <p className="text-gray-600 font-normal">To create a world where every drop of water is pure, safe, and full of life. We envision a future with sustainable hydration for generations to come.</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform"
    >
      <h2 className="text-4xl font-serif font-bold text-cyan-700 mb-4">Our Mission</h2>
      <p className="text-gray-600 font-normal">To innovate and provide advanced water purification systems that prioritize health, sustainability, and customer satisfaction. We are committed to preserving the planet's most vital resource.</p>
    </motion.div>
  </div>
</section>


      {/* Core Values */}
      <section className="text-center mb-20">
        <h2 className="text-5xl font-bold text-cyan-700 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 md:w-10/12 mx-auto">
          {[
            { icon: <FaHandsHelping className="text-cyan-600 text-5xl mb-4" />, title: "Integrity", text: "We believe in honesty, transparency, and building trust with our customers and partners." },
            { icon: <FaSeedling className="text-teal-500 text-5xl mb-4" />, title: "Sustainability", text: "Our solutions are designed to preserve nature and reduce environmental impact." },
            { icon: <FaTrophy className="text-blue-500 text-5xl mb-4" />, title: "Excellence", text: "We strive for excellence in quality, technology, and customer satisfaction." }
          ].map((value, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center text-center">
                {value.icon}
                <h3 className="text-2xl font-semibold text-cyan-800 mt-2">{value.title}</h3>
                <p className="text-gray-600">{value.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Behind the Innovation */}
      <section className="text-center mb-20">
        <h2 className="text-5xl font-bold text-cyan-700 mb-8">Behind the Innovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 md:w-10/12 mx-auto">
          {[
            { icon: <FaWater className="text-blue-500 text-5xl mb-4" />, title: "The Problem", text: "Impurities and contaminants in water pose serious health risks. Our mission is to provide safe, clean, and refreshing water." },
            { icon: <FaShieldAlt className="text-teal-600 text-5xl mb-4" />, title: "The Solution", text: "Advanced filtration technology that eliminates contaminants while preserving essential minerals for health." },
            { icon: <FaMicrochip className="text-gray-600 text-5xl mb-4" />, title: "Smart Monitoring", text: "Our purifiers come with smart sensors to monitor water quality and ensure optimal performance." },
            { icon: <FaRecycle className="text-teal-600 text-5xl mb-4" />, title: "Eco-Friendly Design", text: "We prioritize sustainability with energy-efficient systems and minimal plastic usage." }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-2xl font-semibold text-cyan-800 mt-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default AboutUs;
