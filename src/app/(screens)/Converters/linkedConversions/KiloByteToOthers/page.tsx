'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const kbToKb: Record<string, number> = {
  'Bit': 8192,
  'Nibble': 2048,
  'Byte': 1024,
  'Character': 1024,
  'Word': 512,
  'MAPM-word': 256,
  'Quadruple-word': 128,
  'Block': 2,
  'Kilobit': 8,
  'Kilobyte': 1,
  'Kilobyte (10^3 Bytes)': 1.024,
  'Megabit': 0.0078125,
  'Megabyte': 0.000976562,
  'Megabyte (10^6 Bytes)': 0.001024,
  'Gigabit': 7.62939e-6,
  'Gigabyte': 9.53674e-7,
  'Gigabyte (10^9 Bytes)': 1.024e-6,
  'Terabit': 7.45058e-9,
  'Terabyte': 9.31323e-10,
  'Terabyte (10^12 Bytes)': 1.024e-9,
  'Petabit': 7.27596e-12,
  'Petabyte': 9.09495e-13,
  'Petabyte (10^15 Bytes)': 1.024e-12,
  'Exabit': 7.10543e-15,
  'Exabyte': 8.88178e-16,
  'Exabyte (10^18 Bytes)': 1.024e-15,
  'Floppy Disk (3.5", DD)': 0.000140512,
  'Floppy Disk (3.5", HD)': 7.02563e-5,
  'Floppy Disk (3.5", ED)': 3.51281e-5,
  'Floppy Disk (5.25", DD)': 0.000281025,
  'Floppy Disk (5.25", HD)': 7.02972e-5,
  'Zip 100': 1.0297e-5,
  'Zip 250': 4.1188e-6,
  'Jaz 1GB': 9.53674e-7,
  'Jaz 2GB': 4.76837e-7,
  'CD (74 Minute)': 1.50403e-6,
  'CD (80 Minute)': 1.39138e-6,
  'DVD (1 Layer, 1 Side)': 1.91371e-7,
  'DVD (2 Layer, 1 Side)': 9.5686e-8,
  'DVD (1 Layer, 2 Side)': 9.5686e-8,
  'DVD (2 Layer, 2 Side)': 4.7843e-8
};

const convert = (value: number, from: string, to: string): number => {
  const fromInKb = value;
  const toFactor = kbToKb[to];
  if (!toFactor) return 0;
  return fromInKb / toFactor;
};

const toUnits = Object.keys(kbToKb).sort();

const KbToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Kilobyte to All Units Converter"
      lockedFromUnit="Kilobyte"
      units={toUnits}
      convert={convert}
    />
  );
};

export default KbToAllPage;