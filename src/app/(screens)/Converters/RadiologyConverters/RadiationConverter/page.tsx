"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "gray/second [Gy/s]": 1,
  "exagray/second [EGy/s]": 1e18,
  "petagray/second [PGy/s]": 1e15,
  "teragray/second [TGy/s]": 1e12,
  "gigagray/second [GGy/s]": 1e9,
  "megagray/second [MGy/s]": 1e6,
  "kilogray/second [kGy/s]": 1e3,
  "hectogray/second [hGy/s]": 1e2,
  "dekagray/second [daGy/s]": 1e1,
  "decigray/second [dGy/s]": 1e-1,
  "centigray/second [cGy/s]": 1e-2,
  "milligray/second [mGy/s]": 1e-3,
  "microgray/second [µGy/s]": 1e-6,
  "nanogray/second [nGy/s]": 1e-9,
  "picogray/second [pGy/s]": 1e-12,
  "femtogray/second [fGy/s]": 1e-15,
  "attogray/second [aGy/s]": 1e-18,
  "rad/second [rd/s, rad/s]": 0.01,           // 1 rad/s = 0.01 Gy/s
  "joule/kilogram/second": 1,                // 1 J/kg/s = 1 Gy/s
  "watt/kilogram [W/kg]": 1,                 // same as Gy/s by definition
  "sievert/second [Sv/s]": 1,                // numerically same (different purpose)
  "rem/second [rem/s]": 0.01                 // 1 rem/s = 0.01 Sv/s = 0.01 Gy/s
};


const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const RadiationConverter = () => (
  <ReusableConverter
    heading="Radiation Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default RadiationConverter;
