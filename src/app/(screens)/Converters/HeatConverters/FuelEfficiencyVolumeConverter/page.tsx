'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const fuelEfficiencyVolumeUnits: Record<string, number> = {
  "Miles per gallon (mi/gal)": 1,
  "Kilometers per liter (km/L)": 0.425144,
  "Miles per liter (mi/L)": 2.35215,
  "Kilometers per gallon (km/gal)": 0.264172,
  "Meters per milliliter (m/mL)": 2641.72,
};

const FuelEfficiencyVolumeConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = fuelEfficiencyVolumeUnits[from];
    const toFactor = fuelEfficiencyVolumeUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    // Same logic as above — distance per volume, so invert ratio
    return value * (toFactor / fromFactor);
  };

  return (
    <ReusableConverter
      heading="Fuel Efficiency - Volume Converter"
      units={Object.keys(fuelEfficiencyVolumeUnits)}
      convert={convert}
    />
  );
};

export default FuelEfficiencyVolumeConverterPage;
