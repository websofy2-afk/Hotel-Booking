"use client"
import HeroSub from '@/app/components/shared/hero-sub';
import { useParams } from 'next/navigation'
import RoomRelatedToHotel from '@/app/components/hotel-lists/RoomsRelatedToHotel';

const page = () => {
  const params = useParams();
  const { location, "hotel-name": hotelName, id } = params;
  const hotelNameString = Array.isArray(hotelName) ? hotelName.join("") : hotelName;
  const title = toTitleCase(hotelNameString?.split("-").join(" ")!)
  const loc = toTitleCase(
    Array.isArray(location) ? location.join(" ") : location ?? ""
  );

  const hotelId = Array.isArray(id) ? id.join(" ") : id ?? ""
  const breadcrumbLinks = [
    { href: "/", text: `Home` },
    { href: "/", text: `${title} - ${loc}` },
  ];



  return (
    <div>
      <HeroSub
        title={`${title} - ${location} `}
        description="Experience luxurious comfort with world-class amenities, peaceful surroundings, and an unforgettable stay tailored just for you."
        breadcrumbLinks={breadcrumbLinks}
      />
      <RoomRelatedToHotel location={loc} hotelName={title} id={hotelId}/>
    </div>
  )
}

export default page


function toTitleCase(str: string) {
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