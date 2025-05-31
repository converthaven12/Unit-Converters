'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const surfaceChargeDensityUnits: Record<string, number> = {
  "coulomb/square meter": 1,
  "coulomb/square centimeter": 1e4,
  "coulomb/square inch [C/in^2]": 1550.0031,
  "abcoulomb/square meter": 10,
  "abcoulomb/square centimeter": 1e5,
  "abcoulomb/square inch": 15500.031,
};

const SurfaceChargeDensityConverterPage: React.FC = () => {
  const convertSurfaceChargeDensity = (value: number, from: string, to: string): number => {
    const fromFactor = surfaceChargeDensityUnits[from];
    const toFactor = surfaceChargeDensityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Surface Charge Density Converter"
      units={Object.keys(surfaceChargeDensityUnits)}
      convert={convertSurfaceChargeDensity}
    />
  );
};

export default SurfaceChargeDensityConverterPage;
