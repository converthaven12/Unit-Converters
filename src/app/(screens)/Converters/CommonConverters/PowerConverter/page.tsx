'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const powerUnits: Record<string, number> = {
  Watt: 1,
  Kilowatt: 1e3,
  Megawatt: 1e6,
  Gigawatt: 1e9,
  Horsepower: 745.7,
  "Foot-pound per minute": 0.022596,
  "British Thermal Unit per hour": 0.293071,
  "Calorie per second": 4.184,
  "Erg per second": 1e-7,
  "Kilocalorie per hour": 1.163,
};

const PowerConverterPage: React.FC = () => {
  const convertPower = (value: number, from: string, to: string): number => {
    const fromFactor = powerUnits[from];
    const toFactor = powerUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Power Converter"
      units={Object.keys(powerUnits)}
      convert={convertPower}
    />
  );
};

export default PowerConverterPage;
