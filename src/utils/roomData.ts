import { locationProps } from "@/app/types/location/location";

export const roomData = [
  {
    id: 1,
    slug: "deluxe-room",
    hotel_name: "Revanta Hotel",
    city: "Lucknow",
    room_type: "Deluxe",
    name: "Deluxe Room",
    description: "A spacious premium room with king bed, balcony and city view.",
    maxAdults: 2,
    maxChildren: 1,
    bedType: "King",
    pricePerNight: 4500,
    tag: "Popular",         
    rating: 4.5, 
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Smart TV",
      "Room Service",
      "Mini Fridge",
      "Work Desk"
    ],
    thumbnail : "/images/properties/prop-1.jpg",
    images: ["/images/properties/prop-1.jpg", "/images/properties/prop-2.jpg", "/images/properties/prop-3.jpg"]
  },
  
  {
    id: 2,
    slug: "super-deluxe-room",
    hotel_name: "Revanta Hotel",
    city: "Lucknow",
    room_type: "Super Deluxe",
    name: "Super Deluxe Room",
    description: "Premium room with sea view, modern interior and luxury facilities.",
    maxAdults: 3,
    maxChildren: 1,
    bedType: "Queen",
    pricePerNight: 6500,
    tag: "Trending",        
    rating: 4.8,            
    amenities: [
      "Ocean View",
      "Free Breakfast",
      "Air Conditioning",
      "Smart TV",
      "Premium Sofa",
      "Bath Tub"
    ],
    thumbnail: "/images/properties/prop-2.jpg",
    images: ["/images/properties/prop-1.jpg", "/images/properties/prop-2.jpg", "/images/properties/prop-3.jpg"]
  },

  {
    id: 3,
    slug: "family-suite",
    hotel_name: "Revanta Hotel",
    city: "Lucknow",
    room_type: "Suite",
    name: "Family Suite",
    description: "Large suite perfect for family, includes 2 beds and living space.",
    maxAdults: 4,
    maxChildren: 2,
    bedType: "2 Queen Beds",
    pricePerNight: 9500,
    tag: "Best for Family",
    rating: 4.9,
    amenities: [
      "Two Bedrooms",
      "Living Room",
      "Mini Bar",
      "Free WiFi",
      "Large Bathroom",
      "Kitchenette"
    ],
    thumbnail: "/images/properties/prop-3.jpg",
    images: ["/images/properties/prop-1.jpg", "/images/properties/prop-2.jpg", "/images/properties/prop-3.jpg"]
  },
];

export const locationData : locationProps[]  = [
  {
    id: 1,
    city: "Lucknow",
    focusOn: "Focus on culture, food & connectivity",
    whyChooseUs: "Guests in Lucknow usually visit for culture, family trips, exams, or government work.",         
    rating: 4.5, 
    featureImage : "/images/properties/prop-1.jpg",
    features: ["Famous Lucknowi cuisine nearby", "Close to heritage & historical places", "Easy access to railway & bus stand",
      "Near local markets (Chikankari shopping)", "Nearby hospitals & government offices"
    ]
  },
  {
    id: 2,
    city: "Mumbai",
    focusOn: "Focus on business, airport & fast travel",
    whyChooseUs: "Mumbai guests are mostly business travelers, transit guests, or event visitors.",         
    rating: 4.6, 
    featureImage : "/images/properties/prop-2.jpg",
    features: ["Close to business hubs (BKC, Andheri, Lower Parel)", "Easy access to Metro / Local train", "Ideal for business & corporate stay", "Close to studios / event venues", "Near major hospitals"
    ]
  },
  {
    id: 3,
    city: "Jaipur",
    focusOn: "Focus on tourism & heritage",
    whyChooseUs: "Jaipur guests are mainly tourists, couples, and wedding groups.",         
    rating: 4.5, 
    featureImage : "/images/properties/prop-3.jpg",
    features: ["Near Hawa Mahal / Amer Fort / City Palace", "Close to bazaars (Johari, Bapu Market)", "Heritage & cultural surroundings",
      "Perfect for sightseeing & photography", "Near wedding venues & palaces"
    ]
  },

];