import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PropTypes from "prop-types";

const TabView = ({ data }) => {
  const rules = data["Rules"].split(";").map(rule => rule.trim()).filter(rule => rule !== "");
  const judgingCriteria = data["Judging Criteria"].split(";").map(criteria => criteria.trim()).filter(criteria => criteria !== "");

  return (
    <>
      <Tabs>
        {/* Tab Buttons */}
        <TabList className="flex flex-wrap justify-center gap-6 my-6 font-kodeMono">
          <Tab
            className="relative px-16 py-3 text-lg font-bold border-2 rounded-lg transition-all duration-300 cursor-pointer
                       bg-[#F5E1C6] text-[#D97706] border-[#D97706]"
            selectedClassName="!bg-[#D97706] !text-[#F5E1C6] !border-[#D97706] 
                               !shadow-[0_0_15px_rgba(217,119,6,0.4)] 
                               !scale-x-110"
          >
            Rules
          </Tab>
          <Tab
            className="relative px-16 py-3 text-lg font-bold border-2 rounded-lg transition-all duration-300 cursor-pointer
                       bg-[#F5E1C6] text-[#D97706] border-[#D97706]"
            selectedClassName="!bg-[#D97706] !text-[#F5E1C6] !border-[#D97706] 
                               !shadow-[0_0_15px_rgba(217,119,6,0.4)] 
                               !scale-x-110"
          >
            Judging Criteria
          </Tab>
        </TabList>

        {/* Content Box */}
        <div className="mx-2 my-2 px-3 py-4 pb-12 rounded-lg shadow-[0_0_15px_rgba(217,119,6,0.4)]">
          <TabPanel>
            <h1 className="entry-header text-3xl font-semibold text-[#D97706] font-figtree mb-4 mt-4 mx-2 overflow-visible">Rules</h1>
            <div className="space-y-5 mx-4 font-semibold text-[#064641] font-kodeMono">
              {rules.map((rule, index) => (
                <p key={index}>{rule}</p>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="entry-header text-3xl font-semibold text-[#D97706] font-figtree mb-4 mt-4 mx-2 overflow-visible">
              Judging Criteria
            </h2>
            <div className="space-y-5 mx-4 font-semibold text-[#064641] font-kodeMono">
              {judgingCriteria.map((criteria, index) => (
                <p key={index}>{criteria}</p>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
};

export default TabView;

TabView.propTypes = { 
  data: PropTypes.object.isRequired,
};
