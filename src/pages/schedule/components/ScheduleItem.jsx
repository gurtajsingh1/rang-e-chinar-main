import { Link } from "react-router-dom";

const ScheduleItem = ({title, startTime, endTime, venue, exploreUrl, fullDay}) => {
  const Titles = title.split(", ");
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 pl-5 pr-5 md:pr-0 py-4 md:py-0 bg-gray-100 font-kodeMono">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
        <h3 className="text-2xl font-bold text-gray-700 textShadow-sm font-figtree py-2 lg:w-64">
          {
            Titles.map((title, index) => (
              <span key={index} className="block">{title}</span>
            ))
          }
        </h3>
        {fullDay ?
          <span className="mt-2 lg:mt-0 lg:w-52 font-medium">Full Day</span> :
          <span className="mt-2 lg:mt-0 lg:w-52 font-medium">{startTime} - {endTime}</span>
        }
      </div>
      <div className="mt-2 lg:max-w-48 lg:mt-0 text-gray-800 font-medium">{venue}</div>
      <div className="mt-2 lg:mt-0 py-6 md:py-6 md:px-5 flex">
        <button className="px-6 md:px-8 py-2 ShadowBlur text-sm md:text-base rounded-md font-medium text-gray-800 bg-primary border border-primary focus:outline-none text-center">
          <Link to={exploreUrl}>
            EXPLORE
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ScheduleItem;