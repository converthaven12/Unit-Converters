"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

interface AnalyticsRow {
  dimensionValues?: { value: string }[];
  metricValues?: { value: string }[];
}

interface AnalyticsData {
  sessions: {
    rows?: AnalyticsRow[];
  };
  events: {
    rows?: AnalyticsRow[];
  };
}

interface EventStats {
  today: number;
  month: number;
  year: number;
}

interface DashboardStats {
  sessions: EventStats;
  clicks: EventStats;
  pageViews: EventStats;
}

const AdminDashboard: React.FC = () => {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/analytics");

      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
      }

      const data: AnalyticsData = await res.json();

      // Date helpers
      const today = new Date();
      const todayStr = today.toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
      const currentYear = todayStr.slice(0, 4);
      const currentMonth = todayStr.slice(0, 6); // YYYYMM

      // Initialize stats
      const initialStats: DashboardStats = {
        sessions: { today: 0, month: 0, year: 0 },
        clicks: { today: 0, month: 0, year: 0 },
        pageViews: { today: 0, month: 0, year: 0 },
      };

      // Process sessions data
      if (data.sessions?.rows) {
        for (const row of data.sessions.rows) {
          const date = row.dimensionValues?.[0]?.value || "";
          const count = parseInt(row.metricValues?.[0]?.value || "0", 10);

          if (!date) continue;

          if (date === todayStr) initialStats.sessions.today += count;
          if (date.startsWith(currentMonth))
            initialStats.sessions.month += count;
          if (date.startsWith(currentYear)) initialStats.sessions.year += count;
        }
      }

      // Process events data
      if (data.events?.rows) {
        for (const row of data.events.rows) {
          const date = row.dimensionValues?.[0]?.value || "";
          const eventName = row.dimensionValues?.[1]?.value || "";
          const count = parseInt(row.metricValues?.[0]?.value || "0", 10);

          if (!date || !eventName) continue;

          // Categorize events
          if (eventName === "click") {
            if (date === todayStr) initialStats.clicks.today += count;
            if (date.startsWith(currentMonth))
              initialStats.clicks.month += count;
            if (date.startsWith(currentYear)) initialStats.clicks.year += count;
          } else if (eventName === "page_view") {
            if (date === todayStr) initialStats.pageViews.today += count;
            if (date.startsWith(currentMonth))
              initialStats.pageViews.month += count;
            if (date.startsWith(currentYear))
              initialStats.pageViews.year += count;
          }
        }
      }

      setStats(initialStats);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch analytics:", error);
      setError("Failed to load analytics data. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("isLoggedIn") !== "true") {
        router.push("/Login");
        return;
      }
    }

    fetchAnalytics();

    // Refresh data when window gains focus
    const onFocus = () => fetchAnalytics();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, []);

  if (loading) return <div className="p-6">Loading analytics...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!stats) return <div className="p-6">No analytics data available.</div>;

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
          aria-label="Logout"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>

      {/* Sessions stats */}
      <section aria-labelledby="sessions-heading" className="mb-10">
        <h2 id="sessions-heading" className="text-xl font-semibold mb-4">
          Sessions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard label="Today" value={stats.sessions.today} color="blue" />
          <StatCard
            label="This Month"
            value={stats.sessions.month}
            color="green"
          />
          <StatCard
            label="This Year"
            value={stats.sessions.year}
            color="purple"
          />
        </div>
      </section>

      {/* Page Views stats */}
      <section aria-labelledby="views-heading" className="mb-10">
        <h2 id="views-heading" className="text-xl font-semibold mb-4">
          Page Views
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard label="Today" value={stats.pageViews.today} color="blue" />
          <StatCard
            label="This Month"
            value={stats.pageViews.month}
            color="green"
          />
          <StatCard
            label="This Year"
            value={stats.pageViews.year}
            color="purple"
          />
        </div>
      </section>

      {/* Clicks stats */}
      <section aria-labelledby="clicks-heading" className="mb-10">
        <h2 id="clicks-heading" className="text-xl font-semibold mb-4">
          All Clicks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard label="Today" value={stats.clicks.today} color="blue" />
          <StatCard
            label="This Month"
            value={stats.clicks.month}
            color="green"
          />
          <StatCard
            label="This Year"
            value={stats.clicks.year}
            color="purple"
          />
        </div>
      </section>
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: number;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, color }) => {
  const colorMap: Record<string, string> = {
    blue: "from-blue-500 to-blue-700",
    green: "from-green-500 to-emerald-700",
    purple: "from-purple-500 to-indigo-700",
  };

  return (
    <div
      className={`rounded-xl p-6 text-white bg-gradient-to-r ${colorMap[color]} shadow-md`}
      aria-label={`${label}: ${value}`}
    >
      <h3 className="text-sm font-medium">{label}</h3>
      <p className="text-3xl font-bold mt-2">{value.toLocaleString()}</p>
    </div>
  );
};

export default AdminDashboard;
