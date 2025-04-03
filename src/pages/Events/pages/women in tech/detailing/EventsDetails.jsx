import { useParams } from "react-router-dom";
import EventsDetailsLayout from "./EventsDetailsLayout";
import { womenPerformances } from "../../../../../constants/eventDetails-final";
export default function EventsDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= womenPerformances.length) {
    return <div>Event not found</div>;
  }

  const event = womenPerformances[eventIndex];
  return (
    <>
      <EventsDetailsLayout
        data={event}
        index={eventIndex}
      />
    </>
  );
}
