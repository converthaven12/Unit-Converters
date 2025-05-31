'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const inductanceUnits: Record<string, number> = {
  "henry [H]": 1,
  "exahenry [EH]": 1e18,
  "petahenry [PH]": 1e15,
  "terahenry [TH]": 1e12,
  "gigahenry [GH]": 1e9,
  "megahenry [MH]": 1e6,
  "kilohenry [kH]": 1e3,
  "hectohenry [hH]": 1e2,
  "dekahenry [daH]": 1e1,
  "decihenry [dH]": 1e-1,
  "centihenry [cH]": 1e-2,
  "millihenry [mH]": 1e-3,
  "microhenry [µH]": 1e-6,
  "nanohenry [nH]": 1e-9,
  "picohenry [pH]": 1e-12,
  "femtohenry [fH]": 1e-15,
  "attohenry [aH]": 1e-18,
  "weber/ampere [Wb/A]": 1,
  "abhenry [abH]": 1e-9,
  "EMU of inductance": 1e-9,
  "stathenry [stH]": 8.98755e11,
  "ESU of inductance": 8.98755e11,
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
