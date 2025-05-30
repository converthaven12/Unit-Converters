'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const thermalResistanceUnits: Record<string, number> = {
  "Kelvin per watt (K/W)": 1,
  "Celsius per watt (°C/W)": 1,
  "Kelvin per kilowatt (K/kW)": 0.001,
  "Celsius per kilowatt (°C/kW)": 0.001,
};

const ThermalResistanceConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = thermalResistanceUnits[from];
    const toFactor = thermalResistanceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return value * (fromFactor / toFactor);
  };

  return (
    <ReusableConverter
      heading="Thermal Resistance Converter"
      units={Object.keys(thermalResistanceUnits)}
      convert={convert}
    />
  );
};

export default ThermalResistanceConverterPage;
