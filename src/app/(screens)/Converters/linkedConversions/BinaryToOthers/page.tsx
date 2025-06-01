'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const convert = (value: number | string, from: string, to: string): number => {
  try {
    const stringValue = typeof value === 'string' ? value : value.toString();

    // Parse binary input to decimal number
    const decimalValue = parseInt(stringValue, 2);
    if (isNaN(decimalValue)) return NaN;

    if (to === 'Binary') return decimalValue; // input already binary, return decimal number
    if (to === 'Decimal') return decimalValue;
    if (to === 'Octal') return parseInt(decimalValue.toString(8), 10);
    if (to === 'Hexadecimal') return parseInt(decimalValue.toString(16), 10);

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

const BinaryToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Binary to All Units Converter"
      lockedFromUnit="Binary"
      units={toUnits}
      convert={convert}
      allowStringInput={true} // allow string input for binary
    />
  );
};

export default BinaryToAllPage;
