'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const surfaceChargeDensityUnits: Record<string, number> = {
  "Coulomb per square meter (C/m²)": 1,
  "Coulomb per square centimeter (C/cm²)": 10000,
  "Statcoulomb per square centimeter (statC/cm²)": 3.33564e-6,
  "Abcoulomb per square centimeter (abC/cm²)": 100000,
  "Microcoulomb per square meter (μC/m²)": 1e-6,
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
