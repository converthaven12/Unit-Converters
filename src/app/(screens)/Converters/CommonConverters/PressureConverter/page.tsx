'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const pressureUnits: Record<string, number> = {
  Pascal: 1,
  "Kilopascal": 1e3,
  "Megapascal": 1e6,
  "Bar": 1e5,
  "Millibar": 100,
  "Atmosphere": 101325,
  "Torr": 133.322,
  "Pound per square inch (psi)": 6894.76,
  "Kilogram-force per square centimeter": 98066.5,
  "Technical atmosphere": 98066.5,
  "Inch of mercury": 3386.39,
  "Inch of water": 249.089,
};

const PressureConverterPage: React.FC = () => {
  const convertPressure = (value: number, from: string, to: string): number => {
    const fromFactor = pressureUnits[from];
    const toFactor = pressureUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Pressure Converter"
      units={Object.keys(pressureUnits)}
      convert={convertPressure}
    />
  );
};

export default PressureConverterPage;
