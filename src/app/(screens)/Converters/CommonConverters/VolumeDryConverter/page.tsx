'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const volumeDryUnits: Record<string, number> = {
  "Liter": 0.001,                  // 1 L = 0.001 m³
  "Cubic Meter": 1,               // base unit

  // US dry volume units
  "Bushel (US)": 0.0352391,       // 1 bushel (US) = 0.0352391 m³
  "Peck (US)": 0.00880977,        // 1 peck (US) = 0.00880977 m³
  "Gallon (US dry)": 0.00440488,  // 1 US dry gallon = 0.00440488 m³
  "Quart (US dry)": 0.00110122,   // 1 US dry quart = 0.00110122 m³
  "Pint (US dry)": 0.00055061,    // 1 US dry pint = 0.00055061 m³
  "Cup (US)": 0.00028413,         // 1 US cup = 0.00028413 m³
  "Gill (US)": 0.00011829,        // 1 US gill = 0.00011829 m³

  // You can add the UK dry units and Biblical units similarly with their conversions:

  // UK units (example values, verify if needed)
  "Peck (UK)": 0.00909218,        // 1 peck (UK) = 0.00909218 m³
  "Bushel (UK)": 0.0363687,       // 1 bushel (UK) = 0.0363687 m³

  // Biblical units (approximate, check sources)
  "Cor (Biblical)": 220,           // example: 220 L = 0.22 m³ (adjust accordingly)
  "Homer (Biblical)": 220,         // often equal to Cor
  "Ephah (Biblical)": 22,          // ~22 L = 0.022 m³
  "Seah (Biblical)": 7.3,          // ~7.3 L = 0.0073 m³
  "Omer (Biblical)": 2.3,          // ~2.3 L = 0.0023 m³
  "Cab (Biblical)": 0.43,          // ~0.43 L = 0.00043 m³
  "Log (Biblical)": 0.03,          // ~0.03 L = 0.00003 m³
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
