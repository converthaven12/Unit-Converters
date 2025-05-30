'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const dataStorageUnits: Record<string, number> = {
  Bit: 1,
  Byte: 8,
  Kilobyte: 8 * 1024,
  Megabyte: 8 * 1024 ** 2,
  Gigabyte: 8 * 1024 ** 3,
  Terabyte: 8 * 1024 ** 4,
  Petabyte: 8 * 1024 ** 5,
  Exabyte: 8 * 1024 ** 6,
  Zettabyte: 8 * 1024 ** 7,
  Yottabyte: 8 * 1024 ** 8,
  Kibibyte: 8 * 1024,
  Mebibyte: 8 * 1024 ** 2,
  Gibibyte: 8 * 1024 ** 3,
  Tebibyte: 8 * 1024 ** 4,
  Pebibyte: 8 * 1024 ** 5,
  Exbibyte: 8 * 1024 ** 6,
  Zebibyte: 8 * 1024 ** 7,
  Yobibyte: 8 * 1024 ** 8,
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
