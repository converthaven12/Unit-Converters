'use client';

import React from "react";
import ReusableConverter from "@/utils/components/ReusableConverter";

const units: Record<string, number> = {
  "millimeters [mm]": 1,
  "centimeters [cm]": 0.1, // 1 mm = 0.1 cm
  "meters [m]": 0.001
};

const convert = (value: number, from: string, to: string): number => {
  const f = units[from];
  const t = units[to];
  if (f == null || t == null) return NaN;
  return (value * f) / t;
};

export default function ClientMillimetersToCm() {
  return (
    <ReusableConverter
      heading=""                       // page already renders the H1
      units={Object.keys(units)}
      convert={convert}
    />
  );
}

