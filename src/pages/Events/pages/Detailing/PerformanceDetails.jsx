import PerformingEventsDetailsLayout from "../../components/PerformingEventsDetailsLayout";
import { useParams } from "react-router-dom";
import {performingEvents} from "../../../../constants/eventDetails-final";
export default function PerformanceDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= performingEvents.length) {
    return <div>Event not found</div>;
  }

  const event = performingEvents[eventIndex];
  return (
    <>
      <PerformingEventsDetailsLayout
        data={event}
        index={eventIndex}
      />
    </>
  );
}
