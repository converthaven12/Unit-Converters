'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const accelerationUnits: Record<string, number> = {
  "Meters per second squared (m/s²)": 1,
  "Centimeters per second squared (cm/s²)": 0.01,
  "Feet per second squared (ft/s²)": 0.3048,
  "Gal (Galileo)": 0.01,
  "Standard gravity (g)": 9.80665,
  "Inches per second squared (in/s²)": 0.0254,
  "Kilometers per hour squared (km/h²)": 7.71605e-5,
};

const AccelerationConverterPage: React.FC = () => {
  const convertAcceleration = (value: number, from: string, to: string): number => {
    const fromFactor = accelerationUnits[from];
    const toFactor = accelerationUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Acceleration Converter"
      units={Object.keys(accelerationUnits)}
      convert={convertAcceleration}
    />
  );
};

export default AccelerationConverterPage;
