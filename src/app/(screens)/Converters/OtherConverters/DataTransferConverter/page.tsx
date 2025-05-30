"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Bits per second (bps)": 1,
  "Kilobits per second (kbps)": 1e3,
  "Megabits per second (Mbps)": 1e6,
  "Gigabits per second (Gbps)": 1e9,
  "Terabits per second (Tbps)": 1e12,
  "Bytes per second (Bps)": 8,
  "Kilobytes per second (kBps)": 8e3,
  "Megabytes per second (MBps)": 8e6,
  "Gigabytes per second (GBps)": 8e9,
  "Terabytes per second (TBps)": 8e12,
};

const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const DataTransferConverter = () => (
  <ReusableConverter heading="Data Transfer Converter" units={Object.keys(units)} convert={convert} />
);

export default DataTransferConverter;
