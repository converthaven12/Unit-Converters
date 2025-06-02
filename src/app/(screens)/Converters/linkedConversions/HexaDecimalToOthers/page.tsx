'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const convert = (value: number | string, from: string, to: string): number => {
  try {
    // value could be string (hex input) or number (not typical here)
    const stringValue = typeof value === 'string' ? value : value.toString();

    const decimalValue = parseInt(stringValue, 16);
    if (isNaN(decimalValue)) return NaN;

    if (to === 'Binary') return parseInt(decimalValue.toString(2), 10);
    if (to === 'Decimal') return decimalValue;
    if (to === 'Octal') return parseInt(decimalValue.toString(8), 10);
    if (to === 'Hexadecimal') return decimalValue; // input is already hex, return decimal equivalent

    const baseMatch = to.match(/Base-(\d+)/);
    if (baseMatch) {
      const base = parseInt(baseMatch[1]);
      if (base >= 2 && base <= 36) {
        return parseInt(decimalValue.toString(base), 10);
      }
    }

    return NaN;
  } catch {
    return NaN;
  }
};

const toUnits = [
  'Binary',
  'Decimal',
  'Octal',
  'Hexadecimal',
  ...Array.from({ length: 35 }, (_, i) => `Base-${i + 2}`),
].sort();

const HexToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Hexadecimal to All Units Converter"
      lockedFromUnit="Hexadecimal"
      units={toUnits}
      convert={convert}
      allowStringInput={true} // enable string input here
    />
  );
};

export default HexToAllPage;
