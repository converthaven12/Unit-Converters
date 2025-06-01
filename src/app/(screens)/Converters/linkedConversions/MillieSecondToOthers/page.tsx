"use client";

import React from "react";
import LockedUnitConverter from "../../../../utils/components/LockedConverter/LockedConverter";

const msToMs: Record<string, number> = {
  Millisecond: 1,
  Second: 0.001,
  Minute: 1.66667e-5,
  Hour: 2.77778e-7,
  Day: 1.15741e-8,
  Week: 1.65344e-9,
  Month: 3.80265e-10,
  Year: 3.16888e-11,
  Decade: 3.16888e-12,
  Century: 3.16888e-13,
  Millennium: 3.16888e-14,
  Break: 1e-25,
  Microsecond: 1000,
  Nanosecond: 1e6,
  Picosecond: 1e9,
  Femtosecond: 1e12,
  Attosecond: 1e15,
  Shake: 1e5,
  "Month (synodic)": 3.91935e-10,
  "Year (Julian)": 3.16881e-11,
  "Year (leap)": 3.16232e-11,
  "Year (tropical)": 3.16888e-11,
  "Year (sidereal)": 3.16875e-11,
  "Day (sidereal)": 1.16058e-8,
  "Hour (sidereal)": 2.76798e-7,
  "Minute (sidereal)": 1.6608e-5,
  "Second (sidereal)": 0.00100274,
  Fortnight: 8.2672e-10,
  Septennial: 4.52997e-12,
  Octennial: 3.96372e-12,
  Novennial: 3.52331e-12,
  Quindecennial: 2.11399e-12,
  Quinquennial: 6.34196e-12,
  "Planck TimeUnits": 1.85509e40,
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMs = value;
  const toFactor = msToMs[to];
  if (!toFactor) return 0;
  return fromInMs / toFactor;
};

const toUnits = Object.keys(msToMs).sort();

const MsToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Millisecond to All Units Converter"
      lockedFromUnit="Millisecond"
      units={toUnits}
      convert={convert}
    />
  );
};

export default MsToAllPage;
