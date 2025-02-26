import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#050C9C] w-full flex justify-between items-center p-4 relative z-[1000]">

      <div className="text-white font-semibold font-degular ml-4">
        <Link to="/" className="text-2xl font-bold text-white">Pure Drops</Link>
      </div>

      <div className="hidden md:flex items-center space-x-4 justify-between mx-auto">
        <Link to='/' className="text-white text-[20px] font-semibold ">Home</Link>
        <Link to='/about-us' className="text-white text-[20px] font-semibold ">About Us</Link>
        <Link to='/model' className="text-white text-[20px] font-semibold ">Our Model</Link>
      </div>

      <div className="hidden md:flex items-center">
        <Link to="/contact" className="px-4 py-2 bg-[#3572EF] text-black font-bold rounded-lg transition duration-300 hover:bg-[#3ABEF9]">
          Contact Us
        </Link>
      </div>

      <div className="md:hidden mr-4 z-[9999]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} className="text-white" /> : <Menu size={30} className="text-white" />}
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#050C9C] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center pt-20 space-y-6 shadow-lg z-[1050]`}
      >
        <Link to="/" className="text-white text-[20px] font-semibold font-degular" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about-us" className="text-white text-[20px] font-semibold font-degular" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/model" className="text-white text-[20px] font-semibold font-degular" onClick={() => setIsOpen(false)}>Our Model</Link>

        <div className="relative mt-4" >
        <Link to="/contact" className="px-4 py-2 bg-[#3572EF] text-black font-bold rounded-lg transition duration-300 hover:bg-[#3ABEF9]">
          Contact Us
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
