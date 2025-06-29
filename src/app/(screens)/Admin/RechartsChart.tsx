// RechartsChart.tsx
"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface RechartsChartProps {
  data: { date: string; clicks: number }[];
}

const RechartsChart: React.FC<RechartsChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #ccc",
            borderRadius: "6px",
            color: "#000000",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
          }}
          labelStyle={{ color: "#000" }}
          cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
        />
        <Bar dataKey="clicks" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RechartsChart;
