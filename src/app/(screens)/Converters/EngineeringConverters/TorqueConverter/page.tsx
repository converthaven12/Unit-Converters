'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const torqueUnits: Record<string, number> = {
  "Newton meter (N·m)": 1,
  "Pound foot (lb·ft)": 1.35582,
  "Pound inch (lb·in)": 0.1129848,
  "Ounce inch (oz·in)": 0.00706155,
  "Dyne centimeter (dyne·cm)": 1e-7,
  "Kilogram force meter (kgf·m)": 9.80665,
  "Kilogram force centimeter (kgf·cm)": 0.0980665,
};

const TorqueConverterPage: React.FC = () => {
  const convertTorque = (value: number, from: string, to: string): number => {
    const fromFactor = torqueUnits[from];
    const toFactor = torqueUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Torque Converter"
      units={Object.keys(torqueUnits)}
      convert={convertTorque}
    />
  );
};

export default TorqueConverterPage;
