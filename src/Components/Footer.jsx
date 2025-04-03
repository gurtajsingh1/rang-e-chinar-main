import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer 
      className="h-72 relative text-white flex flex-col justify-center items-center font-playfair bg-[url('/common/backgrod.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center">
          {/* Event Name */}
          <div className="mb-4">
            <a 
              href="/" 
              className="text-5xl md:text-7xl lg:text-8xl font-neotriad font-bold"
              style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)" }}
            >
              Rang-E-Chinar'25
            </a>
          </div>

          {/* Website Link */}
          <div className="mb-4">
            <a
              href="mailto:techvaganza@nitsri.ac.in"
              className="text-md md:text-xl hover:text-secondary underline-animate font-kodeMono"
              style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)" }}
            >
              rang-e-chinar.nitsri.ac.in/
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/rang_e_chinar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={28}
                className="hover:text-secondary transition duration-300"
                style={{ filter: "drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.3))" }}
              />
            </a>
            <a
              href="https://www.youtube.com/@NITSrinagarofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                size={28}
                className="hover:text-secondary transition duration-300"
                style={{ filter: "drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.3))" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/rang-e-chinar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={28}
                className="hover:text-secondary transition duration-300"
                style={{ filter: "drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.3))" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
