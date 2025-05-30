'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const speedUnits: Record<string, number> = {
  "Meters per second": 1,
  "Kilometers per hour": 0.277778,
  "Miles per hour": 0.44704,
  "Feet per second": 0.3048,
  "Knots": 0.514444,
  "Mach (sea level)": 340.29,
  "Speed of light": 299792458,
  "Centimeters per second": 0.01,
  "Millimeters per second": 0.001,
};

const SpeedConverterPage: React.FC = () => {
  const convertSpeed = (value: number, from: string, to: string): number => {
    const fromFactor = speedUnits[from];
    const toFactor = speedUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Speed Converter"
      units={Object.keys(speedUnits)}
      convert={convertSpeed}
    />
  );
};

export default SpeedConverterPage;
