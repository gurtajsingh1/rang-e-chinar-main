import PageLayout from "../../../Components/PageLayout";
import { gamezone } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function GamingZone(){
  console.log(gamezone)
    return(
        <PageLayout 
          title={"Gaming Zone"} 
          imgUrl={'/common/gamezone.jpeg'}
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Events", path: "/events" },
            { label: "Gaming Zone", path: "/events/gaming-zone" }
          ]}
        >
          <EventsPageLayout events={gamezone} /> 
        </PageLayout>
    )
}