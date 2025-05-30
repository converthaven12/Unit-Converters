'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const specificHeatCapacityUnits: Record<string, number> = {
  "Joule per kilogram kelvin (J/(kg·K))": 1,
  "Calorie per gram degree Celsius (cal/(g·°C))": 4184,
  "British thermal unit per pound degree Fahrenheit (BTU/(lb·°F))": 4186.8,
  "Kilojoule per kilogram kelvin (kJ/(kg·K))": 1000,
};

const SpecificHeatCapacityConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = specificHeatCapacityUnits[from];
    const toFactor = specificHeatCapacityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return value * (fromFactor / toFactor);
  };

  return (
    <ReusableConverter
      heading="Specific Heat Capacity Converter"
      units={Object.keys(specificHeatCapacityUnits)}
      convert={convert}
    />
  );
};

export default SpecificHeatCapacityConverterPage;
