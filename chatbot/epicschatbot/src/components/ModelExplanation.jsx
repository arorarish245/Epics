import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from "react-player";

const ModelExplanation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 text-gray-800 py-10">

      {/* Overview Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-20 px-4 w-11/12 md:w-10/12 mx-auto pt-22">
        <div className="md:w-1/2 text-left ">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold text-cyan-800 mb-4"
          >
            How Our Purification Model Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-cyan-900 mb-4 pt-10"
          >
            Our advanced water purification model ensures the highest level of safety and purity. 
            With state-of-the-art technology, it effectively removes contaminants, harmful chemicals, 
            and bacteria while preserving essential minerals for healthier hydration.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-cyan-900"
          >
            At Pure Drops, we are dedicated to delivering safe, refreshing, and eco-friendly drinking water. 
            Our model is designed to be energy efficient and sustainable, making clean water accessible to everyone.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-5/12 mt-10 md:mt-0 pl-10 pt-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1495774539583-885e02cca8c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0ZXIlMjBwdXJpZmlhY3Rpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Water Purification Model" 
            className="rounded-2xl shadow-lg w-full h-auto md:w-250 md:h-100"
          />
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="text-center mb-20">
        <h2 className="text-5xl font-bold text-cyan-700 mb-8">How It Works</h2>
        <p className="text-lg text-gray-700 w-11/12 md:w-8/12 mx-auto mb-6">
          Our model utilizes a multi-stage purification process to eliminate impurities, harmful bacteria, and contaminants. 
          It ensures the water retains essential minerals while achieving the highest purity levels.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 md:w-10/12 mx-auto">
          {["Intake & Filtration", "Advanced RO Purification", "UV Sterilization", "Mineral Retention", "Final Quality Check"].map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-cyan-800 mt-2">{step}</h3>
              <p className="text-gray-600">
                Detailed explanation about the {step.toLowerCase()} stage.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Demonstration */}
      <section className="text-center mb-20">
        <h2 className="text-5xl font-bold text-cyan-700 mb-8">Model Demonstration</h2>
        <p className="text-lg text-gray-700 w-11/12 md:w-8/12 mx-auto mb-6">
          Watch how our model effectively purifies water through each stage, delivering safe and clean drinking water.
        </p>
        <div className="flex justify-center">
          <ReactPlayer 
            url="https://www.example.com/video.mp4" 
            controls 
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Unique Features */}
      <section className="text-center mb-20">
        <h2 className="text-5xl font-bold text-cyan-700 mb-8">Unique Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 md:w-10/12 mx-auto">
          {[
            { title: "Smart Monitoring", desc: "Real-time monitoring for water quality and filter life." },
            { title: "Energy Efficient", desc: "Consumes less power while maintaining high purification standards." },
            { title: "Eco-Friendly Design", desc: "Minimal waste production with an environment-friendly approach." }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-cyan-800 mt-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ModelExplanation;
