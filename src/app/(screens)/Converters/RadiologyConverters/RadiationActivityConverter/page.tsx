"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "becquerel [Bq]": 1,
  "terabecquerel [TBq]": 1e12,
  "gigabecquerel [GBq]": 1e9,
  "megabecquerel [MBq]": 1e6,
  "kilobecquerel [kBq]": 1e3,
  "millibecquerel [mBq]": 1e-3,
  "curie [Ci]": 3.7e10,
  "kilocurie [kCi]": 3.7e13,
  "millicurie [mCi]": 3.7e7,
  "microcurie [µCi]": 3.7e4,
  "nanocurie [nCi]": 37,
  "picocurie [pCi]": 0.037,
  "rutherford": 1e6,
  "one/second [1/s]": 1,
  "disintegrations/second": 1,
  "disintegrations/minute": 1 / 60
};

const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const RadiationActivityConverter = () => (
  <ReusableConverter
    heading="Radiation-Activity Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default RadiationActivityConverter;
