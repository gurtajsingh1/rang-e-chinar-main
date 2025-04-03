import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const ResourceDropdownMenu = ({ isDropdownOpen, position }) => {
  const { top, bottom, left, right } = position || {}; 
  return createPortal(
    <div
      className={`absolute ${right ? "right-0" : left ? "left-0" : ""} ${
        bottom ? "bottom-0" : top ? "top-0" : ""
      } w-48 bg-white backdrop-blur-lg font-figtree rounded-md shadow-lg py-1 z-50 transition-all duration-300 ease-in-out ${
        isDropdownOpen
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform -translate-y-2 pointer-events-none"
      }`}
      style={{
        top: top || undefined,
        bottom: bottom || undefined,
        left: left || undefined,
        right: right || undefined,
        zIndex: 9999,
        background: "rgba(225, 225, 225, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)", // Custom border with 20% opacity
      }}
    >
      <Link
        to="/Technical Fest 2024_final.pdf"
        target="_blank"
        className="block px-4 py-2 text-sm text-white hover:bg-background hover:bg-opacity-30"
      >
        Brochure
      </Link>
      <Link
        to="/Techvaganza 2024 General Guidelines.pdf"
        target="_blank"
        className="block px-4 py-2 text-sm text-white hover:bg-background hover:bg-opacity-30"
      >
        Guidelines
      </Link>
      <Link
        to="https://docs.google.com/spreadsheets/d/1jrNBm7qVfFSy9gtt1Tx5g3JNCwClE9XVNqV2grU80BE/edit?gid=766239620#gid=766239620"
        target="_blank"
        className="block px-4 py-2 text-sm text-white hover:bg-background hover:bg-opacity-30"
      >
        Time Table
      </Link>
    </div>,
    document.getElementById("dropdown-root")
  );
};

export default ResourceDropdownMenu;
