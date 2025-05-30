"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Square meter per second (m²/s)": 1,
  "Stokes (St)": 1e-4,          
  "Centistokes (cSt)": 1e-6,    
  "Square centimeter per second (cm²/s)": 1e-4
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
