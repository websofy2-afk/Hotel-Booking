import UserCard from "@/app/admin/components/user-profile/UserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile | Stintwol",
};

export default function Profile() {
  return <UserCard />
}
