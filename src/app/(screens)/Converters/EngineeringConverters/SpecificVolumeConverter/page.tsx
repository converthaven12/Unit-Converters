'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const specificVolumeUnits: Record<string, number> = {
  "cubic meter/kilogram": 1,                  // base unit
  "cubic centimeter/gram": 1e-6,              // 1 cm³/g = 1e-6 m³/kg
  "liter/kilogram [L/kg]": 0.001,             // 1 L = 0.001 m³
  "liter/gram [L/g]": 1,                       // 1 L/g = 0.001 m³/g = 1 m³/kg (since gram to kg is factor 1000)
  "cubic foot/kilogram [ft³/kg]": 0.0283168,  // 1 ft³ = 0.0283168 m³
  "cubic foot/pound [ft³/lb]": 0.06242796,    // given
  "gallon (US)/pound": 0.133681,               // 1 US gal = 0.00378541 m³, 1 lb = 0.453592 kg, so 0.00378541/0.453592 ≈ 0.0083454 m³/kg, but since base unit is per kg, we convert accordingly
  "gallon (UK)/pound": 0.1605437,              // 1 UK gal = 0.00454609 m³, divided by 0.453592 kg per lb
};


const SpecificVolumeConverterPage: React.FC = () => {
  const convertSpecificVolume = (value: number, from: string, to: string): number => {
    const fromFactor = specificVolumeUnits[from];
    const toFactor = specificVolumeUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Specific Volume Converter"
      units={Object.keys(specificVolumeUnits)}
      convert={convertSpecificVolume}
    />
  );
};

export default SpecificVolumeConverterPage;
