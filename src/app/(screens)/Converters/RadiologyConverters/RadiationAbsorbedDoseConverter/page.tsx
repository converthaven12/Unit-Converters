"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "gray [Gy]": 1,
  "exagray [EGy]": 1e18,
  "petagray [PGy]": 1e15,
  "teragray [TGy]": 1e12,
  "gigagray [GGy]": 1e9,
  "megagray [MGy]": 1e6,
  "kilogray [kGy]": 1e3,
  "hectogray [hGy]": 1e2,
  "dekagray [daGy]": 1e1,
  "decigray [dGy]": 1e-1,
  "centigray [cGy]": 1e-2,
  "milligray [mGy]": 1e-3,
  "microgray [µGy]": 1e-6,
  "nanogray [nGy]": 1e-9,
  "picogray [pGy]": 1e-12,
  "femtogray [fGy]": 1e-15,
  "attogray [aGy]": 1e-18,
  "rad [rd]": 0.01,
  "millirad [mrd]": 1e-5,
  "joule/kilogram [J/kg]": 1,
  "joule/gram [J/g]": 1e3,
  "joule/centigram [J/cg]": 1e5,
  "joule/milligram [J/mg]": 1e6
};


const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const RadiationAbsorbedDoseConverter = () => (
  <ReusableConverter
    heading="Radiation-Absorbed Dose Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default RadiationAbsorbedDoseConverter;
