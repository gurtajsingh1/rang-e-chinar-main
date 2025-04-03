import TalksAndWorkshopDetailsLayout from "../../components/TalksAndWorkshopDetailsLayout";
import { useParams } from "react-router-dom";
import {talks} from "../../../../constants/eventDetails-final";
export default function TalksAndWorkshopsDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= talks.length) {
    return <div>Event not found</div>;
  }

  const event = talks[eventIndex];
  return (
    <>
      <TalksAndWorkshopDetailsLayout
        data={event}
        index={eventIndex}
      />
    </>
  );
}
