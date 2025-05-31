'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const currentUnits: Record<string, number> = {
  "ampere [A]": 1,
  "kiloampere [kA]": 1e3,
  "milliampere [mA]": 1e-3,
  "biot [Bi]": 10, // 1 Biot = 10 A
  "abampere [abA]": 10,
  "EMU of current": 10,
  "statampere [stA]": 3.33564e-10,
  "ESU of current": 3.33564e-10,
  "CGS e.m. unit": 10,
  "CGS e.s. unit": 3.33564e-10,
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
