"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const flowUnits: Record<string, number> = {
  "Cubic Meter/Second": 1,
  "Cubic Meter/Minute": 1 / 60,
  "Cubic Meter/Hour": 1 / 3600,
  "Liter/Second": 0.001,
  "Liter/Minute": 0.001 / 60,
  "Liter/Hour": 0.001 / 3600,
  "Milliliter/Second": 1e-6,
  "Milliliter/Minute": 1e-6 / 60,
  "Milliliter/Hour": 1e-6 / 3600,
  "Cubic Foot/Second": 0.0283168,
  "Cubic Foot/Minute": 0.0283168 / 60,
  "Cubic Foot/Hour": 0.0283168 / 3600,
  "Cubic Inch/Second": 1.63871e-5,
  "Cubic Inch/Minute": 1.63871e-5 / 60,
  "Cubic Inch/Hour": 1.63871e-5 / 3600,
  "Gallon (US)/Second": 0.00378541,
  "Gallon (US)/Minute": 0.00378541 / 60,
  "Gallon (US)/Hour": 0.00378541 / 3600,
  "Gallon (UK)/Second": 0.00454609,
  "Gallon (UK)/Minute": 0.00454609 / 60,
  "Gallon (UK)/Hour": 0.00454609 / 3600,
  "Barrel (Oil)/Second": 0.1589873,
  "Barrel (Oil)/Minute": 0.1589873 / 60,
  "Barrel (Oil)/Hour": 0.1589873 / 3600,
  "Acre-Foot/Year": 1233.48 / (365 * 24 * 3600),
  "CFM (Cubic Foot/Minute)": 0.0283168 / 60
};

const FlowConverter: React.FC = () => {
  const convertFlow = (value: number, from: string, to: string): number => {
    const fromFactor = flowUnits[from];
    const toFactor = flowUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Flow Converter"
      units={Object.keys(flowUnits)}
      convert={convertFlow}
    />
  );
};

export default FlowConverter;
