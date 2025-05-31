'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const thermalResistanceUnits: Record<string, number> = {
  "kelvin/watt [K/W]": 1,
  "degree Fahrenheit hour/Btu (IT)": 0.17611,
  "degree Fahrenheit hour/Btu (th)": 0.17611,
  "degree Fahrenheit second/Btu (IT)": 4.89e-5,
  "degree Fahrenheit second/Btu (th)": 4.89e-5,
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
