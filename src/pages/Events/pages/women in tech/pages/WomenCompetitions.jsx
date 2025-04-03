import PageLayout from "../../../../../Components/PageLayout";
import { womenCompetitions } from "../../../../../constants/eventDetails-final";
import WomenInTechPageLayout from "../../../components/WomenInTechPageLayout";
export default function WomenCompetitions(){
  const competitions = womenCompetitions
    .map((competition, index) => ({ ...competition, category: "competitions", originalIndex: index }))
    .filter(competition => competition.isWomen === true);
    return(
        <PageLayout 
          title={"Women Competitions"} 
          imgUrl={'/common/women-in-tech.png'}
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Events", path: "/events" },
            {label: "Women In Tech", path: "/events/women-in-tech"},
            {label: "Competitions", path: "/events/women-in-tech/competitions"}
          ]}
        >
          <WomenInTechPageLayout events={competitions} /> 
        </PageLayout>
    )
}