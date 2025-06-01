'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const gbToGb: Record<string, number> = {
  'Bit': 8589934592,
  'Nibble': 2147483648,
  'Byte': 1073741824,
  'Character': 1073741824,
  'Word': 536870912,
  'MAPM-word': 268435456,
  'Quadruple-word': 134217728,
  'Block': 2097152,
  'Kilobit': 8388608,
  'Kilobyte': 1048576,
  'Megabyte': 1024,
  'Gigabyte': 1,
  'Gigabyte (10^9 Bytes)': 1.07374,
  'Terabit': 0.0078125,
  'Terabyte': 0.000976562,
  'Terabyte (10^12 Bytes)': 0.00107374,
  'Petabit': 7.62939e-6,
  'Petabyte': 9.53674e-7,
  'Petabyte (10^15 Bytes)': 1.07374e-6,
  'Exabit': 7.45058e-9,
  'Exabyte': 9.31323e-10,
  'Exabyte (10^18 Bytes)': 1.07374e-9,
  'Floppy Disk (3.5", DD)': 1473.24,
  'Floppy Disk (3.5", HD)': 736.618,
  'Floppy Disk (3.5", ED)': 368.309,
  'Floppy Disk (5.25", DD)': 2946.48,
  'Floppy Disk (5.25", HD)': 736.62,
  'Zip 100': 10.7989,
  'Zip 250': 4.31955,
  'Jaz 1GB': 1,
  'Jaz 2GB': 0.5,
  'CD (74 Minute)': 1.57708,
  'CD (80 Minute)': 1.45898,
  'DVD (1 Layer, 1 Side)': 0.200667,
  'DVD (2 Layer, 1 Side)': 0.100334,
  'DVD (1 Layer, 2 Side)': 0.100334,
  'DVD (2 Layer, 2 Side)': 0.0501669
};

const convert = (value: number, from: string, to: string): number => {
  const fromInGb = value;
  const toFactor = gbToGb[to];
  if (!toFactor) return 0;
  return fromInGb / toFactor;
};

const toUnits = Object.keys(gbToGb).sort();

const GbToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Gigabyte to All Units Converter"
      lockedFromUnit="Gigabyte"
      units={toUnits}
      convert={convert}
    />
  );
};

export default GbToAllPage;