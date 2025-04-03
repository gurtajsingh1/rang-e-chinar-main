import PageLayout from "../../../../../Components/PageLayout";
import { womenTalks } from "../../../../../constants/eventDetails-final";
import WomenInTechPageLayout from "../../../components/WomenInTechPageLayout";
export default function WomenTalks(){
  const womenTalkEvents = womenTalks
  .map((talk, index) => ({ ...talk,category: "talks-and-workshops", originalIndex: index }))
  .filter(talk => talk.isWomen === true);

    return(
        <PageLayout 
          title={"Women Talks and Workshops"} 
          imgUrl={'/common/women-in-tech.png'}
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Events", path: "/events" },
            {label: "Women In Tech", path: "/events/women-in-tech"},
            {label: "Talks and Workshops", path: "/events/women-in-tech/talks-and-workshops"}
          ]}
        >
          <WomenInTechPageLayout events={womenTalkEvents} /> 
        </PageLayout>
    )
}