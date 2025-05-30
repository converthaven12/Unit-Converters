'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const areaUnits: Record<string, number> = {
  "Square Millimeter": 1e-6,
  "Square Centimeter": 1e-4,
  "Square Meter": 1,
  "Square Kilometer": 1e6,
  "Hectare": 1e4,
  "Acre": 4046.8564224,
  "Square Inch": 0.00064516,
  "Square Foot": 0.092903,
  "Square Yard": 0.836127,
  "Square Mile": 2.59e6,
  "Barn": 1e-28,
  "Square Rod": 25.2929,
  "Square Chain": 404.686,
};

const AreaConverterPage: React.FC = () => {
  const convertArea = (value: number, from: string, to: string): number => {
    const fromFactor = areaUnits[from];
    const toFactor = areaUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Area Converter"
      units={Object.keys(areaUnits)}
      convert={convertArea}
    />
  );
};

export default AreaConverterPage;
