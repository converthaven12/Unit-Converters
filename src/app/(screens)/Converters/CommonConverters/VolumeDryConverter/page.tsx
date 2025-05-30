'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const volumeDryUnits: Record<string, number> = {
  "Bushel (US)": 0.0352391,
  "Peck (US)": 0.00880977,
  "Gallon (US dry)": 0.00440488,
  "Quart (US dry)": 0.00110122,
  "Pint (US dry)": 0.00055061,
  "Cup (US)": 0.00028413,
  "Gill (US)": 0.00011829,
  "Liter": 0.001,
  "Cubic Meter": 1,
};

const VolumeDryConverterPage: React.FC = () => {
  const convertVolumeDry = (value: number, from: string, to: string): number => {
    const fromFactor = volumeDryUnits[from];
    const toFactor = volumeDryUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Volume - Dry Converter"
      units={Object.keys(volumeDryUnits)}
      convert={convertVolumeDry}
    />
  );
};

export default VolumeDryConverterPage;
