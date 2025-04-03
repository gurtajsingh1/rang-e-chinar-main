import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const validatePositionProps = (props, propName, componentName) => {
  const position = props[propName];
  const keys = ["top", "bottom", "left", "right"];
  const numericProps = keys.filter((key) => typeof position[key] === "number");

  if (numericProps.length < 2) {
    return new Error(
      `Invalid prop '${propName}' supplied to '${componentName}'. At least two of 'top', 'bottom', 'left', or 'right' must be provided as numbers.`
    );
  }

  return null;
};

const RegisterDropdown = ({ isDropdownOpen, position }) => {
  const { top, bottom, left, right } = position || {}; // Destructure position props

  return createPortal(
    <div
      className={`absolute ${right ? "right-0" : left ? "left-0" : ""} ${
        bottom ? "bottom-0" : top ? "top-0" : ""
      } w-48 bg-white backdrop-blur-lg font-kodeMono rounded-md shadow-lg py-1 z-50 transition-all duration-300 ease-in-out ${
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
        to="/register"
        className="block px-4 py-2 text-sm text-white hover:bg-background hover:bg-opacity-30"
      >
        Attendee Register
      </Link>
      <Link
        to="/register/student"
        className="block px-4 py-2 text-sm text-white hover:bg-background hover:bg-opacity-30"
      >
        Student Register
      </Link>
      <Link
        to="/register/committee"
        className="block px-4 py-2 text-sm text-white hover:bg-background hover:bg-opacity-30"
      >
        Committee Register
      </Link>
    </div>,
    document.getElementById("dropdown-root")
  );
};

RegisterDropdown.propTypes = {
  isDropdownOpen: PropTypes.bool.isRequired,
  position: validatePositionProps,
};

export default RegisterDropdown;
