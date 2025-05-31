'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const linearCurrentDensityUnits: Record<string, number> = {
  "ampere/meter [A/m]": 1,
  "ampere/centimeter [A/cm]": 100,
  "ampere/inch [A/in]": 39.3701,
  "abampere/meter [abA/m]": 10,
  "abampere/centimeter": 1000,
  "abampere/inch [abA/in]": 393.701,
  "oersted [Oe]": 79.5775, // magnetic field strength conversion, approximate
  "gilbert/centimeter [Gi/cm]": 79.5775,
};


const LinearCurrentDensityConverterPage: React.FC = () => {
  const convertLinearCurrentDensity = (value: number, from: string, to: string): number => {
    const fromFactor = linearCurrentDensityUnits[from];
    const toFactor = linearCurrentDensityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Linear Current Density Converter"
      units={Object.keys(linearCurrentDensityUnits)}
      convert={convertLinearCurrentDensity}
    />
  );
};

export default LinearCurrentDensityConverterPage;
