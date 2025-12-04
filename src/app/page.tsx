import Hero from './components/home/hero';
import Calculator from './components/home/calculator';
import History from './components/home/history';
import Features from './components/shared/features';
import CompanyInfo from './components/home/info';
import Listing from './components/home/hotel-list';
import Testimonials from './components/home/testimonial';
import RooftopShowcase from './components/home/rooftop-showcase';
import ReviewsTestimonials from './components/home/reviews-testimonials';
import ImageGallery from './components/home/image-gallery';
import HoteoAmenities from './components/home/hotel-amenities';


export default function Home() {
  return (
    <main>
      <Hero />
      <HoteoAmenities />
      <History />
      <Listing />
      <Features />
      <Calculator />
      <Testimonials />
      <ImageGallery />
      <ReviewsTestimonials />
      <CompanyInfo />
      <RooftopShowcase />
    </main>
  )
}
