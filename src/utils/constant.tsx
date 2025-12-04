import { FaCheckCircle, FaConciergeBell, FaHandsHelping, FaLeaf, FaRegSmileBeam, FaStar, FaWifi } from "react-icons/fa";

export const images: string[] = [
  "/images/image-gallery/rooms/room-1.avif",
  "/images/image-gallery/rooms/room-2.avif",
  "/images/image-gallery/hotels/hotel-1.avif",
  "/images/image-gallery/hotels/hotel-2.avif",
  "/images/image-gallery/rooms/room-3.avif",
  "/images/image-gallery/rooms/room-4.avif",
  "/images/image-gallery/hotels/hotel-3.avif",
  "/images/image-gallery/hotels/hotel-4.avif",
];

export const values = [
  {
    icon: <FaLeaf />,
    title: "Nature Inspired",
    desc: "Design that connects you with peace.",
  },
  {
    icon: <FaRegSmileBeam />,
    title: "Guest-Centric",
    desc: "Every moment crafted for your comfort.",
  },
  {
    icon: <FaStar />,
    title: "Premium Luxury",
    desc: "Unmatched elegance & comfort.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Trusted Service",
    desc: "We put your needs first.",
  },
]

export const counter = [
  { number: 150, label: "Luxury Rooms" },
  { number: 25000, label: "Happy Guests" },
  { number: 35, label: "Awards Won" },
]


export const whychoose = [
  {
    icon: <FaCheckCircle className="text-green-600 text-4xl" />,
    title: "Top-Class Hospitality",
    desc: "Enjoy personalized service and premium care.",
  },
  {
    icon: <FaConciergeBell className="text-yellow-500 text-4xl" />,
    title: "Luxury Facilities",
    desc: "Spa, rooftop dining, infinity pool & more.",
  },
  {
    icon: <FaWifi className="text-blue-600 text-4xl" />,
    title: "Smart Rooms",
    desc: "High-speed Wi-Fi & modern tech-enabled rooms.",
  },
]

export const missionVision = [
  {
    title: "Our Mission",
    desc: "To offer world-class luxury stays that blend comfort, elegance, and warm hospitality—creating unforgettable guest moments.",
  },
  {
    title: "Our Vision",
    desc: "To become the world’s most loved luxury hotel brand, known for exceptional service and unforgettable experiences.",
  },

]

export const awards = [
  { title: "Best Luxury Stay 2023", img: "/images/awards/award-1.avif" },
  { title: "Customer Excellence 2022", img: "/images/awards/award-2.avif" },
  { title: "Top Hospitality Award", img: "/images/awards/award-3.avif" },
];

export const journey = [
  {
    year: "2015",
    text: "LuxeLeaf was founded with a dream to redefine hospitality.",
  },
  {
    year: "2018",
    text: "Expanded to 3 luxury hotels with global-grade facilities.",
  },
  {
    year: "2021",
    text: "Recognized as one of the Top Luxury Hotel Brands.",
  },
  {
    year: "2024",
    text: "Opened our premium rooftop dining & wellness spa.",
  },
]



export const hotelsData = [
  {
    id: 1,
    name: "LuxeLeaf Grand Resort",
    location: "Goa, India",
    price: 8500,
    rating: 4.8,
    image: "/images/hotels/hotel1.jpg",
    lat: 15.2993,
    lng: 74.1240,
    description:
      "A premium luxury resort with sea-view rooms, infinity pools, and world-class hospitality.",
    amenities: ["Free WiFi", "Pool", "Spa", "Bar", "Restaurant", "Beachfront"],
  },
  {
    id: 2,
    name: "Emerald Bay Paradise",
    location: "Kerala, India",
    price: 6200,
    rating: 4.5,
    image: "/images/hotels/hotel2.jpg",
    lat: 10.8505,
    lng: 76.2711,
    description:
      "Experience backwater beauty with modern amenities and authentic Kerala cuisine.",
    amenities: ["Spa", "Houseboat Tours", "Gym", "Restaurant"],
  },
  {
    id: 3,
    name: "Royal Orchid Palace",
    location: "Jaipur, India",
    price: 5400,
    rating: 4.7,
    image: "/images/hotels/hotel3.jpg",
    lat: 26.9124,
    lng: 75.7873,
    description:
      "Heritage hotel with Rajasthani architecture, royal suites, and cultural performances.",
    amenities: ["Heritage Rooms", "Pool", "Restaurant", "Cultural Nights"],
  },
  {
    id: 4,
    name: "Skyline Premium Suites",
    location: "Mumbai, India",
    price: 7800,
    rating: 4.4,
    image: "/images/hotels/hotel4.jpg",
    lat: 19.0760,
    lng: 72.8777,
    description:
      "Luxurious city-view rooms with rooftop dining and world-class business facilities.",
    amenities: ["Rooftop Bar", "Gym", "Business Center", "WiFi"],
  },
  {
    id: 5,
    name: "Mountain Bliss Retreat",
    location: "Manali, India",
    price: 4800,
    rating: 4.6,
    image: "/images/hotels/hotel5.jpg",
    lat: 32.2396,
    lng: 77.1887,
    description:
      "Snow-clad mountain views, wooden interiors, and peaceful luxury for nature lovers.",
    amenities: ["Mountain View", "Bonfire", "Adventure Tours"],
  },
  {
    id: 6,
    name: "Sunset Oasis Resort",
    location: "Rajasthan, India",
    price: 5500,
    rating: 4.3,
    image: "/images/hotels/hotel6.jpg",
    lat: 27.0238,
    lng: 74.2179,
    description:
      "A desert luxury resort offering camel safaris, sunset dinners, and premium tents.",
    amenities: ["Desert Safari", "Tent Luxury", "Traditional Food"],
  },
  {
    id: 7,
    name: "Blue Lagoon Beach Hotel",
    location: "Pondicherry, India",
    price: 6900,
    rating: 4.5,
    image: "/images/hotels/hotel7.jpg",
    lat: 11.9416,
    lng: 79.8083,
    description:
      "Beachfront hotel offering French-Indian fusion ambience and private sunrise balconies.",
    amenities: ["Beachfront", "Spa", "French Café"],
  },
  {
    id: 8,
    name: "The Crystal Crown",
    location: "Bangalore, India",
    price: 7200,
    rating: 4.2,
    image: "/images/hotels/hotel8.jpg",
    lat: 12.9716,
    lng: 77.5946,
    description:
      "Modern business luxury with premium rooms, banquet halls, and fine dining.",
    amenities: ["Banquet Hall", "Fine Dining", "WiFi"],
  },
  {
    id: 9,
    name: "Himalayan Pearl Suites",
    location: "Shimla, India",
    price: 5700,
    rating: 4.6,
    image: "/images/hotels/hotel9.jpg",
    lat: 31.1048,
    lng: 77.1734,
    description:
      "Located in the hills, offering misty views, wooden suites, and peaceful ambience.",
    amenities: ["Hill View", "Restaurant", "Spa"],
  },
  {
    id: 10,
    name: "Royal Sea Breeze Resort",
    location: "Andaman & Nicobar",
    price: 9500,
    rating: 4.9,
    image: "/images/hotels/hotel10.jpg",
    lat: 11.7401,
    lng: 92.6586,
    description:
      "Premium island resort with private villas, scuba diving, and crystal clear beaches.",
    amenities: ["Private Villas", "Scuba Diving", "Beach Access"],
  },
];
