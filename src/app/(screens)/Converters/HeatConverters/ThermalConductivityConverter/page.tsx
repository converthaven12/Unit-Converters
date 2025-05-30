'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const thermalConductivityUnits: Record<string, number> = {
  "Watt per meter kelvin (W/(m·K))": 1,
  "Watt per centimeter kelvin (W/(cm·K))": 100,
  "Kilowatt per meter kelvin (kW/(m·K))": 1000,
  "BTU per foot hour °F (BTU/(ft·hr·°F))": 1.730735,
  "Calorie per centimeter second °C (cal/(cm·s·°C))": 41.843,
};

const ThermalConductivityConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = thermalConductivityUnits[from];
    const toFactor = thermalConductivityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return value * (fromFactor / toFactor);
  };

  return (
    <ReusableConverter
      heading="Thermal Conductivity Converter"
      units={Object.keys(thermalConductivityUnits)}
      convert={convert}
    />
  );
};

export default ThermalConductivityConverterPage;
