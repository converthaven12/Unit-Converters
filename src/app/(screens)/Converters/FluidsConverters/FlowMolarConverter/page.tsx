"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";
import FlowMassConverter from "../FlowMassConverter/page";

export const flowMolarUnits: Record<string, number> = {
  "Mole/second": 1,
  "Mole/minute": 1 / 60,
  "Mole/hour": 1 / 3600,
  "Millimole/second": 0.001,
  "Millimole/minute": 0.001 / 60,
  "Millimole/hour": 0.001 / 3600
};

 const FlowMolarConverter: React.FC = () => {
  const convertFlowMolar = (value: number, from: string, to: string): number => {
    const fromFactor = flowMolarUnits[from];
    const toFactor = flowMolarUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Flow - Molar Converter"
      units={Object.keys(flowMolarUnits)}
      convert={convertFlowMolar}
    />
  );
};

export default FlowMolarConverter;