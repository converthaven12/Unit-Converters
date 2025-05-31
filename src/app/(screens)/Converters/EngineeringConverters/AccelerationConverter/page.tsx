'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const accelerationUnits: Record<string, number> = {
  "Meter per square second (m/s²)": 1,
  "Decimeter per square second (dm/s²)": 0.1,            // 1 dm = 0.1 m
  "Kilometer per square second (km/s²)": 1000,           // 1 km = 1000 m
  "Hectometer per square second (hm/s²)": 100,           // 1 hm = 100 m
  "Dekameter per square second (dam/s²)": 10,            // 1 dam = 10 m
  "Centimeter per square second (cm/s²)": 0.01,          // 1 cm = 0.01 m
  "Millimeter per square second (mm/s²)": 0.001,         // 1 mm = 0.001 m
  "Micrometer per square second (μm/s²)": 1e-6,          // 1 μm = 1e-6 m
  "Nanometer per square second (nm/s²)": 1e-9,           // 1 nm = 1e-9 m
  "Picometer per square second (pm/s²)": 1e-12,          // 1 pm = 1e-12 m
  "Femtometer per square second (fm/s²)": 1e-15,         // 1 fm = 1e-15 m
  "Attometer per square second (am/s²)": 1e-18,          // 1 am = 1e-18 m
  "Gal (Galileo) (Gal)": 0.01,                            // 1 Gal = 0.01 m/s²
  "Mile per square second (mi/s²)": 1609.344,             // 1 mile = 1609.344 m
  "Yard per square second (yd/s²)": 0.9144,               // 1 yd = 0.9144 m
  "Foot per square second (ft/s²)": 0.3048,               // 1 ft = 0.3048 m
  "Inch per square second (in/s²)": 0.0254,               // 1 in = 0.0254 m
  "Standard gravity (g)": 9.80665                           // g = 9.80665 m/s²
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
