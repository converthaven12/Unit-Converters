"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

// FLOW MASS CONVERTER
const flowMassUnits: Record<string, number> = {
  "Kilogram/Second": 1,
  "Gram/Second": 1e-3,
  "Gram/Minute": 1e-3 / 60,
  "Gram/Hour": 1e-3 / 3600,
  "Gram/Day": 1e-3 / 86400,
  "Milligram/Second": 1e-6,
  "Milligram/Minute": 1e-6 / 60,
  "Milligram/Hour": 1e-6 / 3600,
  "Milligram/Day": 1e-6 / 86400,
  "Kilogram/Minute": 1 / 60,
  "Kilogram/Hour": 1 / 3600,
  "Kilogram/Day": 1 / 86400,
  "Exagram/Second": 1e18,
  "Petagram/Second": 1e15,
  "Teragram/Second": 1e12,
  "Gigagram/Second": 1e9,
  "Megagram/Second": 1e6,
  "Hectogram/Second": 0.1,
  "Dekagram/Second": 0.01,
  "Decigram/Second": 0.0001,
  "Centigram/Second": 0.00001,
  "Microgram/Second": 1e-9,
  "Ton (Metric)/Second": 1000,
  "Ton (Metric)/Minute": 1000 / 60,
  "Ton (Metric)/Hour": 1000 / 3600,
  "Ton (Metric)/Day": 1000 / 86400,
  "Ton (Short)/Hour": 907.18474 / 3600,
  "Pound/Second": 0.453592,
  "Pound/Minute": 0.453592 / 60,
  "Pound/Hour": 0.453592 / 3600,
  "Pound/Day": 0.453592 / 86400,
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