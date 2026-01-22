import { useParams, useSearchParams } from 'next/navigation';
import RoomRelatedToHotel from './RoomsRelatedToHotel';

const HotelDetails = () => {
    const params = useParams();
    const { location, "hotel-name": hotelName } = params;
    const hotelNameString = Array.isArray(hotelName) ? hotelName.join("") : hotelName;
    const title = toTitleCase(hotelNameString?.split("-").join(" ")!)
    const loc = toTitleCase(Array.isArray(location) ? location.join(" ") : location ?? "");

    return (
        <div>
            <RoomRelatedToHotel location={loc} hotelName={title} />
        </div>
    )
}

export default HotelDetails

export function toTitleCase(str: string) {
    if (!str) {
        return "";
    }
    return str
        .toLowerCase()
        .split(' ')
        .map(word => {
            if (word.length === 0) {
                return "";
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
}