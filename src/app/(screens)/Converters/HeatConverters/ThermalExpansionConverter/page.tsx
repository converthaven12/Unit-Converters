'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const thermalExpansionUnits: Record<string, number> = {
  "length/length/kelvin [1/K]": 1,
  "length/length/degree Celsius": 1,
  "length/length/degree Fahrenheit": 5 / 9,
  "length/length/degree Rankine": 5 / 9,
  "length/length/degree Reaumur": 1.25,
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
