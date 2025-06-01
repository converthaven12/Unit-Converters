'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const hrToHr: Record<string, number> = {
  'Hour': 1,
  'Second': 3600,
  'Millisecond': 3.6e6,
  'Minute': 60,
  'Day': 0.0416667,
  'Week': 0.00595238,
  'Month': 0.00136895,
  'Year': 0.00011408,
  'Decade': 1.1408e-5,
  'Century': 1.1408e-6,
  'Millennium': 1.1408e-7,
  'Break': 3.6e-19,
  'Microsecond': 3.6e9,
  'Nanosecond': 3.6e12,
  'Picosecond': 3.6e15,
  'Femtosecond': 3.6e18,
  'Attosecond': 3.6e21,
  'Shake': 3.6e11,
  'Month (synodic)': 0.00141097,
  'Year (Julian)': 0.000114077,
  'Year (leap)': 0.000113843,
  'Year (tropical)': 0.00011408,
  'Year (sidereal)': 0.000114075,
  'Day (sidereal)': 0.0417807,
  'Hour (sidereal)': 1.00274,
  'Minute (sidereal)': 60.1644,
  'Second (sidereal)': 3609.86,
  'Fortnight': 0.00297619,
  'Septennial': 1.63079e-5,
  'Octennial': 1.42694e-5,
  'Novennial': 1.26839e-5,
  'Quindecennial': 7.61035e-6,
  'Quinquennial': 2.28311e-5,
  'Planck Time': 6.67833e46
};

const convert = (value: number, from: string, to: string): number => {
  const fromInHours = value;
  const toFactor = hrToHr[to];
  if (!toFactor) return 0;
  return fromInHours / toFactor;
};

const toUnits = Object.keys(hrToHr).sort();

const HoursToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Hour to All Units Converter"
      lockedFromUnit="Hour"
      units={toUnits}
      convert={convert}
    />
  );
};

export default HoursToAllPage;