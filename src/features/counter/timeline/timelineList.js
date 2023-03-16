import { selectAllEvents } from "./timelineSlice";
import TimelineSection from "./TimelineSection";
import { useState, useEffect } from "react";

const TimelineSectionsList = () => {
    // const [events, setEvents] = useState([]);
    // setEvents(async() => await selectAllEvents())
    // console.log(events)

    const [events, setEvents] = useState([]);

    useEffect(()=>{
    const fetchEvents = async ()=>{
        const event = await selectAllEvents();
        setEvents(event);
    }
    fetchEvents();
    },[])

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