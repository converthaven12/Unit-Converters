'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const densityUnits: Record<string, number> = {
  "Kilogram per cubic meter (kg/m³)": 1,
  "Gram per cubic centimeter (g/cm³)": 1000,
  "Gram per liter (g/L)": 1,
  "Pound per cubic foot (lb/ft³)": 16.0185,
  "Pound per cubic inch (lb/in³)": 27679.9,
  "Ounce per cubic inch (oz/in³)": 1731.99,
  "Slug per cubic foot (slug/ft³)": 515.3788,
  "Ton per cubic meter (t/m³)": 1000,
};

const DensityConverterPage: React.FC = () => {
  const convertDensity = (value: number, from: string, to: string): number => {
    const fromFactor = densityUnits[from];
    const toFactor = densityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Density Converter"
      units={Object.keys(densityUnits)}
      convert={convertDensity}
    />
  );
};

export default DensityConverterPage;
