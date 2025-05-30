'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const volumeChargeDensityUnits: Record<string, number> = {
  "Coulomb per cubic meter (C/m³)": 1,
  "Coulomb per cubic centimeter (C/cm³)": 1e6,
  "Statcoulomb per cubic centimeter (statC/cm³)": 3.33564e-4,
  "Abcoulomb per cubic centimeter (abC/cm³)": 1e7,
  "Microcoulomb per cubic meter (μC/m³)": 1e-6,
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
