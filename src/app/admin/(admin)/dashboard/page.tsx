import Chart from '@/app/admin/components/charts/Chart';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Stintwol",
};

export default function Dashboard() {
  return <Chart />;
}
