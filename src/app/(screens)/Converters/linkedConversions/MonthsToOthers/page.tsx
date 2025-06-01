'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const monthToMonth: Record<string, number> = {
  'Month': 1,
  'Second': 2.62974e6,
  'Millisecond': 2.62974e9,
  'Minute': 43829.1,
  'Hour': 730.485,
  'Day': 30.4369,
  'Week': 4.34813,
  'Year': 0.0833333,
  'Decade': 0.00833333,
  'Century': 0.000833333,
  'Millennium': 8.33333e-5,
  'Break': 2.62974e-15,
  'Microsecond': 2.62974e12,
  'Nanosecond': 2.62974e15,
  'Picosecond': 2.62974e18,
  'Femtosecond': 2.62974e21,
  'Attosecond': 2.62974e24,
  'Shake': 2.62974e14,
  'Month (synodic)': 1.03069,
  'Year (Julian)': 0.0833332,
  'Year (leap)': 0.0831969,
  'Year (tropical)': 0.0833334,
  'Year (sidereal)': 0.0833328,
  'Day (sidereal)': 30.5306,
  'Hour (sidereal)': 732.735,
  'Minute (sidereal)': 43964.1,
  'Second (sidereal)': 2.63785e6,
  'Fortnight': 2.17406,
  'Septennial': 0.0119048,
  'Octennial': 0.0104167,
  'Novennial': 0.00925926,
  'Quindecennial': 0.00555556,
  'Quinquennial': 0.0166667,
  'Planck Time': 4.8792e49
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMonths = value;
  const toFactor = monthToMonth[to];
  if (!toFactor) return 0;
  return fromInMonths / toFactor;
};

const toUnits = Object.keys(monthToMonth).sort();

const MonthsToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Month to All Units Converter"
      lockedFromUnit="Month"
      units={toUnits}
      convert={convert}
    />
  );
};

export default MonthsToAllPage;