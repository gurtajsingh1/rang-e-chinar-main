import { FaLinkedinIn, FaYoutube, FaLeaf } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { useState, useEffect } from "react";

const StickySocialSidebar = () => {
  // Add AOS-like animation effect for each item
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Delay visibility for animation effect
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-1/2 right-0 z-50 transform -translate-y-1/2">
      <ul className="flex flex-col space-y-3">
        
        {/* Instagram Link */}
        <li className={`transform ${visible ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 delay-100`}>
          <a
            href="https://www.instagram.com/techvaganza.nitsri/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-l-lg border-2 border-green-300 hover:border-green-400 hover:pl-3 hover:w-20 transition-all duration-300 group shadow-lg hover:shadow-green-200/30"
            aria-label="Instagram"
          >
            <span className="absolute left-0 w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 pl-12 transition-all duration-300">Insta</span>
            <IoLogoInstagram size={24} className="text-green-100" />
          </a>
        </li>

        {/* LinkedIn Link */}
        <li className={`transform ${visible ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 delay-200`}>
          <a
            href="https://in.linkedin.com/company/techvaganza-nit-srinagar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-l-lg border-2 border-green-300 hover:border-green-400 hover:pl-3 hover:w-24 transition-all duration-300 group shadow-lg hover:shadow-green-200/30"
            aria-label="LinkedIn"
          >
            <span className="absolute left-0 w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 pl-12 transition-all duration-300">LinkedIn</span>
            <FaLinkedinIn size={24} className="text-green-100" />
          </a>
        </li>

        {/* YouTube Link */}
        <li className={`transform ${visible ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 delay-300`}>
          <a
            href="https://www.youtube.com/@NITSrinagarofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-l-lg border-2 border-green-300 hover:border-green-400 hover:pl-3 hover:w-24 transition-all duration-300 group shadow-lg hover:shadow-green-200/30"
            aria-label="YouTube"
          >
            <span className="absolute left-0 w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 pl-12 transition-all duration-300">YouTube</span>
            <FaYoutube size={24} className="text-green-100" />
          </a>
        </li>
        
        {/* Register Button - New Addition */}
        <li className={`transform ${visible ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 delay-400`}>
          <a
            href="/register"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-l-lg border-2 border-green-400 hover:border-green-500 hover:pl-3 hover:w-24 transition-all duration-300 group shadow-lg hover:shadow-green-200/30"
            aria-label="Register"
          >
            <span className="absolute left-0 w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 pl-12 transition-all duration-300">Register</span>
            <FaLeaf size={20} className="text-green-100 animate-bounce" />
          </a>
        </li>

      </ul>
    </div>
  );
};

export default StickySocialSidebar;