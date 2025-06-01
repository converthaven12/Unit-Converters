'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const minToMin: Record<string, number> = {
  'Minute': 1,
  'Second': 60,
  'Millisecond': 60000,
  'Hour': 0.0166667,
  'Day': 0.000694444,
  'Week': 9.92063e-5,
  'Month': 2.28159e-5,
  'Year': 1.90133e-6,
  'Decade': 1.90133e-7,
  'Century': 1.90133e-8,
  'Millennium': 1.90133e-9,
  'Break': 6e-21,
  'Microsecond': 6e7,
  'Nanosecond': 6e10,
  'Picosecond': 6e13,
  'Femtosecond': 6e16,
  'Attosecond': 6e19,
  'Shake': 6e9,
  'Month (synodic)': 2.35161e-5,
  'Year (Julian)': 1.90129e-6,
  'Year (leap)': 1.89739e-6,
  'Year (tropical)': 1.90133e-6,
  'Year (sidereal)': 1.90125e-6,
  'Day (sidereal)': 0.000696346,
  'Hour (sidereal)': 0.0167123,
  'Minute (sidereal)': 1.00274,
  'Second (sidereal)': 60.1644,
  'Fortnight': 4.96032e-5,
  'Septennial': 2.71798e-7,
  'Octennial': 2.37823e-7,
  'Novennial': 2.11399e-7,
  'Quindecennial': 1.26839e-7,
  'Quinquennial': 3.80518e-7,
  'Planck Time': 1.11306e45
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMinutes = value;
  const toFactor = minToMin[to];
  if (!toFactor) return 0;
  return fromInMinutes / toFactor;
};

const toUnits = Object.keys(minToMin).sort();

const MinutesToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Minute to All Units Converter"
      lockedFromUnit="Minute"
      units={toUnits}
      convert={convert}
    />
  );
};

export default MinutesToAllPage;