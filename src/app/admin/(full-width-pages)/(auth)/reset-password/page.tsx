
import ResetPassword from '@/app/admin/components/auth/ResetPassword';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Reset Password | Stintwol",
  
};

const page = () => {
  return <ResetPassword/>
}

export default page