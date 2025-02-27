import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#13203F] to-[#050C9C]] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold">Pure Drops</h1>
            <p className="text-gray-300 mt-2">Innovating water purification solutions for a healthier, cleaner, and more sustainable future.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="/" className="text-gray-200 hover:text-white transition">
              Home
            </a>
            <a href="/AboutUs" className="text-gray-200 hover:text-white transition">
              About Us
            </a>
            <a href="/FunFacts" className="text-gray-200 hover:text-white transition">
              Features
            </a>
            <a href="/contact" className="text-gray-200 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
          <div className="text-gray-400 mt-4 md:mt-0">
            © {new Date().getFullYear()} Pure Drops. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
