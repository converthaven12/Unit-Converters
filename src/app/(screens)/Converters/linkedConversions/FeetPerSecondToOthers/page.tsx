'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const fpsToFps: Record<string, number> = {
  'Foot/second': 1,
  'Meter/second': 0.3048,
  'Kilometer/hour': 1.09728,
  'Break': 1e-15,
  'Meter/hour': 1097.28,
  'Meter/minute': 18.288,
  'Kilometer/minute': 0.018288,
  'Kilometer/second': 0.0003048,
  'Centimeter/hour': 109728,
  'Centimeter/minute': 1828.8,
  'Centimeter/second': 30.48,
  'Millimeter/hour': 1.09728e6,
  'Millimeter/minute': 18288,
  'Millimeter/second': 304.8,
  'Foot/hour': 3600,
  'Foot/minute': 60,
  'Yard/hour': 1200,
  'Yard/minute': 20,
  'Yard/second': 0.333333,
  'Mile/hour': 0.681818,
  'Mile/minute': 0.0113636,
  'Mile/second': 0.000189394,
  'Knot': 0.592484,
  'Knot (UK)': 0.592105,
  'Velocity Of Light In Vacuum': 1.0167e-9,
  'Cosmic Velocity - First': 3.85823e-5,
  'Cosmic Velocity - Second': 2.72155e-5,
  'Cosmic Velocity - Third': 1.63293e-5,
  'Earth\'s Velocity': 1.02402e-5,
  'Velocity Of Sound In Pure Water': 0.000205571,
  'Velocity Of Sound In Sea Water (20°C, 10 Meter Deep)': 0.000200262,
  'Mach (20°C, 1 Atm)': 0.000887078,
  'Mach (SI Standard)': 0.00103306
};

const convert = (value: number, from: string, to: string): number => {
  const fromInFps = value;
  const toFactor = fpsToFps[to];
  if (!toFactor) return 0;
  return fromInFps / toFactor;
};

const toUnits = Object.keys(fpsToFps).sort();

const FpsToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Feet per Second to All Units Converter"
      lockedFromUnit="Foot/second"
      units={toUnits}
      convert={convert}
    />
  );
};

export default FpsToAllPage;