"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { Radio } from "react-loader-spinner";
const COLORS = ["#e31e24", "#f9b52b"];

const DashboardPage = () => {
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [enrollRes, contactRes] = await Promise.all([
          fetch("/api/auth/enroll-now"),
          fetch("/api/auth/contact-us")
        ]);
        const enrollData = await enrollRes.json();
        const contactData = await contactRes.json();

        setEnrollments(enrollData.data);
        setContacts(contactData.data || contactData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const groupByDate = (data: any[]) => {
    const map: Record<string, number> = {};
    data.forEach((item) => {
      const date = new Date(item.createdAt).toLocaleDateString();
      map[date] = (map[date] || 0) + 1;
    });
    return Object.keys(map).map((date) => ({
      date,
      count: map[date],
    }));
  };

  const enrollmentChart = groupByDate(enrollments);
  const contactChart = groupByDate(contacts);

  const pieData = [
    { name: "Enrollments", value: enrollments.length },
    { name: "Contacts", value: contacts.length },
  ];

  return (
    <div className="p-4">
      <PageBreadcrumb pageTitle="Dashboard" />
      {
        loading ? <div className="flex items-center justify-center">
          <Radio
            visible={true}
            height="150"
            width="150"
            colors={["#f9b52b", "#e31e24", "#e31e24"]}
            ariaLabel="radio-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div> :
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-primary shadow rounded-lg p-6">
                <p className="text-white font-semibold">Total Enquiry Request</p>
                <h2 className="text-3xl text-white font-bold">{enrollments.length}</h2>
              </div>
              <div className="bg-formbg shadow rounded-lg p-6">
                <p className="text-white font-semibold">Total Contacts Request</p>
                <h2 className="text-3xl text-white font-bold">{contacts.length}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg text-MidnightNavyText font-semibold mb-3">
                  Enquiry Trend
                </h3>

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={enrollmentChart} >
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="#e31e24"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg text-MidnightNavyText font-semibold mb-3">
                  Contact Requests Trend
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={contactChart}>
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="#f9b52b"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg text-MidnightNavyText font-semibold mb-3">
                Enquiry vs Contact Ratio
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {pieData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
      }
    </div>
  );
};

export default DashboardPage;

