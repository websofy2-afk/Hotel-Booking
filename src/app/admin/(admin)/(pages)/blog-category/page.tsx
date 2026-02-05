import BlogCategory from '@/app/admin/components/blog-category/BlogCategory';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog Category | Stintwol"
};

const page = () => {
  return <BlogCategory/>
}

export default page