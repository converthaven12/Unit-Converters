'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const linearChargeDensityUnits: Record<string, number> = {
  "coulomb/meter [C/m]": 1,
  "coulomb/centimeter [C/cm]": 100,
  "coulomb/inch [C/in]": 39.3701,
  "abcoulomb/meter [abC/m]": 10,
  "abcoulomb/centimeter": 1000,
  "abcoulomb/inch [abC/in]": 393.701,
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
