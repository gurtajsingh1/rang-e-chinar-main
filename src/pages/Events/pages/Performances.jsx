import PageLayout from "../../../Components/PageLayout";
import { performingEvents } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function Performances(){
    return(
        <PageLayout 
          title={"Performances"} 
          imgUrl={'/common/performance.jpeg'}
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Events", path: "/events" },
            { label: "Performances", path: "/events/performances" }
          ]}
        >
          <EventsPageLayout events={performingEvents} /> 
        </PageLayout>
    )
}