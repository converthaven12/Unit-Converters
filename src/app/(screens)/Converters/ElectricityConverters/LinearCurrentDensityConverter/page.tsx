'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const linearCurrentDensityUnits: Record<string, number> = {
  "Ampere per meter (A/m)": 1,
  "Milliampere per centimeter (mA/cm)": 10,
  "Ampere per centimeter (A/cm)": 100,
  "Kiloampere per meter (kA/m)": 1000,
};

const LinearCurrentDensityConverterPage: React.FC = () => {
  const convertLinearCurrentDensity = (value: number, from: string, to: string): number => {
    const fromFactor = linearCurrentDensityUnits[from];
    const toFactor = linearCurrentDensityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Linear Current Density Converter"
      units={Object.keys(linearCurrentDensityUnits)}
      convert={convertLinearCurrentDensity}
    />
  );
};

export default LinearCurrentDensityConverterPage;
