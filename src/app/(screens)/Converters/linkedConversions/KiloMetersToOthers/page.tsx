'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const kphToKph: Record<string, number> = {
  'Kilometer/hour': 1,
  'Mile/hour': 0.621371,
  'Break': 1e-15,
  'Meter/hour': 1000,
  'Meter/minute': 16.6667,
  'Meter/second': 0.277778,
  'Kilometer/minute': 0.0166667,
  'Kilometer/second': 0.000277778,
  'Centimeter/hour': 100000,
  'Centimeter/minute': 1666.67,
  'Centimeter/second': 27.7778,
  'Millimeter/hour': 1e6,
  'Millimeter/minute': 16666.7,
  'Millimeter/second': 277.778,
  'Foot/hour': 3280.84,
  'Foot/minute': 54.6807,
  'Foot/second': 0.911344,
  'Yard/hour': 1093.61,
  'Yard/minute': 18.2269,
  'Yard/second': 0.303781,
  'Mile/minute': 0.0103562,
  'Mile/second': 0.000172603,
  'Knot': 0.539957,
  'Knot (UK)': 0.539612,
  'Velocity Of Light In Vacuum': 9.26567e-10,
  'Cosmic Velocity - First': 3.51614e-5,
  'Cosmic Velocity - Second': 2.48016e-5,
  'Cosmic Velocity - Third': 1.48792e-5,
  'Earth\'s Velocity': 9.33236e-6,
  'Velocity Of Sound In Pure Water': 0.000187346,
  'Velocity Of Sound In Sea Water (20°C, 10 Meter Deep)': 0.000182508,
  'Mach (20°C, 1 Atm)': 0.000808433,
  'Mach (SI Standard)': 0.000941471
};

const convert = (value: number, from: string, to: string): number => {
  const fromInKph = value;
  const toFactor = kphToKph[to];
  if (!toFactor) return 0;
  return fromInKph / toFactor;
};

const toUnits = Object.keys(kphToKph).sort();

const KphToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Kilometers per Hour to All Units Converter"
      lockedFromUnit="Kilometer/hour"
      units={toUnits}
      convert={convert}
    />
  );
};

export default KphToAllPage;