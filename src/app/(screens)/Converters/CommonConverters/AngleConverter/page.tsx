'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const angleUnits: Record<string, number> = {
  Degree: 1,                         // base unit for conversion (degrees)
  Radian: 57.2957795131,            // degrees per radian = 180/π
  Gradian: 0.9,                     // 100 gradians = 90 degrees, so 1 grad = 0.9°
  Arcminute: 1 / 60,                // 1 degree = 60 arcminutes
  Arcsecond: 1 / 3600,              // 1 degree = 3600 arcseconds
  "Turn (full circle)": 360,        // 1 full turn = 360 degrees
  Revolution: 360,                  // synonym for turn
  Circle: 360,                      // synonym for turn
  Quadrant: 90,                    // quarter of a turn
  "Right angle": 90,                // 90 degrees
  Sextant: 60,                     // 1 sextant = 60 degrees (1/6 circle)
  Gon: 0.9,                        // same as gradian
  Sign: 30,                        // 1 sign = 30 degrees (used in astrology)
  Mil: 0.05625                     // NATO mil = 1/6400 of a circle, so 360/6400 = 0.05625 degrees
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
