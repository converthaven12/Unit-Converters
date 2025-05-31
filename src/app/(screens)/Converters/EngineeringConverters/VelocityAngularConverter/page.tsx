'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const angularVelocityUnits: Record<string, number> = {
  "radian/second [rad/s]": 1,
  "radian/day [rad/d]": 1 / (24 * 60 * 60),
  "radian/hour [rad/h]": 1 / (60 * 60),
  "radian/minute [rad/min]": 1 / 60,

  "degree/second [°/s]": Math.PI / 180,
  "degree/minute [°/min]": Math.PI / (180 * 60),
  "degree/hour [°/h]": Math.PI / (180 * 60 * 60),
  "degree/day [°/d]": Math.PI / (180 * 24 * 60 * 60),

  "revolution/second [r/s]": 2 * Math.PI,
  "revolution/minute [r/min]": (2 * Math.PI) / 60,
  "revolution/hour [r/h]": (2 * Math.PI) / (60 * 60),
  "revolution/day [r/d]": (2 * Math.PI) / (24 * 60 * 60),
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
