'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const dataStorageUnits: Record<string, number> = {
  'bit [b]': 1,
  'nibble': 4,
  'byte [B]': 8,
  'character': 8, // usually equals 1 byte
  'word': 16,
  'MAPM-word': 32,
  'quadruple-word': 64,
  'block': 4096 * 8, // 4 KB block (typical)
  
  'kilobit [kb]': 1000,
  'kilobyte [kB]': 1000 * 8,
  'kilobyte (10^3 bytes)': 1000 * 8,

  'megabit [Mb]': 1000 ** 2,
  'megabyte [MB]': 1000 ** 2 * 8,
  'megabyte (10^6 bytes)': 1000 ** 2 * 8,

  'gigabit [Gb]': 1000 ** 3,
  'gigabyte [GB]': 1000 ** 3 * 8,
  'gigabyte (10^9 bytes)': 1000 ** 3 * 8,

  'terabit [Tb]': 1000 ** 4,
  'terabyte [TB]': 1000 ** 4 * 8,
  'terabyte (10^12 bytes)': 1000 ** 4 * 8,

  'petabit [Pb]': 1000 ** 5,
  'petabyte [PB]': 1000 ** 5 * 8,
  'petabyte (10^15 bytes)': 1000 ** 5 * 8,

  'exabit [Eb]': 1000 ** 6,
  'exabyte [EB]': 1000 ** 6 * 8,
  'exabyte (10^18 bytes)': 1000 ** 6 * 8,

  // Floppy Disks
  'floppy disk (3.5", DD)': 720 * 1024 * 8,
  'floppy disk (3.5", HD)': 1.44 * 1024 * 1024 * 8,
  'floppy disk (3.5", ED)': 2.88 * 1024 * 1024 * 8,
  'floppy disk (5.25", DD)': 360 * 1024 * 8,
  'floppy disk (5.25", HD)': 1.2 * 1024 * 1024 * 8,

  // Zip / Jaz
  'Zip 100': 100 * 1024 * 1024 * 8,
  'Zip 250': 250 * 1024 * 1024 * 8,
  'Jaz 1GB': 1 * 1024 ** 3 * 8,
  'Jaz 2GB': 2 * 1024 ** 3 * 8,

  // Optical Discs
  'CD (74 minute)': 650 * 1024 * 1024 * 8,
  'CD (80 minute)': 700 * 1024 * 1024 * 8,
  'DVD (1 layer, 1 side)': 4.7 * 1000 ** 3 * 8,
  'DVD (2 layer, 1 side)': 8.5 * 1000 ** 3 * 8,
  'DVD (1 layer, 2 side)': 9.4 * 1000 ** 3 * 8,
  'DVD (2 layer, 2 side)': 17.1 * 1000 ** 3 * 8,
};


const DataStorageConverterPage: React.FC = () => {
  const convertDataStorage = (value: number, from: string, to: string): number => {
    const fromFactor = dataStorageUnits[from];
    const toFactor = dataStorageUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Data Storage Converter"
      units={Object.keys(dataStorageUnits)}
      convert={convertDataStorage}
    />
  );
};

export default DataStorageConverterPage;
