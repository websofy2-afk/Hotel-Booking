export interface roomsProps {
  id: number;
  slug: string;
  hotel_name: string;
  city: string;
  room_type: string;
  name: string;
  description: string;
  maxAdults: number;
  maxChildren: number;
  bedType: string;
  pricePerNight: number;
  amenities: string[];
  images: string[];
  thumbnail : string;
  tag: string;
  rating: number;
}


export interface RoomCardProps {
  property: roomsProps;
  viewMode?: string;
}


