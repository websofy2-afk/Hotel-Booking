import { roomsProps } from "@/app/types/rooms/rooms";
import { FaCheckCircle, FaConciergeBell, FaHandsHelping, FaLeaf, FaRegSmileBeam, FaStar, FaWifi } from "react-icons/fa";
import { roomData } from "./roomData";

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

export interface HotelDetails {
  id: number;
  name: string;
  location: string;
  price: number;
  oldPrice: number;
  rating: number;
  totalRating: number;
  images: string[];
  thumbnailImag: string;
  lat: number;
  lng: number;
  description: string;
  amenities: string[];
  contact: number;
  email: string;
  property: any;
}

export interface HotelItem {
  hotelId: number;
  details?: HotelDetails;
}

export interface LocationHotels {
  locationId: number;
  hotels: string[]
}
export type HotelDataType = Record<string, LocationHotels>;


export const hotelList = [
  {
    id: 1,
    location: "Lucknow",
    hotels: [
      "Revanta Hotel",
      "Golden Crown Residency",
      "Taj Hotel",
      "Hotel Hayat"
    ]
  },
  {
    id: 2,
    location: "Jaipur",
    hotels: [
      "Raj Mahal Palace",
      "Pink City Residency",
    ]
  },
  {
    id: 3,
    location: "Mumbai",
    hotels: [
      "Grand Palace Hotel",
      "Sea Breeze Residency",
    ]
  }
];


export const hotelData: HotelDataType = {
  Lucknow: {
    locationId: 1,
    hotels: [
      "Revanta Hotel",
      "Golden Crown Residency",
      "Taj Hotel",
      "Hotel Hayat"
    ]

    // {
    //   "Revanta Hotel": { 
    //     "hotelId": 3673236237367,
    //     details: {
    //       id: 1,
    //       name: "Revanta Hotel",
    //       location: "Lucknow",
    //       price: 8500,
    //       oldPrice: 9000,
    //       rating: 4.8,
    //       totalRating : 600,
    //       thumbnailImag: "/images/image-gallery/hotels/hotel-1.avif",
    //        images: [
    //             "/images/image-gallery/hotels/hotel-2.avif",
    //             "/images/image-gallery/hotels/hotel-3.avif",
    //             "/images/image-gallery/hotels/hotel-4.avif",
    //             "/images/image-gallery/hotels/hotel-1.avif",
    //         ],
    //       lat: 15.2993,
    //       lng: 74.1240,
    //       description:
    //         "A premium luxury resort with sea-view rooms, infinity pools, and world-class hospitality.",
    //       amenities: ["Free WiFi", "Pool", "Spa", "Bar", "Restaurant", "Beachfront"],
    //       contact: 9873335652,
    //       email: "revanta@gmail.com",
    //       property: roomData
    //     },
    //   },
    //   "Taj Hotel": {
    //     "hotelId": 8376364728388,
    //     details: {
    //       id: 3,
    //       name: "Taj Hotel",
    //       location: "Lucknow",
    //       price: 6200,
    //       oldPrice:6500,
    //       totalRating:700,
    //       rating: 4.5,
    //       images: [
    //             "/images/image-gallery/hotels/hotel-2.avif",
    //             "/images/image-gallery/hotels/hotel-3.avif",
    //             "/images/image-gallery/hotels/hotel-4.avif",
    //             "/images/image-gallery/hotels/hotel-1.avif",
    //         ],
    //       thumbnailImag: "/images/image-gallery/hotels/hotel-2.avif",
    //       lat: 10.8505,
    //       lng: 76.2711,
    //       description:
    //         "Experience backwater beauty with modern amenities and authentic Kerala cuisine.",
    //       amenities: ["Spa", "Houseboat Tours", "Gym", "Restaurant"],
    //       contact: 9873335658,
    //       email: "golden@gmail.com",
    //       property: roomData
    //     },
    //   },
    //   "Hotel Hayat": {
    //     "hotelId": 8376364655688,
    //     details: {
    //       id: 4,
    //       name: "Hotel Hayat",
    //       location: "Lucknow",
    //       oldPrice:6500,
    //       totalRating:700,
    //       price: 6200,
    //       rating: 4.5,
    //       images: [
    //             "/images/image-gallery/hotels/hotel-2.avif",
    //             "/images/image-gallery/hotels/hotel-3.avif",
    //             "/images/image-gallery/hotels/hotel-4.avif",
    //             "/images/image-gallery/hotels/hotel-1.avif",
    //         ],
    //       thumbnailImag: "/images/image-gallery/hotels/hotel-2.avif",
    //       lat: 10.8505,
    //       lng: 76.2711,
    //       description:
    //         "Experience backwater beauty with modern amenities and authentic Kerala cuisine.",
    //       amenities: ["Spa", "Houseboat Tours", "Gym", "Restaurant"],
    //       contact: 9873335658,
    //       email: "golden@gmail.com",
    //       property: roomData
    //     },
    //   },
    //   "Golden Crown Residency": {
    //     "hotelId": 83768746465688,
    //     details: {
    //       id: 2,
    //       name: "Golden Crown Residency",
    //       location: "Lucknow",
    //       oldPrice:6500,
    //       totalRating:700,
    //       price: 6200,
    //       rating: 4.5,
    // images: [
    //       "/images/image-gallery/hotels/hotel-2.avif",
    //       "/images/image-gallery/hotels/hotel-3.avif",
    //       "/images/image-gallery/hotels/hotel-4.avif",
    //       "/images/image-gallery/hotels/hotel-1.avif",
    //   ],
    //       thumbnailImag: "/images/image-gallery/hotels/hotel-2.avif",
    //       lat: 10.8505,
    //       lng: 76.2711,
    //       description:
    //         "Experience backwater beauty with modern amenities and authentic Kerala cuisine.",
    //       amenities: ["Spa", "Houseboat Tours", "Gym", "Restaurant"],
    //       contact: 9873335658,
    //       email: "golden@gmail.com",
    //       property: roomData
    //     },
    //   },
    // }
  },
  Mumbai: {
    locationId: 2,
    hotels: [
      "Grand Palace Hotel",
      "Sea Breeze Residency",
    ]
  },
  Jaipur: {
    locationId: 3,
    hotels: [
      "Raj Mahal Palace",
      "Pink City Residency",
    ]
  },
}

