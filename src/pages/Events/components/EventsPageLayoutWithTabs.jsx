import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EventCard from "./EventCard";
import PropTypes from "prop-types";

const EventsPageLayoutWithTabs = ({ events, tabs }) => {
  return (
    <div className="bg-background ShadowLarge">
      <div className="font-playfair px-8 pt-8 overflow-visible">
        <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl overflow-visible">
          Event List
        </p>
      </div>
      <div>
        <Tabs>
          <TabList className="flex my-2">
            <div className="flex items-center justify-center w-full gap-1 md:gap-5">
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  className="px-8 py-3 text-base font-medium text-gray-800 bg-white border-gray-800 focus:outline-none hover:bg-gray-800 hover:text-primary hover:border-primary text-center border-2 tab-button cursor-pointer"
                  selectedClassName="active-tab"
                >
                  {tab}
                </Tab>
              ))}
            </div>
          </TabList>
          <div className="w-full">
            {events.map((event, index) => (
              <TabPanel key={index}>
                <div className="px-10 flex flex-wrap justify-center gap-8 py-10 relative">
                  {event.map((item, index) => (
                    <EventCard
                      key={index}
                      title={item["Event Name"]}
                      time={item["Start Time"] + " - " + item["End Time"]}
                      venue={item["Venue"]}
                      image={`/events/${item["Card Image"]}`}
                      url={`${item.originalIndex}`}
                    />
                  ))}
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default EventsPageLayoutWithTabs;

EventsPageLayoutWithTabs.propTypes = {
  events: PropTypes.array.isRequired,
  tabs: PropTypes.array.isRequired,
};
