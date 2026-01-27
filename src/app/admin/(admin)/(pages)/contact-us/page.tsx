import ContactUs from '@/app/admin/components/contact-us/contact-us';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Stintwol"
};

const page = () => {
  return <ContactUs/>
}

export default page