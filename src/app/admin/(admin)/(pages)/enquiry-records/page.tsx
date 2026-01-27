import EnquiryRecords from '@/app/admin/components/enquiry-records/EnquiryRecords';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Enquery Records | Stintwol"
};

const page = () => {
  return <EnquiryRecords/>
}

export default page