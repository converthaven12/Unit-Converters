'use client';

import React from "react";
import ReusableConverter from "../../../../../utils/components/ReusableConverter/ReusableConverter";
// If your component file is `utils/components/ReusableConverter/index.tsx`
// use this instead:
// import ReusableConverter from "../../../../../utils/components/ReusableConverter";

const units: Record<string, number> = {
  "siemens [S]": 1,
  "kilosiemens [kS]": 1e3,
  "megasiemens [MS]": 1e6,
  "millisiemens [mS]": 1e-3,
  "microsiemens [µS]": 1e-6,
  "ampere/volt [A/V]": 1,
  "mho": 1,
};

const convert = (value: number, from: string, to: string): number => {
  const f = units[from];
  const t = units[to];
  if (f == null || t == null) return NaN;
  return (value * f) / t;
};

export default function ClientElectricConductance() {
  return (
    <ReusableConverter
      heading=""               // avoid duplicate <h1>
      units={Object.keys(units)}
      convert={convert}
    />
  );
}
