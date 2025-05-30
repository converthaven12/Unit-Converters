'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const currentUnits: Record<string, number> = {
  "Ampere (A)": 1,
  "Milliampere (mA)": 0.001,
  "Microampere (μA)": 1e-6,
  "Kiloampere (kA)": 1000,
  "Statampere (statA)": 3.33564e-10,
  "Abampere (abA)": 10,
  "Biot (Bi)": 10,
  "Ampere-hour (Ah)": 3600,
  "Coulomb per second (C/s)": 1,
};

const CurrentConverterPage: React.FC = () => {
  const convertCurrent = (value: number, from: string, to: string): number => {
    const fromFactor = currentUnits[from];
    const toFactor = currentUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Current Converter"
      units={Object.keys(currentUnits)}
      convert={convertCurrent}
    />
  );
};

export default CurrentConverterPage;
