import PageLayout from "../../../Components/PageLayout";
import { talks } from "../../../constants/eventDetails-final";
import EventsPageLayoutWithTabs from "../components/EventsPageLayoutWithTabs";

export default function TalksAndWorkshops() {
  const Talks = talks
    .map((event, index) => ({ ...event, originalIndex: index })) 
    .filter(event => event["isWorkshop"] === false);
  const Workshops = talks
    .map((event, index) => ({ ...event, originalIndex: index })) 
    .filter(event => event["isWorkshop"] === true);
  const tabs = ["Talks", "Workshops"];
  const events = [Talks, Workshops];
  return (
    <PageLayout 
      title={"Talks And Workshops"} 
      imgUrl={"/common/worksop-and-talk.png"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Talks And Workshops", path: "/events/talks-and-workshops" }
      ]}
    >
      <EventsPageLayoutWithTabs events={events} tabs={tabs} /> 
    </PageLayout>
  );
}
