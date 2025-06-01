'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const convert = (value: number, from: string, to: string): number => {
  try {
    // Convert the number to a string first
    const stringValue = value.toString();
    
    // First convert the input to decimal
    const decimalValue = parseInt(stringValue, 10);
    if (isNaN(decimalValue)) return 0;

    // Then convert to the target base
    if (to === 'Binary') return parseInt(decimalValue.toString(2), 10);
    if (to === 'Decimal') return decimalValue;
    if (to === 'Octal') return parseInt(decimalValue.toString(8), 10);
    if (to === 'Hexadecimal') return parseInt(decimalValue.toString(16), 10);
    if (to === 'Break') return 0;
    
    const baseMatch = to.match(/Base-(\d+)/);
    if (baseMatch) {
      const base = parseInt(baseMatch[1]);
      if (base >= 2 && base <= 36) {
        return parseInt(decimalValue.toString(base), 10);
      }
    }
    
    return 0;
  } catch (e) {
    return 0;
  }
};

const toUnits = [
  'Binary', 'Decimal', 'Octal', 'Hexadecimal', 'Break',
  ...Array.from({length: 35}, (_, i) => `Base-${i + 2}`)
].sort();

const DecimalToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Decimal to All Units Converter"
      lockedFromUnit="Decimal"
      units={toUnits}
      convert={convert}
    />
  );
};

export default DecimalToAllPage;