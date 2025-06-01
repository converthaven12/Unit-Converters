'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const yearToYear: Record<string, number> = {
  'Year': 1,
  'Second': 3.15569e7,
  'Millisecond': 3.15569e10,
  'Minute': 525949,
  'Hour': 8765.81,
  'Day': 365.242,
  'Week': 52.1775,
  'Month': 12,
  'Decade': 0.1,
  'Century': 0.01,
  'Millennium': 0.001,
  'Break': 3.15569e-14,
  'Microsecond': 3.15569e13,
  'Nanosecond': 3.15569e16,
  'Picosecond': 3.15569e19,
  'Femtosecond': 3.15569e22,
  'Attosecond': 3.15569e25,
  'Shake': 3.15569e15,
  'Month (synodic)': 12.3683,
  'Year (Julian)': 0.999997,
  'Year (leap)': 0.997268,
  'Year (tropical)': 1.00001,
  'Year (sidereal)': 0.999996,
  'Day (sidereal)': 366.242,
  'Hour (sidereal)': 8789.81,
  'Minute (sidereal)': 527388,
  'Second (sidereal)': 3.16433e7,
  'Fortnight': 26.0887,
  'Septennial': 0.142857,
  'Octennial': 0.125,
  'Novennial': 0.111111,
  'Quindecennial': 0.0666667,
  'Quinquennial': 0.2,
  'Planck Time': 5.85504e50
};

const convert = (value: number, from: string, to: string): number => {
  const fromInYears = value;
  const toFactor = yearToYear[to];
  if (!toFactor) return 0;
  return fromInYears / toFactor;
};

const toUnits = Object.keys(yearToYear).sort();

const YearsToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Year to All Units Converter"
      lockedFromUnit="Year"
      units={toUnits}
      convert={convert}
    />
  );
};

export default YearsToAllPage;