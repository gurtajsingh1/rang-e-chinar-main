import { FaDiamond } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EventCard = ({ title, time, location, backgroundImage, link, index }) => {
    return (
      <div
        className="w-96 text-center md:w-1/2 lg:w-1/3 sm:text-center p-4"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay = {50*index}
      >
        <div
          className="relative bg-cover bg-center flex flex-col justify-between rounded-lg text-secondary items-center
           font-semibold m-auto md:max-w-96 bg-blend-overlay px-4 py-6 transition-transform transform hover:scale-105 hover:z-10"
           style={{
            backgroundImage:
              `linear-gradient(to bottom, #000000 0%, #0000009f 50%, #00000033 100%), url(${backgroundImage})`,
          }}
        >
          <div className="w-full h-72 flex flex-col items-start justify-between font-kodeMono">
            <div>
              <h1 className="text-secondary text-4xl font-figtree font-semibold overflow-visible mb-8">
                {title}
              </h1>
              <ul className="text-white font-semibold text-lg">
                <li className="flex items-center">
                  <FaDiamond className="w-4 h-4 text-secondary mr-2" />
                  {time}
                </li>
                <li className="flex items-center">
                  <FaDiamond className="w-4 h-4 text-secondary mr-2" />
                  {location}
                </li>
              </ul>
            </div>
            <Link className="flex gap-4 items-center font-semibold border px-6 py-3 rounded-full border-gray-50 ShadowBlur">
              <p>Event Details</p>  <FaExternalLinkAlt size={18} />
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
export default EventCard;

  // PropTypes validation
  EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };
  

