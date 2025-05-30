'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const linearChargeDensityUnits: Record<string, number> = {
  "Coulomb per meter (C/m)": 1,
  "Coulomb per centimeter (C/cm)": 100,
  "Statcoulomb per centimeter (statC/cm)": 3.33564e-8,
  "Abcoulomb per centimeter (abC/cm)": 1000,
  "Microcoulomb per meter (μC/m)": 1e-6,
};

const LinearChargeDensityConverterPage: React.FC = () => {
  const convertLinearChargeDensity = (value: number, from: string, to: string): number => {
    const fromFactor = linearChargeDensityUnits[from];
    const toFactor = linearChargeDensityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Linear Charge Density Converter"
      units={Object.keys(linearChargeDensityUnits)}
      convert={convertLinearChargeDensity}
    />
  );
};

export default LinearChargeDensityConverterPage;
