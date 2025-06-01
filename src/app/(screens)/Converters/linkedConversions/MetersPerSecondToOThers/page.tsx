'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const mpsToMps: Record<string, number> = {
  'Meter/second': 1,
  'Mile/hour': 2.23694,
  'Break': 1e-15,
  'Meter/hour': 3600,
  'Meter/minute': 60,
  'Kilometer/hour': 3.6,
  'Kilometer/minute': 0.06,
  'Kilometer/second': 0.001,
  'Centimeter/hour': 360000,
  'Centimeter/minute': 6000,
  'Centimeter/second': 100,
  'Millimeter/hour': 3.6e6,
  'Millimeter/minute': 60000,
  'Millimeter/second': 1000,
  'Foot/hour': 11811,
  'Foot/minute': 196.85,
  'Foot/second': 3.28084,
  'Yard/hour': 3937.01,
  'Yard/minute': 65.6168,
  'Yard/second': 1.09361,
  'Mile/minute': 0.0372823,
  'Mile/second': 0.000621371,
  'Knot': 1.94384,
  'Knot (UK)': 1.9426,
  'Velocity Of Light In Vacuum': 3.33564e-9,
  'Cosmic Velocity - First': 0.000126582,
  'Cosmic Velocity - Second': 8.92857e-5,
  'Cosmic Velocity - Third': 5.35714e-5,
  'Earth\'s Velocity': 3.35965e-5,
  'Velocity Of Sound In Pure Water': 0.000674445,
  'Velocity Of Sound In Sea Water (20°C, 10 Meter Deep)': 0.00065703,
  'Mach (20°C, 1 Atm)': 0.00291036,
  'Mach (SI Standard)': 0.0033893
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMps = value;
  const toFactor = mpsToMps[to];
  if (!toFactor) return 0;
  return fromInMps / toFactor;
};

const toUnits = Object.keys(mpsToMps).sort();

const MpsToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Meters per Second to All Units Converter"
      lockedFromUnit="Meter/second"
      units={toUnits}
      convert={convert}
    />
  );
};

export default MpsToAllPage;