import { FaLinkedinIn, FaYoutube, FaLeaf } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const StickySocialSidebar = () => {
  return (
    <div className="fixed top-1/2 right-0 z-50 transform -translate-y-1/2">
      <ul className="flex flex-col space-y-3">
        
        {/* Instagram Link */}
        <li>
          <a
            href="https://www.instagram.com/rang_e_chinar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-amber-600 text-white rounded-l-md hover:bg-amber-500 hover:w-20 transition-all duration-300 hover:shadow-lg group"
            aria-label="Instagram"
          >
            <IoLogoInstagram size={28} className="group-hover:scale-110 transition-transform duration-300" />
          </a>
        </li>

        {/* LinkedIn Link */}
        <li>
          <a
            href="https://www.linkedin.com/company/rang-e-chinar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-amber-600 text-white rounded-l-md hover:bg-amber-500 hover:w-20 transition-all duration-300 hover:shadow-lg group"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={28} className="group-hover:scale-110 transition-transform duration-300" />
          </a>
        </li>

        {/* YouTube Link */}
        <li>
          <a
            href="https://www.youtube.com/@NITSrinagarofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-amber-600 text-white rounded-l-md hover:bg-amber-500 hover:w-20 transition-all duration-300 hover:shadow-lg group"
            aria-label="YouTube"
          >
            <FaYoutube size={28} className="group-hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StickySocialSidebar;