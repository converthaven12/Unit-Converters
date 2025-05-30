'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const specificVolumeUnits: Record<string, number> = {
  "Cubic meter per kilogram (m³/kg)": 1,
  "Cubic centimeter per gram (cm³/g)": 1e-6,
  "Cubic foot per pound (ft³/lb)": 0.06242796,
  "Cubic inch per pound (in³/lb)": 3.61e-5,
  "Liter per kilogram (L/kg)": 0.001,
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
