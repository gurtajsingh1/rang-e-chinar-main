import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ event, index }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      anchorPlacement: "top-center",
      disable: "Phone",
      startEvent: "DOMContentLoaded",
      easing: "ease-out",
      mirror: true,
    });
  }, []);

  return (
    <div
      className={`relative flex flex-col ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
        } items-center sm:space-x-6`}
    >
      {/* Image section with spring frame */}
      <div
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay="250"
        className="w-full sm:max-w-sm relative spring-image-container"
      >
        <div className="spring-frame absolute inset-0 pointer-events-none"></div>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[460px] object-cover rounded-lg"
        />
        {/* Spring decorative corner elements */}
        <div className="absolute top-0 left-0 spring-corner-tl"></div>
        <div className="absolute top-0 right-0 spring-corner-tr"></div>
        <div className="absolute bottom-0 left-0 spring-corner-bl"></div>
        <div className="absolute bottom-0 right-0 spring-corner-br"></div>
      </div>

      {/* Content section with spring styling */}
      <div
        className={`w-full md:py-16 md:px-16 lg2:max-w-4xl relative ${index % 2 === 0 ? 'sm:-translate-x-40' : 'sm:translate-x-40'
          }`}
      >
        <div
          data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          className="p-6 spring-card-shadow md:p-8 lg:p-10 bg-amber-50 h-full rounded-lg border-l border-t border-amber-200"
        >
          <div className="text-2xl font-figtree sm:text-3xl font-semibold mb-4 text-amber-600 textShadow-sm overflow-visible spring-title">
            {event.title}
          </div>
          <p className="mb-6 md:mb-8 text-amber-600">{event.description}</p>
          <Link
            to={event.link}
            className="px-3 md:px-6 py-3 spring-button-glow font-kodeMono text-sm md:text-base rounded-md font-medium text-white bg-amber-500 hover:bg-amber-600 border border-amber-400 transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <span className="spring-leaf-icon"></span>
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;