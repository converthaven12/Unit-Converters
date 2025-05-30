'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const inductanceUnits: Record<string, number> = {
  "Henry (H)": 1,
  "Millihenry (mH)": 1e-3,
  "Microhenry (μH)": 1e-6,
  "Nanohenry (nH)": 1e-9,
  "Abhenry (abH)": 1e9,
};

const InductanceConverterPage: React.FC = () => {
  const convertInductance = (value: number, from: string, to: string): number => {
    const fromFactor = inductanceUnits[from];
    const toFactor = inductanceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Inductance Converter"
      units={Object.keys(inductanceUnits)}
      convert={convertInductance}
    />
  );
};

export default InductanceConverterPage;
