import { Link } from "react-router-dom";
import PropTypes from "prop-types";


export default function EventCard({title, time, venue, url, image}) {
  return (
    <>
      <Link 
        to={url} 
        className="rounded-xl bg-[url('/common/background-2.png')] bg-white flex flex-col items-center BoxShadow w-[280px] md:w-[310px] px-4 py-4 mb-6"
      >
          <img
            loading="lazy" 
            className="w-[250px] h-[330px] md:w-[280px] md:h-[360px] overflow-hidden z-20 absolute -mt-10 rounded-xl ImgShadow transform hover:scale-105 transition duration-200 ease-in-out"
            src={image != "/events/undefined" ? image : "/events/meme.jpg"}
            alt=""
          />
        <div className="mt-[300px] md:mt-[340px] w-full">
          <p className="font-semibold text-2xl text-white textShadow-sm font-figtree normalcase capitalize">
            {title}
          </p>
          <p className="text-sm md:text-base text-primary font-semibold font-kodeMono mt-2">{time}</p>
          <p className="text-base text-secondary mt-3 font-kodeMono">{venue}</p>
        </div>
      </Link>
    </>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};