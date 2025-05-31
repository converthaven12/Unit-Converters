'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const chargeUnits: Record<string, number> = {
  "Coulomb (C)": 1,
  "Megacoulomb (MC)": 1e6,
  "Kilocoulomb (kC)": 1e3,
  "Millicoulomb (mC)": 1e-3,
  "Microcoulomb (µC)": 1e-6,
  "Nanocoulomb (nC)": 1e-9,
  "Picocoulomb (pC)": 1e-12,
  "Abcoulomb (abC) / EMU of charge": 10,
  "Statcoulomb (stC) / ESU of charge (franklin)": 3.33564e-10,
  "Ampere-hour (A*h)": 3600,
  "Ampere-minute (A*min)": 60,
  "Ampere-second (A*s)": 1,
  "Faraday (based on carbon 12)": 96485.33212,
  "Elementary charge (e)": 1.602176634e-19,
};



const ChargeConverterPage: React.FC = () => {
  const convertCharge = (value: number, from: string, to: string): number => {
    const fromFactor = chargeUnits[from];
    const toFactor = chargeUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Charge Converter"
      units={Object.keys(chargeUnits)}
      convert={convertCharge}
    />
  );
};

export default ChargeConverterPage;
