import { Link } from "react-router-dom";
import { demoEvents } from "../../../constants/home-events";
import EventCard from "./EventCard";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EventsSection = () => {
  return (
    <div className="flex flex-col py-10 px-4 md:px-[140px] lg:px-[160px] lg2:px-[200px] xl:px-[280px] xl2:px-[320px]">
      {/* Section Header */}
      <div className="text-left pb-5">
        <p className="text-gray pt-[2%]">Just the best</p>
        <h2 className="text-black text-4xl md:text-5xl font-semibold font-figtree overflow-visible">
          SOME OTHER EVENTS
        </h2>
      </div>

      {/* Event Cards Container */}
      <div className="relative flex flex-wrap justify-center h-auto items-center">
        {/* Example of EventCard usage */}

        {demoEvents.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            time={event.time}
            location={event.location}
            backgroundImage={event.backgroundImage}
            link={event.link}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-6 py-8 justify-center items-center pt-10">
        <LinkBtn title={"See All Events"} link={"/events"} index={0} />
        <LinkBtn title={"SPOC`S"} link={"#"} index={1} />
        <LinkBtn title={"AMBASSADORS"} link={"#"} index={2} />
      </div>
    </div>
  );
};

export default EventsSection;

const LinkBtn = ({ title, link, index}) => {
  // Animate on scroll initialization
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
    <Link
      data-aos= "fade-down"
      data-aos-delay = {50*index}
      to={link}
      className="bg-primary text-white font-kodeMono px-8 py-3 rounded-full text-base ShadowBlur"
    >
      {title}
    </Link>
  );
};

LinkBtn.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
