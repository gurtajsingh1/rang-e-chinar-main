import {cards} from "../../../constants/home-events";
import Card from "./Card";
const ExcitingEvents = () => {

  return (
    <div className="px-4 md:px-[140px] lg:px-[160px] lg2:px-[200px] xl:px-[280px] xl2:px-[320px]">
        <div className="text-left mb-20">
          <p className="text-lg font-semibold font-kodeMono text-gray-400">JUST THE BEST</p>
          <h2 className="text-5xl font-figtree font-bold uppercase overflow-hidden text-white">
            The Most Exciting Event Lineup
          </h2>
        </div>

        <div className="space-y-8">
            {
                cards.map((card, index) =>(<Card key={index} index={index} event={card} />))
            }
      </div>
    </div> 
  );
};

export default ExcitingEvents;

