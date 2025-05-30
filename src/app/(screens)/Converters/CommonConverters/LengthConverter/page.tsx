"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const lengthUnits: Record<string, number> = {
  Attometer: 1e-18,
  Femtometer: 1e-15,
  Picometer: 1e-12,
  Nanometer: 1e-9,
  Micrometer: 1e-6,
  Millimeter: 1e-3,
  Centimeter: 1e-2,
  Decimeter: 1e-1,
  Meter: 1,
  Decameter: 1e1,
  Hectometer: 1e2,
  Kilometer: 1e3,
  Megameter: 1e6,
  Gigameter: 1e9,
  Inch: 0.0254,
  Foot: 0.3048,
  Yard: 0.9144,
  Mile: 1609.344,
  "Nautical Mile": 1852,
  Furlong: 201.168,
  Chain: 20.1168,
  Rod: 5.0292,
  Perch: 5.0292,
  Pole: 5.0292,
  Fathom: 1.8288,
  Link: 0.201168,
  League: 4828.032,
  "Astronomical Unit": 1.495978707e11,
  "Light Year": 9.4607304725808e15,
  Parsec: 3.08567758149137e16,
  Kiloparsec: 3.08567758149137e19,
  Megaparsec: 3.08567758149137e22,
  Gigaparsec: 3.08567758149137e25,
  Angstrom: 1e-10,
  "Planck Length": 1.616255e-35,
};

const LengthConverterPage: React.FC = () => {
  const convertLength = (
    value: number,
    from: string,
    to: string
  ): number => {
    const fromFactor = lengthUnits[from];
    const toFactor = lengthUnits[to];
    if (fromFactor === undefined || toFactor === undefined) {
      return NaN;
    }
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Length Converter"
      units={Object.keys(lengthUnits)} // ✅ fix: convert Record to string[]
      convert={convertLength}
    />
  );
};

export default LengthConverterPage;
