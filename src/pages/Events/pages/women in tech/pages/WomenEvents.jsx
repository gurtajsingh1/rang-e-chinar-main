import PageLayout from "../../../../../Components/PageLayout";
import { womenPerformances } from "../../../../../constants/eventDetails-final";
import WomenInTechPageLayout from "../../../components/WomenInTechPageLayout";
export default function WomenEvents(){
  const Events = womenPerformances
    .map((event, index) => ({ ...event, category: "women-events", originalIndex: index }))
    .filter(event => event.isWomen === true);
    return(
        <PageLayout 
          title={"Women Events"} 
          imgUrl={'/common/women-in-tech.png'}
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Events", path: "/events" },
            {label: "Women In Tech", path: "/events/women-in-tech"},
            {label: "Women Events", path: "/events/women-in-tech/women-events"}
          ]}
        >
          <WomenInTechPageLayout events={Events} /> 
        </PageLayout>
    )
}