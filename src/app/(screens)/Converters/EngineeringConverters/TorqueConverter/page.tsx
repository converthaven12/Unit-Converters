'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const torqueUnits: Record<string, number> = {
  "Newton meter (N·m)": 1,                         // base unit
  "Newton centimeter (N·cm)": 0.01,                // 1 cm = 0.01 m
  "Newton millimeter (N·mm)": 0.001,               // 1 mm = 0.001 m
  "Kilonewton meter (kN·m)": 1000,                 // 1 kN = 1000 N

  "Dyne meter (dyn·m)": 1e-5,                       // 1 dyne = 1e-5 N
  "Dyne centimeter (dyn·cm)": 1e-7,                 // dyne * cm = 1e-5 N * 0.01 m = 1e-7 N·m
  "Dyne millimeter (dyn·mm)": 1e-8,                 // 1 dyne * 0.001 m

  "Kilogram-force meter (kgf·m)": 9.80665,          // 1 kgf = 9.80665 N
  "Kilogram-force centimeter (kgf·cm)": 0.0980665,  // 9.80665 * 0.01
  "Kilogram-force millimeter (kgf·mm)": 0.00980665, // 9.80665 * 0.001

  "Gram-force meter (gf·m)": 0.00980665,             // 1 gf = 0.00980665 N
  "Gram-force centimeter (gf·cm)": 9.80665e-5,       // 0.00980665 * 0.01
  "Gram-force millimeter (gf·mm)": 9.80665e-6,       // 0.00980665 * 0.001

  "Ounce-force foot (ozf·ft)": 0.0847373,           // 1 ozf = 0.2780139 N; foot = 0.3048 m; 0.2780139 * 0.3048 = 0.0847373 N·m
  "Ounce-force inch (ozf·in)": 0.00706144,          // 0.0847373 / 12

  "Pound-force foot (lbf·ft)": 1.35582,             // standard conversion
  "Pound-force inch (lbf·in)": 0.1129848,           // 1.35582 / 12
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
