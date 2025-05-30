'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const chargeUnits: Record<string, number> = {
  "Coulomb (C)": 1,
  "Abcoulomb (abC)": 10,
  "Elementary charge (e)": 1.602176634e-19,
  "Faraday (F)": 96485.33212,
  "Statcoulomb (statC)": 3.33564e-10,
  "Ampere-hour (Ah)": 3600,
  "Millicoulomb (mC)": 0.001,
  "Microcoulomb (μC)": 1e-6,
  "Nanocoulomb (nC)": 1e-9,
  "Picocoulomb (pC)": 1e-12,
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
