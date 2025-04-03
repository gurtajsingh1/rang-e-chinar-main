import PageLayout from "../../../Components/PageLayout";
import { competitions } from "../../../constants/eventDetails-final";
import EventsPageLayoutWithTabs from "../components/EventsPageLayoutWithTabs";

// Define tier fees
const tier1Fee = "149";
const tier2Fee = "99";
const tier3Fee = "49";

export default function Competitions() {
  // Filter competitions into tiers and keep the original index
  const tier1Competitions = competitions
    .map((event, index) => ({ ...event, originalIndex: index })) // Add original index to each event
    .filter(event => event["Outside Entry Fee"] === tier1Fee);
  
  const tier2Competitions = competitions
    .map((event, index) => ({ ...event, originalIndex: index }))
    .filter(event => event["Outside Entry Fee"] === tier2Fee);

  const tier3Competitions = competitions
    .map((event, index) => ({ ...event, originalIndex: index }))
    .filter(event => event["Outside Entry Fee"] === tier3Fee);

  // Group the events in the order of tiers
  const events = [tier1Competitions, tier2Competitions, tier3Competitions];

  // Define tabs for each tier
  const tabs = ["Tier A", "Tier B", "Tier C"];

  return (
    <PageLayout 
      title={"Competitions"} 
      imgUrl={"/common/conpetition.jpeg"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Competitions", path: "/events/competitions" }
      ]}
    >
      {/* Pass events and tabs to the layout with tabs */}
      <EventsPageLayoutWithTabs events={events} tabs={tabs} />      
    </PageLayout>
  );
}
