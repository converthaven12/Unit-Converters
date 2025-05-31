'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const densityUnits: Record<string, number> = {
  "kilogram/cubic meter": 1,
  "gram/cubic centimeter": 1000,
  "kilogram/cubic centimeter": 1_000_000,
  "gram/cubic meter": 0.001,
  "gram/cubic millimeter": 1_000_000,
  "milligram/cubic meter": 1e-6,
  "milligram/cubic centimeter": 1,
  "milligram/cubic millimeter": 1000,
  "exagram/liter": 1e21,
  "petagram/liter": 1e18,
  "teragram/liter": 1e15,
  "gigagram/liter": 1e12,
  "megagram/liter": 1e9,
  "kilogram/liter": 1000,
  "hectogram/liter": 100,
  "dekagram/liter": 10,
  "gram/liter": 1,
  "decigram/liter": 0.1,
  "centigram/liter": 0.01,
  "milligram/liter": 0.001,
  "microgram/liter": 1e-6,
  "nanogram/liter": 1e-9,
  "picogram/liter": 1e-12,
  "femtogram/liter": 1e-15,
  "attogram/liter": 1e-18,
  "pound/cubic inch": 27679.9,
  "pound/cubic foot": 16.0185,
  "pound/cubic yard": 0.593276,
  "pound/gallon (US)": 119.826,
  "pound/gallon (UK)": 99.7764,
  "ounce/cubic inch": 1731.99,
  "ounce/cubic foot": 1.00116,
  "ounce/gallon (US)": 7.48951,
  "ounce/gallon (UK)": 6.23602,
  "grain/gallon (US)": 0.171971,
  "grain/gallon (UK)": 0.142503,
  "grain/cubic foot": 0.000228595,
  "ton (short)/cubic yard": 1186.5528,
  "ton (long)/cubic yard": 1328.9392,
  "slug/cubic foot": 515.3788,
  "psi/1000 feet": 2.30666,
  "Earth's density (mean)": 5515.3,
};


const DensityConverterPage: React.FC = () => {
  const convertDensity = (value: number, from: string, to: string): number => {
    const fromFactor = densityUnits[from];
    const toFactor = densityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Density Converter"
      units={Object.keys(densityUnits)}
      convert={convertDensity}
    />
  );
};

export default DensityConverterPage;
