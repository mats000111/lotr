import { selectAllEvents } from "./timelineSlice";
import TimelineSection from "./TimelineSection";

const TimelineSectionsList = () => {
    const events = selectAllEvents();

    return (
        <>
            {events.map((event) => {
                return (
                    <TimelineSection key={event.id} event={event} />
                )
            })}
        </>
    )
}

export default TimelineSectionsList;