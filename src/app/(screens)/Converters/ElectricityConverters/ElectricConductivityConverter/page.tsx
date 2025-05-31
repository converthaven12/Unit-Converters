'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricConductivityUnits: Record<string, number> = {
  "siemens/meter [S/m]": 1,
  "picosiemens/meter [pS/m]": 1e-12,
  "mho/meter [mho/m]": 1,
  "mho/centimeter [mho/cm]": 100,
  "abmho/meter [abmho/m]": 1e9,
  "abmho/centimeter": 1e11,
  "statmho/meter [stmho/m]": 8.98755e11,
  "statmho/centimeter": 8.98755e13,
};


const ElectricConductivityConverterPage: React.FC = () => {
  const convertElectricConductivity = (value: number, from: string, to: string): number => {
    const fromFactor = electricConductivityUnits[from];
    const toFactor = electricConductivityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Electric Conductivity Converter"
      units={Object.keys(electricConductivityUnits)}
      convert={convertElectricConductivity}
    />
  );
};

export default ElectricConductivityConverterPage;
