'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const angleUnits: Record<string, number> = {
  Degree: 1,
  Radian: 57.2958,
  Gradian: 0.9,
  Arcminute: 1/60,
  Arcsecond: 1/3600,
  "Turn (full circle)": 360,
};

const AngleConverterPage: React.FC = () => {
  const convertAngle = (value: number, from: string, to: string): number => {
    const fromFactor = angleUnits[from];
    const toFactor = angleUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Angle Converter"
      units={Object.keys(angleUnits)}
      convert={convertAngle}
    />
  );
};

export default AngleConverterPage;
