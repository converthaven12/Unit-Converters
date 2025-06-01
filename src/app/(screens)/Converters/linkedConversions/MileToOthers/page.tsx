'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const lengthToMeter: Record<string, number> = {
  // same dictionary
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMeters = value * lengthToMeter[from];
  const toFactor = lengthToMeter[to];
  if (!toFactor) return 0;
  return fromInMeters / toFactor;
};

const toUnits = Object.keys(lengthToMeter).filter(unit => unit !== 'Mile').sort();

const MileToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Mile to All Units Converter"
      lockedFromUnit="Mile"
      units={toUnits}
      convert={convert}
    />
  );
};

export default MileToAllPage;
