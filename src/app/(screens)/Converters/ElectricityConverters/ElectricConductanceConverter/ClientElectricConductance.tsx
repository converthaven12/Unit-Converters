'use client';

import React from "react";
// IMPORTANT: path goes from .../app/(screens)/... up to /src, then into /utils
import ReusableConverter from "../../../../../utils/components/ReusableConverter/ReusableConverter";

/** ====== Units (accurate, common) ====== */
const electricConductanceUnits: Record<string, number> = {
  "siemens [S]": 1,
  "kilosiemens [kS]": 1e3,
  "megasiemens [MS]": 1e6,
  "millisiemens [mS]": 1e-3,
  "microsiemens [µS]": 1e-6,
  "ampere/volt [A/V]": 1, // alias of S
  "mho": 1,               // legacy name of S
};

const convertElectricConductance = (value: number, from: string, to: string): number => {
  const fromFactor = electricConductanceUnits[from];
  const toFactor = electricConductanceUnits[to];
  if (fromFactor == null || toFactor == null) return NaN;
  return (value * fromFactor) / toFactor;
};

export default function ClientElectricConductance() {
  return (
    <ReusableConverter
      // Prevent a second <h1> – the page already renders the H1
      heading=""
      units={Object.keys(electricConductanceUnits)}
      convert={convertElectricConductance}
    />
  );
}
