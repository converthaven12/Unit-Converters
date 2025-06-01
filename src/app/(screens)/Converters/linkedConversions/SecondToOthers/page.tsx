'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const sToS: Record<string, number> = {
  'Second': 1,
  'Millisecond': 1000,
  'Minute': 0.0166667,
  'Hour': 0.000277778,
  'Day': 1.15741e-5,
  'Week': 1.65344e-6,
  'Month': 3.80265e-7,
  'Year': 3.16888e-8,
  'Decade': 3.16888e-9,
  'Century': 3.16888e-10,
  'Millennium': 3.16888e-11,
  'Break': 1e-22,
  'Microsecond': 1e6,
  'Nanosecond': 1e9,
  'Picosecond': 1e12,
  'Femtosecond': 1e15,
  'Attosecond': 1e18,
  'Shake': 1e8,
  'Month (synodic)': 3.91935e-7,
  'Year (Julian)': 3.16881e-8,
  'Year (leap)': 3.16232e-8,
  'Year (tropical)': 3.16888e-8,
  'Year (sidereal)': 3.16875e-8,
  'Day (sidereal)': 1.16058e-5,
  'Hour (sidereal)': 0.000277798,
  'Minute (sidereal)': 0.0166678,
  'Second (sidereal)': 1.00274,
  'Fortnight': 8.2672e-7,
  'Septennial': 4.52997e-9,
  'Octennial': 3.96372e-9,
  'Novennial': 3.52331e-9,
  'Quindecennial': 2.11399e-9,
  'Quinquennial': 6.34196e-9,
  'Planck Time': 1.85509e43
};

const convert = (value: number, from: string, to: string): number => {
  const fromInSeconds = value;
  const toFactor = sToS[to];
  if (!toFactor) return 0;
  return fromInSeconds / toFactor;
};

const toUnits = Object.keys(sToS).sort();

const SecondsToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Second to All Units Converter"
      lockedFromUnit="Second"
      units={toUnits}
      convert={convert}
    />
  );
};

export default SecondsToAllPage;