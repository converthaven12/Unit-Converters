'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const lengthToMeter: Record<string, number> = {
  Millimeter: 0.001,
  // ... same dictionary as before
  // You can reuse the `lengthToMeter` object from your Kilometer converter
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMeters = value * lengthToMeter[from];
  const toFactor = lengthToMeter[to];
  if (!toFactor) return 0;
  return fromInMeters / toFactor;
};

const toUnits = Object.keys(lengthToMeter).filter(unit => unit !== 'Millimeter').sort();

const MillimeterToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Millimeter to All Units Converter"
      lockedFromUnit="Millimeter"
      units={toUnits}
      convert={convert}
    />
  );
};

export default MillimeterToAllPage;