export const locationList = ["Lucknow", "Mumbai", "Jaipur"];

type HotelInfo = {
  id: number;
  name: string;
  location: string;
  price: number;
  oldPrice: number,
  rating: number;
  tag: string,
  totalRating: number,
  images: string[];
  lat: number;
  lng: number;
  contact: number,
  offer?: boolean
  email: string,
  description: string;
  thumbnailImag?: string
  amenities: string[];
  property?: roomsProps[]
};

type HotelDetailsType = {
  [key: string]: HotelInfo[];
};


/** 
 * https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8574202278924!2d81.00377597409413!3d26.90801976029461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd55b9550647%3A0x5136d6cdaa695c2c!2sWebsofy%20Software%20Private%20Limited%20%7C%20Software%20Development%20%7C%20Website%20Development%20%7C%20Digital%20Marketing%20Company%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1765007566134!5m2!1sen!2sin
 */
export const hotelDetails: HotelDetailsType = {
  "Hyatt Regency": [
    {
      id: 1,
      name: "Hyatt Regency",
      location: "Lucknow",
      price: 8500,
      oldPrice: 9000,
      rating: 4.8,
      totalRating: 789,
      tag: "4",
      offer: true,
      images: [
        "/images/image-gallery/hotels/hotel-2.avif",
        "/images/image-gallery/hotels/hotel-3.avif",
        "/images/image-gallery/hotels/hotel-4.avif",
        "/images/image-gallery/hotels/hotel-1.avif",
      ],
      thumbnailImag: "/images/image-gallery/hotels/hotel-1.avif",
      lat: 15.2993,
      lng: 74.1240,
      description:
        "A premium luxury resort with sea-view rooms, infinity pools, and world-class hospitality.",
      amenities: ["Free WiFi", "Pool", "Spa", "Bar", "Restaurant", "Beachfront"],
      contact: 9873335652,
      email: "revanta@gmail.com",
      property: roomData
    },
  ],
  "Golden Crown Residency": [
    {
      id: 2,
      name: "Golden Crown Residency",
      location: "Lucknow",
      price: 6200,
      rating: 4.5,
      oldPrice: 6800,
      totalRating: 550,
      tag: "5",
      offer: true,
      images: [
        "/images/image-gallery/hotels/hotel-2.avif",
        "/images/image-gallery/hotels/hotel-3.avif",
        "/images/image-gallery/hotels/hotel-4.avif",
        "/images/image-gallery/hotels/hotel-1.avif",
      ],
      thumbnailImag: "/images/image-gallery/hotels/hotel-2.avif",
      lat: 10.8505,
      lng: 76.2711,
      description: 
        "Experience backwater beauty with modern amenities and authentic Kerala cuisine.",
      amenities: ["Spa", "Houseboat Tours", "Gym", "Restaurant"],
      contact: 9873335658,
      email: "golden@gmail.com",
      property: roomData
    },
  ],
  "Taj Hotel": [
    {
      id: 3,
      name: "Taj Hotel",
      location: "Lucknow",
      price: 6200,
      oldPrice: 6500,
      tag: "5",
      totalRating: 500,
      rating: 4.5,
      images: [
        "/images/image-gallery/hotels/hotel-2.avif",
        "/images/image-gallery/hotels/hotel-3.avif",
        "/images/image-gallery/hotels/hotel-4.avif",
        "/images/image-gallery/hotels/hotel-1.avif",
      ],
      thumbnailImag: "/images/image-gallery/hotels/hotel-2.avif",
      lat: 10.8505,
      lng: 76.2711,
      description:
        "Experience backwater beauty with modern amenities and authentic Kerala cuisine.",
      amenities: ["Spa", "Houseboat Tours", "Gym", "Restaurant"],
      contact: 9873335658,
      email: "golden@gmail.com",
      property: roomData
    },
  ],
  "Hotel Hayat": [
    {
      id: 4,
      name: "Hotel Hayat",
      location: "Lucknow",
      price: 6200,
      rating: 4.5,
      totalRating: 300,
      tag: "5",
      oldPrice: 6300,
      images: [
        "/images/image-gallery/hotels/hotel-2.avif",
        "/images/image-gallery/hotels/hotel-3.avif",
        "/images/image-gallery/hotels/hotel-4.avif",
        "/images/image-gallery/hotels/hotel-1.avif",
      ],
      thumbnailImag: "/images/image-gallery/hotels/hotel-2.avif",
      lat: 10.8505,
      lng: 76.2711,
      description:
        "Experience backwater beauty with modern amenities and authentic Kerala cuisine.",
      amenities: ["Spa", "Houseboat Tours", "Gym", "Restaurant"],
      contact: 9873335658,
      email: "golden@gmail.com",
      property: roomData
    },
  ],

  "Raj Mahal Palace": [
    {
      id: 1,
      name: "Raj Mahal Palace",
      location: "Jaipur",
      price: 5400,
      rating: 4.7,
      tag: "5",
      oldPrice: 6000,
      totalRating: 200,
      images: [
        "/images/image-gallery/hotels/hotel-2.avif",
        "/images/image-gallery/hotels/hotel-3.avif",
        "/images/image-gallery/hotels/hotel-4.avif",
        "/images/image-gallery/hotels/hotel-1.avif",
      ],
      thumbnailImag: "/images/image-gallery/hotels/hotel-3.avif",
      lat: 26.9124,
      lng: 75.7873,
      description:
        "Heritage hotel with Rajasthani architecture, royal suites, and cultural performances.",
      amenities: ["Heritage Rooms", "Pool", "Restaurant", "Cultural Nights"],
      contact: 9873339652,
      email: "rajmahal@gmail.com",
      property: roomData
    },
  ],
  "Pink City Residency": [
    {
      id: 2,
      name: "Pink City Residency",
      location: "Jaipur",
      tag: "5",
      price: 7800,
      rating: 4.4,
      oldPrice: 8000,
      totalRating: 400,
      images: [
        "/images/image-gallery/hotels/hotel-2.avif",
        "/images/image-gallery/hotels/hotel-3.avif",
        "/images/image-gallery/hotels/hotel-4.avif",
        "/images/image-gallery/hotels/hotel-1.avif",
      ],
      thumbnailImag: "/images/image-gallery/hotels/hotel-4.avif",
      lat: 19.0760,
      lng: 72.8777,
      description:
        "Luxurious city-view rooms with rooftop dining and world-class business facilities.",
      amenities: ["Rooftop Bar", "Gym", "Business Center", "WiFi"],
      contact: 9873335652,
      email: "pinkcity@gmail.com",
      property: roomData
    },
  ],
  "Grand Palace Hotel": [
    {
      id: 1,
      name: "Grand Palace Hotel",
      location: "Mumbai",
      price: 4800,
      rating: 4.6,
      oldPrice: 5000,
      tag: "5",
      totalRating: 800,
      images: [
        "/images/image-gallery/hotels/hotel-2.avif",
        "/images/image-gallery/hotels/hotel-3.avif",
        "/images/image-gallery/hotels/hotel-4.avif",
        "/images/image-gallery/hotels/hotel-1.avif",
      ],
      thumbnailImag: "/images/image-gallery/hotels/hotel-1.avif",
      lat: 32.2396,
      lng: 77.1887,
      description:
        "Snow-clad mountain views, wooden interiors, and peaceful luxury for nature lovers.",
      amenities: ["Mountain View", "Bonfire", "Adventure Tours"],
      contact: 9873345652,
      email: "grandpalace@gmail.com",
      property: roomData
    },
  ],
  "Sea Breeze Residency": [
    {
      id: 2,
      name: "Sea Breeze Residency",
      location: "Mumbai",
      price: 5500,
      rating: 4.3,
      totalRating: 200,
      tag: "5",
      oldPrice: 5900,
      images: [
        "/images/image-gallery/hotels/hotel-2.avif",
        "/images/image-gallery/hotels/hotel-3.avif",
        "/images/image-gallery/hotels/hotel-4.avif",
        "/images/image-gallery/hotels/hotel-1.avif",
      ],
      thumbnailImag: "/images/image-gallery/hotels/hotel-2.avif",
      lat: 27.0238,
      lng: 74.2179,
      description:
        "A desert luxury resort offering camel safaris, sunset dinners, and premium tents.",
      amenities: ["Desert Safari", "Tent Luxury", "Traditional Food"],
      contact: 8873335652,
      email: "seabreeze@gmail.com",
      property: roomData
    },
  ]
}

export const calculator = [
  {
    off: "10% OFF",
    night: "Stay 3+ Nights"
  },
  {
    off: "15% OFF",
    night: "Stay 5+ Nights"
  },
  {
    off: "25% OFF",
    night: "Stay 7+ Nights"
  }
]

