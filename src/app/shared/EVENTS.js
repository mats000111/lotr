//import description, images, video
import testVideo from "../../assets/videos/The Batman _ Microsoft Teams 2023-01-18 08-51-46.mp4";
import { v4 as uuidv4 } from 'uuid';

export const EVENTS = [
    {
        id: uuidv4(),
        name: "event name",
        date: "event date",
        description: "imported description",
        image: "imported image",
        video: testVideo
    },
    {
        id: uuidv4(),
        name: "event name",
        date: "event date",
        description: "imported description",
        image: "imported image",
        video: "imported video"
    },
    {
        id: uuidv4(),
        name: "event name",
        date: "event date",
        description: "imported description",
        image: "imported image",
        video: "imported video"
    }
]