import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaLeaf } from "react-icons/fa";
import RegisterDropdown from "./RegisterDropdown";
import ResourceDropdown from "./ResourceDropdown";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "register") {
      setIsRegisterDropdownOpen(!isRegisterDropdownOpen);
      setIsResourceDropdownOpen(false);
    } else if (dropdown === "resources") {
      setIsResourceDropdownOpen(!isResourceDropdownOpen);
      setIsRegisterDropdownOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className={`py-4 px-4 md:px-14 lg:px-28 w-full font-quicksand fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="flex flex-row justify-between items-center container mx-auto">
          <Link to="/" className="flex items-center group">
            <img 
              src="" 
              className="h-12 md:h-16 transition-transform duration-300 group-hover:scale-105" 
              alt="Logo" 
            />
          </Link>

          {/* Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button 
              className="text-white text-2xl p-2 rounded-full bg-transparent border border-white/30 hover:border-white/60 transition-all duration-300" 
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          <div className="hidden lg:flex font-semibold items-center md:space-x-6 lg:space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/events" label="Events" />
            
            
            
            <NavLink to="/schedule" label="Schedule" />

            <div className="relative">
              <button
                className="text-white hover:text-white/80 flex items-center text-lg font-semibold"
                onClick={() => toggleDropdown("resources")}
              >
                Resources
                <FaChevronDown
                  className={`ml-1 transition-transform duration-200 ${
                    isResourceDropdownOpen ? "transform rotate-180" : ""
                  } text-sm`}
                />
              </button>
              <ResourceDropdown
                isDropdownOpen={isResourceDropdownOpen}
                position={{ right: 0, top: "100%" }}
              />
            </div>

            <NavLink to="/contact" label="Contact" />
          </div>
        </div>
      </header>
      <div className="lg:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
      </div>
      {/* Add padding to prevent content from hiding under fixed header */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

// Helper component for navigation links with consistent styling
const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-white hover:text-white/80 text-lg font-semibold relative group"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

export default Header;