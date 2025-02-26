// src/components/FunFacts.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaWater, FaIceCream, FaFireAlt, 
  FaLeaf, FaTint, FaGlobe, 
  FaFaucet, FaSnowflake 
} from 'react-icons/fa';

const FunFacts = () => {
  const facts = [
    { 
      icon: <FaWater className="text-cyan-600 text-5xl mb-2" />, 
      text: "About 60% of the human body is water!" 
    },
    { 
      icon: <FaGlobe className="text-teal-500 text-5xl mb-2" />, 
      text: "The water you drink today is the same water dinosaurs drank millions of years ago." 
    },
    { 
      icon: <FaSnowflake className="text-blue-500 text-5xl mb-2" />, 
      text: "More than 68% of the fresh water on Earth is trapped in glaciers." 
    },
    { 
      icon: <FaTint className="text-cyan-600 text-5xl mb-2" />, 
      text: "We have explored less than 5% of the Earth's oceans." 
    },
    { 
      icon: <FaIceCream className="text-pink-400 text-5xl mb-2" />, 
      text: "Water expands by 9% when it freezes. That's why ice floats!" 
    },
    { 
      icon: <FaFireAlt className="text-red-500 text-5xl mb-2" />, 
      text: "Hot water freezes faster than cold water, a phenomenon known as the Mpemba effect." 
    },
    { 
      icon: <FaLeaf className="text-teal-500 text-5xl mb-2" />, 
      text: "Plants release water vapor into the air through transpiration." 
    },
    { 
      icon: <FaFaucet className="text-gray-500 text-5xl mb-2" />, 
      text: "Less than 1% of the water supply on Earth is potable (safe to drink)." 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex flex-col items-center py-10">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-cyan-800 mb-4"
      >
        Did You Know?
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-serif text-cyan-900 mb-10"
      >
        Fun Facts About Water
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 md:w-8/12">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }} 
            transition={{ 
              duration: 0.3, 
              delay: index * 0.1, 
              type: 'spring', 
              stiffness: 300, 
              damping: 20 
            }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform"
          >
            <div className="flex flex-col items-center text-center">
              {fact.icon}
              <p className="text-cyan-800 text-lg">{fact.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-10"
      >
        <a
          href="/"
          className="bg-cyan-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-cyan-700 transition"
        >
          Explore More About Purification!
        </a>
      </motion.div>
    </div>
  );
}

export default FunFacts;
