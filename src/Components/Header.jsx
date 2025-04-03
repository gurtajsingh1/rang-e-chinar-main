import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
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
      setIsScrolled(window.scrollY > 20);
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
        <div className="flex flex-row justify-start items-center container mx-auto">
          {/* Logo (Now left-aligned & bigger) */}
          <Link to="/" className="group">
            <img 
              src="/common/Rang_E_Chinar-removebg-preview.png" 
              className="h-16 md:h-20 lg:h-24 transition-transform duration-300 group-hover:scale-110" 
              alt="Logo" 
            />
          </Link>

          {/* Navbar Links (Hidden on small screens) */}
          <div className="hidden lg:flex font-semibold items-center ml-auto md:space-x-6 lg:space-x-8 xl:space-x-10">
            <NavLink to="/" label="Home" />
            <NavLink to="/events" label="Events" />
            <NavLink to="/schedule" label="Schedule" />

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="text-white hover:text-white/80 flex items-center text-lg lg:text-xl xl:text-2xl font-semibold transition-all duration-300 font-quicksand"
                onClick={() => toggleDropdown("resources")}
              >
                Resources
                <FaChevronDown
                  className={`ml-2 transition-transform duration-200 ${
                    isResourceDropdownOpen ? "rotate-180" : ""
                  } text-sm lg:text-base`}
                />
              </button>
              <ResourceDropdown
                isDropdownOpen={isResourceDropdownOpen}
                position={{ right: 0, top: "100%" }}
              />
            </div>

            <NavLink to="/contact" label="Contact" />
          </div>

          {/* Mobile Menu Button (Right-aligned) */}
          <div className="lg:hidden ml-auto">
            <button 
              className="text-white text-2xl p-2 rounded-full bg-transparent border border-white/30 hover:border-white/60 transition-all duration-300" 
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar (Mobile) */}
      <div className="lg:hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </div>

      {/* Padding to prevent content from hiding under fixed header */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

// Helper component for navigation links
const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-white hover:text-white/80 text-lg lg:text-xl xl:text-2xl font-semibold relative group transition-all duration-300 font-quicksand"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300 group-hover:shadow-glow"></span>
  </Link>
);

export default Header;
