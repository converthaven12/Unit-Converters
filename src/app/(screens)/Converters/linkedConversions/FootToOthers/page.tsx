'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const lengthToMeter: Record<string, number> = {
  Foot: 0.3048,
  // ... same dictionary reused
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMeters = value * lengthToMeter[from];
  const toFactor = lengthToMeter[to];
  if (!toFactor) return 0;
  return fromInMeters / toFactor;
};

const toUnits = Object.keys(lengthToMeter).filter(unit => unit !== 'Foot').sort();

const FootToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Foot to All Units Converter"
      lockedFromUnit="Foot"
      units={toUnits}
      convert={convert}
    />
  );
};

export default FootToAllPage;
