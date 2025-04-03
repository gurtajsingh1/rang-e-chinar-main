import { useParams } from "react-router-dom";
import CompetitionsDetailsLayout from "./CompetitionsDetailsLayout";
import { womenCompetitions } from "../../../../../constants/eventDetails-final";
export default function CompetitionDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= womenCompetitions.length) {
    return <div>Event not found</div>;
  }

  const event = womenCompetitions[eventIndex];
  return (
    <>
      <CompetitionsDetailsLayout
        data={event}
        index={eventIndex}
      />
    </>
  );
}
