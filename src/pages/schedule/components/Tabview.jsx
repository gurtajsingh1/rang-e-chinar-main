import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ScheduleItem from "./ScheduleItem";
import { day1Events, day2Events } from "../../../constants/eventDetails-final";

const Tabview = ({ tab1, tab2 }) => {
  return (
    <Tabs>
      {/* Tab Buttons */}
      <TabList className="flex flex-wrap justify-end mr-6 md:mr-18 gap-6 my-6 font-kodeMono">
        <Tab
          className="relative px-16 py-3 text-lg font-bold border-2 rounded-lg transition-all duration-300 cursor-pointer
                     bg-[#F5E1C6] text-[#D97706] border-[#D97706]"
          selectedClassName="!bg-[#D97706] !text-[#F5E1C6] !border-[#D97706] 
                             !shadow-[0_0_15px_rgba(217,119,6,0.4)] 
                             !scale-x-110"
        >
          {tab1}
        </Tab>
        <Tab
          className="relative px-16 py-3 text-lg font-bold border-2 rounded-lg transition-all duration-300 cursor-pointer
                     bg-[#F5E1C6] text-[#D97706] border-[#D97706]"
          selectedClassName="!bg-[#D97706] !text-[#F5E1C6] !border-[#D97706] 
                             !shadow-[0_0_15px_rgba(217,119,6,0.4)] 
                             !scale-x-110"
        >
          {tab2}
        </Tab>
      </TabList>

      {/* Content Box */}
      <div className="mx-2 my-1 px-4 py-6 pb-12 rounded-lg">
        <TabPanel className="space-y-6">
          {day1Events.map((item, index) => (
            <ScheduleItem
              key={index}
              title={item["Event Name"]}
              startTime={item["Start Time"]}
              endTime={item["End Time"]}
              venue={item["Venue"]}
              exploreUrl={`/events/${item.url}`} 
            />
          ))}
        </TabPanel>
        <TabPanel className="space-y-6">
          {day2Events.map((item, index) => (
            <ScheduleItem
              key={index}
              title={item["Event Name"]}
              startTime={item["Start Time"]}
              endTime={item["End Time"]}
              venue={item["Venue"]}
              exploreUrl={`/events/${item.url}`} 
            />
          ))}
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Tabview;
