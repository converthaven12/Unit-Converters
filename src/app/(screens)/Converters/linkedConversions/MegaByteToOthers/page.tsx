'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const mbToMb: Record<string, number> = {
  'Bit': 8388608,
  'Nibble': 2097152,
  'Byte': 1048576,
  'Character': 1048576,
  'Word': 524288,
  'MAPM-word': 262144,
  'Quadruple-word': 131072,
  'Block': 2048,
  'Kilobit': 8192,
  'Kilobyte': 1024,
  'Megabyte': 1,
  'Megabyte (10^6 Bytes)': 1.04858,
  'Gigabit': 0.0078125,
  'Gigabyte': 0.000976562,
  'Gigabyte (10^9 Bytes)': 0.00104858,
  'Terabit': 7.62939e-6,
  'Terabyte': 9.53674e-7,
  'Terabyte (10^12 Bytes)': 1.04858e-6,
  'Petabit': 7.45058e-9,
  'Petabyte': 9.31323e-10,
  'Petabyte (10^15 Bytes)': 1.04858e-9,
  'Exabit': 7.27596e-12,
  'Exabyte': 9.09495e-13,
  'Exabyte (10^18 Bytes)': 1.04858e-12,
  'Floppy Disk (3.5", DD)': 0.143884,
  'Floppy Disk (3.5", HD)': 0.0719424,
  'Floppy Disk (3.5", ED)': 0.0359712,
  'Floppy Disk (5.25", DD)': 0.287769,
  'Floppy Disk (5.25", HD)': 0.0719923,
  'Zip 100': 0.0105457,
  'Zip 250': 0.00421827,
  'Jaz 1GB': 0.000976562,
  'Jaz 2GB': 0.000488281,
  'CD (74 Minute)': 0.00154013,
  'CD (80 Minute)': 0.00142477,
  'DVD (1 Layer, 1 Side)': 0.000195963,
  'DVD (2 Layer, 1 Side)': 9.79815e-5,
  'DVD (1 Layer, 2 Side)': 9.79815e-5,
  'DVD (2 Layer, 2 Side)': 4.89908e-5
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMb = value;
  const toFactor = mbToMb[to];
  if (!toFactor) return 0;
  return fromInMb / toFactor;
};

const toUnits = Object.keys(mbToMb).sort();

const MbToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Megabyte to All Units Converter"
      lockedFromUnit="Megabyte"
      units={toUnits}
      convert={convert}
    />
  );
};

export default MbToAllPage;