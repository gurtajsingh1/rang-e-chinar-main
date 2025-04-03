import EventCard from "./EventCard";
import PropTypes from "prop-types";

const WomenInTechPageLayout = ({ events }) => {
  return (
    <div className="bg-background ShadowLarge">
      <div className="font-playfair px-8 pt-8 overflow-visible">
        <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl overflow-visible">
          Event List
        </p>
        <p className="text-gray-700 font-extrabold font-kodeMono text-md overflow-visible">
          Exclusively for Women
        </p>
      </div>
      <div className="px-10 flex flex-wrap justify-center gap-8 pt-20 pb-10 relative ">
        {events.map((item, index) => (
          <EventCard
            key={index}
            title={item["Event Name"]}
            time={item["Start Time"] + " - " + item["End Time"]}
            venue={item["Venue"]}
            image={`/events/${item["Card Image"]}`}
            url={`/events/women-in-tech/${item.category}/${item.originalIndex}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WomenInTechPageLayout;

WomenInTechPageLayout.propTypes = {
  events: PropTypes.array.isRequired,
};
