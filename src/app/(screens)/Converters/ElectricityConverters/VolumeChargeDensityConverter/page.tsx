'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const volumeChargeDensityUnits: Record<string, number> = {
  "coulomb/cubic meter [C/m^3]": 1,
  "coulomb/cubic centimeter": 1e6,
  "coulomb/cubic inch [C/in^3]": 61023.7441,
  "abcoulomb/cubic meter": 10,
  "abcoulomb/cubic centimeter": 1e7,
  "abcoulomb/cubic inch": 610237.441,
};


const VolumeChargeDensityConverterPage: React.FC = () => {
  const convertVolumeChargeDensity = (value: number, from: string, to: string): number => {
    const fromFactor = volumeChargeDensityUnits[from];
    const toFactor = volumeChargeDensityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Volume Charge Density Converter"
      units={Object.keys(volumeChargeDensityUnits)}
      convert={convertVolumeChargeDensity}
    />
  );
};

export default VolumeChargeDensityConverterPage;
