"use client";

import React from "react";
import LockedUnitConverter from "../../../../utils/components/LockedConverter/LockedConverter";

const dayToDay: Record<string, number> = {
  Day: 1,
  Second: 86400,
  Millisecond: 8.64e7,
  Minute: 1440,
  Hour: 24,
  Week: 0.142857,
  Month: 0.0328549,
  Year: 0.00273791,
  Decade: 0.000273791,
  Century: 2.73791e-5,
  Millennium: 2.73791e-6,
  Break: 8.64e-18,
  Microsecond: 8.64e10,
  Nanosecond: 8.64e13,
  Picosecond: 8.64e16,
  Femtosecond: 8.64e19,
  Attosecond: 8.64e22,
  Shake: 8.64e12,
  "Month (synodic)": 0.0338632,
  "Year (Julian)": 0.00273785,
  "Year (leap)": 0.00273224,
  "Year (tropical)": 0.00273792,
  "Year (sidereal)": 0.0027378,
  "Day (sidereal)": 1.00274,
  "Hour (sidereal)": 24.0657,
  "Minute (sidereal)": 1443.94,
  "Second (sidereal)": 86636.6,
  Fortnight: 0.0714286,
  Septennial: 0.000391394,
  Octennial: 0.000342465,
  Novennial: 0.000304414,
  Quindecennial: 0.000182648,
  Quinquennial: 0.000547945,
  "Planck TimeUnits": 1.6028e48,
};

const convert = (value: number, from: string, to: string): number => {
  const fromInDays = value;
  const toFactor = dayToDay[to];
  if (!toFactor) return 0;
  return fromInDays / toFactor;
};

const toUnits = Object.keys(dayToDay).sort();

const DaysToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Day to All Units Converter"
      lockedFromUnit="Day"
      units={toUnits}
      convert={convert}
    />
  );
};

export default DaysToAllPage;
