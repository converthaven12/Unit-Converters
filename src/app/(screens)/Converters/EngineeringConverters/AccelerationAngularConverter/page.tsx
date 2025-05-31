'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const angularAccelerationUnits: Record<string, number> = {
  "radian/square second": 1,
  "radian/square minute": 1 / (60 ** 2),
  "revolution/square second": (2 * Math.PI),
  "revolution/minute/second": (2 * Math.PI) / 60,
  "revolution/square minute": (2 * Math.PI) / (60 ** 2),
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
