'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const capacitanceUnits: Record<string, number> = {
  "farad [F]": 1,
  "exafarad [EF]": 1e18,
  "petafarad [PF]": 1e15,
  "terafarad [TF]": 1e12,
  "gigafarad [GF]": 1e9,
  "megafarad [MF]": 1e6,
  "kilofarad [kF]": 1e3,
  "hectofarad [hF]": 1e2,
  "dekafarad [daF]": 1e1,
  "decifarad [dF]": 1e-1,
  "centifarad [cF]": 1e-2,
  "millifarad [mF]": 1e-3,
  "microfarad [µF]": 1e-6,
  "nanofarad [nF]": 1e-9,
  "picofarad [pF]": 1e-12,
  "femtofarad [fF]": 1e-15,
  "attofarad [aF]": 1e-18,
  "coulomb/volt [C/V]": 1,
  "abfarad [abF]": 1e9,
  "EMU of capacitance": 1e9,
  "statfarad [stF]": 1.11265e-12,
  "ESU of capacitance": 1.11265e-12,
};


const ElectrostaticCapacitancePage: React.FC = () => {
  const convertCapacitance = (value: number, from: string, to: string): number => {
    const fromFactor = capacitanceUnits[from];
    const toFactor = capacitanceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Electrostatic Capacitance Converter"
      units={Object.keys(capacitanceUnits)}
      convert={convertCapacitance}
    />
  );
};

export default ElectrostaticCapacitancePage;
