"use client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard: React.FC = () => {
  const router = useRouter();
  const stats = [
    {
      title: "Today's Clicks",
      count: 128,
      gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      title: "This Week's Clicks",
      count: 892,
      gradient: "bg-gradient-to-r from-green-500 to-emerald-700",
    },
    {
      title: "This Month's Clicks",
      count: 3521,
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-700",
    },
  ];

  const monthlyData = [
    { month: "Jan", clicks: 300 },
    { month: "Feb", clicks: 500 },
    { month: "Mar", clicks: 800 },
    { month: "Apr", clicks: 700 },
    { month: "May", clicks: 950 },
    { month: "Jun", clicks: 400 },
    { month: "Jul", clicks: 1200 },
    { month: "Aug", clicks: 850 },
    { month: "Sep", clicks: 650 },
    { month: "Oct", clicks: 930 },
    { month: "Nov", clicks: 1100 },
    { month: "Dec", clicks: 1000 },
  ];

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      router.push("/Login");
    }
  }, []);
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        <button
          onClick={() => {
            localStorage.clear();
            router.push("/Login");
          }}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-sm transition"
        >
          <LogOut size={18} />
          <span className="cursor-pointer">Logout</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 text-white shadow-md hover:shadow-lg transition-shadow duration-300 ${stat.gradient}`}
          >
            <h2 className="text-sm font-medium">{stat.title}</h2>
            <p className="text-3xl font-bold mt-2">{stat.count}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Monthly Clicks Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            {/* Removed Tooltip */}
            <Bar
              dataKey="clicks"
              fill="#6366f1"
              radius={[4, 4, 0, 0]}
              isAnimationActive={false} // optional: disables animation
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
