"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

// FLOW MASS CONVERTER
const flowMassUnits: Record<string, number> = {
  "Kilogram/second": 1,
  "Kilogram/minute": 1 / 60,
  "Kilogram/hour": 1 / 3600,
  "Gram/second": 0.001,
  "Gram/minute": 0.001 / 60,
  "Gram/hour": 0.001 / 3600,
  "Pound/second": 0.45359237,
  "Pound/minute": 0.45359237 / 60,
  "Pound/hour": 0.45359237 / 3600,
  "Ton (metric)/hour": 1000 / 3600,
  "Ton (US)/hour": 907.18474 / 3600
};

const FlowMassConverter: React.FC = () => {
  const convertFlowMass = (value: number, from: string, to: string): number => {
    const fromFactor = flowMassUnits[from];
    const toFactor = flowMassUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Flow - Mass Converter"
      units={Object.keys(flowMassUnits)}
      convert={convertFlowMass}
    />
  );
};

export default FlowMassConverter;