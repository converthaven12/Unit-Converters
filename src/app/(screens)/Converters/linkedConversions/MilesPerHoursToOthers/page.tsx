'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const mphToMph: Record<string, number> = {
  'Mile/hour': 1,
  'Meter/second': 0.44704,
  'Break': 1e-15,
  'Meter/hour': 1609.344,
  'Meter/minute': 26.8224,
  'Kilometer/minute': 0.0268224,
  'Kilometer/second': 0.00044704,
  'Kilometer/hour': 1.609344,
  'Centimeter/hour': 160934.4,
  'Centimeter/minute': 2682.24,
  'Centimeter/second': 44.704,
  'Millimeter/hour': 1609344,
  'Millimeter/minute': 26822.4,
  'Millimeter/second': 447.04,
  'Foot/hour': 5280,
  'Foot/minute': 88,
  'Foot/second': 1.46667,
  'Yard/hour': 1760,
  'Yard/minute': 29.3333,
  'Yard/second': 0.488889,
  'Mile/minute': 0.0166667,
  'Mile/second': 0.000277778,
  'Knot': 0.868976,
  'Knot (UK)': 0.868421,
  'Velocity Of Light In Vacuum': 1.49116e-9,
  'Cosmic Velocity - First': 5.65873e-5,
  'Cosmic Velocity - Second': 3.99195e-5,
  'Cosmic Velocity - Third': 2.39496e-5,
  'Earth\'s Velocity': 1.50192e-5,
  'Velocity Of Sound In Pure Water': 0.0003015,
  'Velocity Of Sound In Sea Water (20°C, 10 Meter Deep)': 0.000293718,
  'Mach (20°C, 1 Atm)': 0.00130105,
  'Mach (SI Standard)': 0.00151515
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMph = value;
  const toFactor = mphToMph[to];
  if (!toFactor) return 0;
  return fromInMph / toFactor;
};

const toUnits = Object.keys(mphToMph).sort();

const MphToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Miles per Hour to All Units Converter"
      lockedFromUnit="Mile/hour"
      units={toUnits}
      convert={convert}
    />
  );
};

export default MphToAllPage;