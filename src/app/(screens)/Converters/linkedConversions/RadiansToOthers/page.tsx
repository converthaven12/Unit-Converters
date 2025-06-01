'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const radToRad: Record<string, number> = {
  'Radian': 1,
  'Degree': 57.2958,
  'Grad': 63.662,
  'Minute': 3437.75,
  'Second': 206265,
  'Break': 1e-15,
  'Gon': 63.662,
  'Sign': 1.90986,
  'Mil': 1018.59,
  'Revolution': 0.159155,
  'Circle': 0.159155,
  'Turn': 0.159155,
  'Quadrant': 0.63662,
  'Right Angle': 0.63662,
  'Sextant': 0.95493
};

const convert = (value: number, from: string, to: string): number => {
  const fromInRad = value;
  const toFactor = radToRad[to];
  if (!toFactor) return 0;
  return fromInRad / toFactor;
};

const toUnits = Object.keys(radToRad).sort();

const RadToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Radians to All Units Converter"
      lockedFromUnit="Radian"
      units={toUnits}
      convert={convert}
    />
  );
};

export default RadToAllPage;