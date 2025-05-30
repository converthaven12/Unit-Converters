'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const angularVelocityUnits: Record<string, number> = {
  "Radians per second": 1,
  "Degrees per second": Math.PI / 180,
  "Revolutions per minute (RPM)": 2 * Math.PI / 60,
  "Revolutions per second": 2 * Math.PI,
  "Degrees per minute": Math.PI / (180 * 60),
};

const VelocityAngularConverterPage: React.FC = () => {
  const convertAngularVelocity = (value: number, from: string, to: string): number => {
    const fromFactor = angularVelocityUnits[from];
    const toFactor = angularVelocityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Velocity - Angular Converter"
      units={Object.keys(angularVelocityUnits)}
      convert={convertAngularVelocity}
    />
  );
};

export default VelocityAngularConverterPage;
