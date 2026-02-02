import Hero from './components/home/hero';
import Calculator from './components/home/calculator';
import History from './components/home/history';
import Features from './components/shared/features';
import CompanyInfo from './components/home/info';
import Testimonials from './components/home/testimonial';
import RooftopShowcase from './components/home/rooftop-showcase';
import { ImageGallery } from './components/home/image-gallery';
import HotelAmenities from './components/home/hotel-amenities';
import { LocationListing } from './components/home/hotel-list';
import { TestimonialsReviews } from './components/home/reviews-testimonials';

export default function Home() {
    return (
        <main>
            <Hero />
            <HotelAmenities />
            <History />
            <LocationListing />
            <Features />
            <Calculator />
            <Testimonials />
            <ImageGallery />
            <TestimonialsReviews />
            <CompanyInfo />
            <RooftopShowcase />
        </main>
    )
}
