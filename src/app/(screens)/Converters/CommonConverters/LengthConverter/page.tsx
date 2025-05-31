"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const lengthUnits: Record<string, number> = {
  Meter: 1,
  Kilometer: 1e3,
  Decimeter: 0.1,
  Centimeter: 0.01,
  Millimeter: 0.001,
  Micrometer: 1e-6,
  Nanometer: 1e-9,
  Mile: 1609.344,
  Yard: 0.9144,
  Foot: 0.3048,
  Inch: 0.0254,
  "Light Year": 9.4607304725808e15,
  Exameter: 1e18,
  Petameter: 1e15,
  Terameter: 1e12,
  Gigameter: 1e9,
  Megameter: 1e6,
  Hectometer: 1e2,
  Decameter: 1e1,
  Micron: 1e-6,
  Picometer: 1e-12,
  Femtometer: 1e-15,
  Attometer: 1e-18,
  Megaparsec: 3.08567758149137e22,
  Kiloparsec: 3.08567758149137e19,
  Parsec: 3.08567758149137e16,
  "Astronomical Unit": 1.495978707e11,
  League: 4828.032,
  "Nautical League (UK)": 5556,
  "Nautical League (int.)": 5556,
  "League (statute)": 4828.032,
  "Nautical Mile (UK)": 1853.184,
  "Nautical Mile (international)": 1852,
  "Mile (statute)": 1609.344,
  "Mile (US survey)": 1609.3472,
  "Mile (Roman)": 1480,
  Kiloyard: 914.4,
  Furlong: 201.168,
  "Furlong (US survey)": 201.1684,
  Chain: 20.1168,
  "Chain (US survey)": 20.11684,
  Rope: 6.096,
  Rod: 5.0292,
  "Rod (US survey)": 5.02921,
  Perch: 5.0292,
  Pole: 5.0292,
  Fathom: 1.8288,
  "Fathom (US survey)": 1.828804,
  Ell: 1.143,
  "Foot (US survey)": 0.3048006096,
  Link: 0.201168,
  "Link (US survey)": 0.2011684,
  "Cubit (UK)": 0.4572,
  "Handspan (cloth)": 0.2286,
  "Finger (cloth)": 0.1143,
  "Nail (cloth)": 0.05715,
  "Inch (US survey)": 0.0254000508,
  Barleycorn: 0.00847,
  Mil: 0.0000254,
  Microinch: 2.54e-8,
  Angstrom: 1e-10,
  "A.U. of length": 1.495978707e11,
  "X-unit": 1.0021e-13,
  Fermi: 1e-15,
  Arpent: 58.5216,
  Pica: 0.004233,
  Point: 0.0003528,
  Twip: 0.00001764,
  Aln: 0.5938,
  Famn: 1.781,
  Caliber: 0.000254,
  Centiinch: 0.000254,
  Ken: 1.81818,
  "Russian Archin": 0.7112,
  "Roman Actus": 35.47872,
  "Vara de Tarea": 0.835905,
  "Vara Conuquera": 0.8359,
  "Vara Castellana": 0.8359,
  "Cubit (Greek)": 0.462,
  "Long Reed": 3.6576,
  Reed: 3.048,
  "Long Cubit": 0.5334,
  Handbreadth: 0.1016,
  Fingerbreadth: 0.01905,
  "Planck Length": 1.616255e-35,
  "Electron Radius (classical)": 2.8179403227e-15,
  "Bohr Radius": 5.29177210903e-11,
  "Earth's Equatorial Radius": 6378137,
  "Earth's Polar Radius": 6356752.3,
  "Earth's Distance from Sun": 1.496e11,
  "Sun's Radius": 6.9634e8
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
