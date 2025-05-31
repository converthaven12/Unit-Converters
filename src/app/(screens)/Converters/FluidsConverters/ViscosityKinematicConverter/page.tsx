"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Square Meter/Second": 1,
  "Square Meter/Hour": 1 / 3600,
  "Square Centimeter/Second": 1e-4,
  "Square Millimeter/Second": 1e-6,
  "Square Foot/Second": 0.092903,
  "Square Foot/Hour": 0.092903 / 3600,
  "Square Inch/Second": 0.00064516,
  "Stokes": 1e-4,
  "Exastokes": 1e14,
  "Petastokes": 1e11,
  "Terastokes": 1e8,
  "Gigastokes": 1e5,
  "Megastokes": 1e2,
  "Kilostokes": 0.1,
  "Hectostokes": 0.01,
  "Dekastokes": 0.001,
  "Decistokes": 1e-5,
  "Centistokes": 1e-6,
  "Millistokes": 1e-7,
  "Microstokes": 1e-10,
  "Nanostokes": 1e-13,
  "Picostokes": 1e-16,
  "Femtostokes": 1e-19,
  "Attostokes": 1e-22,
};

const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const ViscosityKinematicConverter = () => (
  <ReusableConverter
    heading="Kinematic Viscosity Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default ViscosityKinematicConverter;
