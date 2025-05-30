'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const angularAccelerationUnits: Record<string, number> = {
  "Radians per second squared (rad/s²)": 1,
  "Degrees per second squared (°/s²)": Math.PI / 180,
  "Revolutions per minute squared (RPM²)": (2 * Math.PI / 60) ** 2,
  "Revolutions per second squared (rps²)": (2 * Math.PI) ** 2,
};

const AccelerationAngularConverterPage: React.FC = () => {
  const convertAngularAcceleration = (value: number, from: string, to: string): number => {
    const fromFactor = angularAccelerationUnits[from];
    const toFactor = angularAccelerationUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Acceleration - Angular Converter"
      units={Object.keys(angularAccelerationUnits)}
      convert={convertAngularAcceleration}
    />
  );
};

export default AccelerationAngularConverterPage;
