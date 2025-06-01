'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const lengthToMeter: Record<string, number> = {
  // same dictionary as in your Kilometer page
  // include entire dictionary...
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMeters = value * lengthToMeter[from];
  const toFactor = lengthToMeter[to];
  if (!toFactor) return 0;
  return fromInMeters / toFactor;
};

const toUnits = Object.keys(lengthToMeter).filter(unit => unit !== 'Yard').sort();

const YardToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Yard to All Units Converter"
      lockedFromUnit="Yard"
      units={toUnits}
      convert={convert}
    />
  );
};

export default YardToAllPage;
