"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";
import FlowMassConverter from "../FlowMassConverter/page";

const flowMolarUnits: Record<string, number> = {
  "Mol/Second": 1,
  "Examol/Second": 1e18,
  "Petamol/Second": 1e15,
  "Teramol/Second": 1e12,
  "Gigamol/Second": 1e9,
  "Megamol/Second": 1e6,
  "Kilomol/Second": 1e3,
  "Hectomol/Second": 1e2,
  "Dekamol/Second": 1e1,
  "Decimol/Second": 1e-1,
  "Centimol/Second": 1e-2,
  "Millimol/Second": 1e-3,
  "Micromol/Second": 1e-6,
  "Nanomol/Second": 1e-9,
  "Picomol/Second": 1e-12,
  "Femtomol/Second": 1e-15,
  "Attomol/Second": 1e-18,
  "Mol/Minute": 1 / 60,
  "Mol/Hour": 1 / 3600,
  "Mol/Day": 1 / 86400,
  "Millimol/Minute": 1e-3 / 60,
  "Millimol/Hour": 1e-3 / 3600,
  "Millimol/Day": 1e-3 / 86400,
  "Kilomol/Minute": 1e3 / 60,
  "Kilomol/Hour": 1e3 / 3600,
  "Kilomol/Day": 1e3 / 86400,
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