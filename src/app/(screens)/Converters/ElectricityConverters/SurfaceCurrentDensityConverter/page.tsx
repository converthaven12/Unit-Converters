'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const surfaceCurrentDensityUnits: Record<string, number> = {
  "Ampere per square meter (A/m²)": 1,
  "Milliampere per square centimeter (mA/cm²)": 10000,
  "Ampere per square centimeter (A/cm²)": 1000000,
  "Kiloampere per square meter (kA/m²)": 1000,
};

const SurfaceCurrentDensityConverterPage: React.FC = () => {
  const convertSurfaceCurrentDensity = (value: number, from: string, to: string): number => {
    const fromFactor = surfaceCurrentDensityUnits[from];
    const toFactor = surfaceCurrentDensityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Surface Current Density Converter"
      units={Object.keys(surfaceCurrentDensityUnits)}
      convert={convertSurfaceCurrentDensity}
    />
  );
};

export default SurfaceCurrentDensityConverterPage;
