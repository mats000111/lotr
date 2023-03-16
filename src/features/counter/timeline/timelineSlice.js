// import { EVENTS } from "../../../app/shared/EVENTS";
import { baseUrl } from "../../../app/shared/BaseUrl";

// export const selectAllEvents = () => {
//     return EVENTS;
// };

export const selectAllEvents = async () => {
    const response = await fetch(baseUrl + "events")
    const data = await response.json();

    return data;
}