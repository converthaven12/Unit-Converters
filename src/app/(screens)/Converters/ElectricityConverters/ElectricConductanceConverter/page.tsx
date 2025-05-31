'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricConductanceUnits: Record<string, number> = {
  "siemens [S]": 1,
  "megasiemens [MS]": 1e6,
  "kilosiemens [kS]": 1e3,
  "millisiemens [mS]": 1e-3,
  "microsiemens [µS]": 1e-6,
  "ampere/volt [A/V]": 1,
  "mho": 1,
  "gemmho": 1e9,
  "micromho": 1e-6,
  "abmho": 1e9,
  "statmho": 8.98755e11,
  "Quantized Hall conductance": 3.874e-5,
};


const ElectricConductanceConverterPage: React.FC = () => {
  const convertElectricConductance = (value: number, from: string, to: string): number => {
    const fromFactor = electricConductanceUnits[from];
    const toFactor = electricConductanceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Electric Conductance Converter"
      units={Object.keys(electricConductanceUnits)}
      convert={convertElectricConductance}
    />
  );
};

export default ElectricConductanceConverterPage;
