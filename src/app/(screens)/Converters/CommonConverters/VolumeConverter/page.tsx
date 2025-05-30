'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const volumeUnits: Record<string, number> = {
  "Cubic Millimeter": 1e-9,
  "Cubic Centimeter (cc)": 1e-6,
  "Milliliter (mL)": 1e-6,
  "Centiliter (cL)": 1e-5,
  "Deciliter (dL)": 1e-4,
  "Liter (L)": 1e-3,
  "Decaliter (daL)": 1e-2,
  "Hectoliter (hL)": 1e-1,
  "Cubic Meter (m³)": 1,
  "Cubic Kilometer (km³)": 1e9,
  "Cubic Inch": 1.63871e-5,
  "Cubic Foot": 0.0283168,
  "Cubic Yard": 0.764555,
  "US Teaspoon": 4.92892e-6,
  "US Tablespoon": 1.47868e-5,
  "US Fluid Ounce": 2.9574e-5,
  "US Cup": 0.000236588,
  "US Pint": 0.000473176,
  "US Quart": 0.000946353,
  "US Gallon": 0.00378541,
  "Imperial Teaspoon": 5.91939e-6,
  "Imperial Tablespoon": 1.77869e-5,
  "Imperial Fluid Ounce": 2.84131e-5,
  "Imperial Gill": 0.000142065,
  "Imperial Pint": 0.000568261,
  "Imperial Quart": 0.00113652,
  "Imperial Gallon": 0.00454609,
  "Board Foot": 0.00235974,
  "Oil Barrel": 0.158987,
};

const VolumeConverterPage: React.FC = () => {
  const convertVolume = (value: number, from: string, to: string): number => {
    const fromFactor = volumeUnits[from];
    const toFactor = volumeUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Volume Converter"
      units={Object.keys(volumeUnits)}
      convert={convertVolume}
    />
  );
};

export default VolumeConverterPage;
