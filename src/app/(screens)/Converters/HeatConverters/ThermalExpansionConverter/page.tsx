'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const thermalExpansionUnits: Record<string, number> = {
  "1/K (per kelvin)": 1,
  "1/°C (per celsius)": 1,
  "1/°F (per fahrenheit)": 1.8,
  "1/°R (per rankine)": 1.8,
  "ppm/K (parts per million per kelvin)": 1e-6,
  "ppm/°C": 1e-6,
};

const ThermalExpansionConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = thermalExpansionUnits[from];
    const toFactor = thermalExpansionUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return value * (fromFactor / toFactor);
  };

  return (
    <ReusableConverter
      heading="Thermal Expansion Converter"
      units={Object.keys(thermalExpansionUnits)}
      convert={convert}
    />
  );
};

export default ThermalExpansionConverterPage;
