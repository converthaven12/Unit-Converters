'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const surfaceCurrentDensityUnits: Record<string, number> = {
  "ampere/square meter [A/m^2]": 1,
  "ampere/square centimeter": 1e4,
  "ampere/square inch [A/in^2]": 1550.0031,
  "ampere/square mil [A/mi^2]": 6.4516e9,
  "ampere/cicular mil": 5.0671e10,
  "abampere/square centimeter": 1e5,
};

const SurfaceCurrentDensityConverterPage: React.FC = () => {
  const convertSurfaceCurrentDensity = (value: number, from: string, to: string): number => {
    const fromFactor = surfaceCurrentDensityUnits[from];
    const toFactor = surfaceCurrentDensityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Surface Current Density Converter"
      units={Object.keys(surfaceCurrentDensityUnits)}
      convert={convertSurfaceCurrentDensity}
    />
  );
};

export default SurfaceCurrentDensityConverterPage;
