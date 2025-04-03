import { useParams } from "react-router-dom";
import TalksDetailsLayout from "./TalksDetailsLayout";
import { womenTalks } from "../../../../../constants/eventDetails-final";
export default function TalksDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= womenTalks.length) {
    return <div>Event not found</div>;
  }

  const event = womenTalks[eventIndex];
  return (
    <>
      <TalksDetailsLayout
        data={event}
        index={eventIndex}
      />
    </>
  );
}
