'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const degToDeg: Record<string, number> = {
  'Degree': 1,
  'Radian': 0.0174533,
  'Grad': 1.11111,
  'Minute': 60,
  'Second': 3600,
  'Break': 1e-15,
  'Gon': 1.11111,
  'Sign': 0.0333333,
  'Mil': 17.7778,
  'Revolution': 0.00277778,
  'Circle': 0.00277778,
  'Turn': 0.00277778,
  'Quadrant': 0.0111111,
  'Right Angle': 0.0111111,
  'Sextant': 0.0166667
};

const convert = (value: number, from: string, to: string): number => {
  const fromInDeg = value;
  const toFactor = degToDeg[to];
  if (!toFactor) return 0;
  return fromInDeg / toFactor;
};

const toUnits = Object.keys(degToDeg).sort();

const DegToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Degrees to All Units Converter"
      lockedFromUnit="Degree"
      units={toUnits}
      convert={convert}
    />
  );
};

export default DegToAllPage;