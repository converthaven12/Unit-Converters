"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const timeUnits: Record<string, number> = {
  Second: 1,
  Millisecond: 1e-3,
  Microsecond: 1e-6,
  Nanosecond: 1e-9,
  Picosecond: 1e-12,
  Femtosecond: 1e-15,
  Attosecond: 1e-18,

  Shake: 1e-8, // 10 nanoseconds

  Minute: 60,
  Hour: 3600,
  Day: 86400,
  Week: 604800,
  Fortnight: 1209600,

  Month: 2.628e6, // average month (30.44 days)
  "Month (synodic)": 2.55144e6, // ~29.53 days, lunar month

  Year: 3.154e7, // common year (365.25 days)
  "Year (Julian)": 3.156e7, // Julian year, 365.25 days (same as above)
  "Year (Leap)": 3.162e7, // leap year, 366 days
  "Year (Tropical)": 3.1557e7, // 365.24219 days
  "Year (Sidereal)": 3.1558e7, // 365.25636 days

  Decade: 3.154e8,
  Century: 3.154e9,
  Millennium: 3.154e10,

  "Day (Sidereal)": 86164.1, // 23h 56m 4.1s
  "Hour (Sidereal)": 3590.17, // 1/24 sidereal day
  "Minute (Sidereal)": 59.836, // 1/60 sidereal hour
  "Second (Sidereal)": 0.99727, // 1/60 sidereal minute

  Septennial: 2.21e8, // 7 years
  Octennial: 2.52e8, // 8 years
  Novennial: 2.84e8, // 9 years
  Quinquennial: 1.58e8, // 5 years
  Quindecennial: 4.73e8, // 15 years

  PlanckTime: 5.39116e-44, // smallest meaningful time unit in physics
};

const TimeConverterPage: React.FC = () => {
  const convertTime = (value: number, from: string, to: string): number => {
    const fromFactor = timeUnits[from];
    const toFactor = timeUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="TimeUnits Converter"
      units={Object.keys(timeUnits)}
      convert={convertTime}
    />
  );
};

export default TimeConverterPage;
