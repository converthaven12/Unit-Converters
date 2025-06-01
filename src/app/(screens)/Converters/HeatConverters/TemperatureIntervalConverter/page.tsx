"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const temperatureIntervalUnits: Record<
  string,
  { toK: (v: number) => number; fromK: (v: number) => number }
> = {
  "Celsius (°C)": {
    toK: (v) => v + 273.15,
    fromK: (v) => v - 273.15,
  },
  "Kelvin (K)": {
    toK: (v) => v,
    fromK: (v) => v,
  },
  "Fahrenheit (°F)": {
    toK: (v) => ((v + 459.67) * 5) / 9,
    fromK: (v) => (v * 9) / 5 - 459.67,
  },
  "Rankine (°R)": {
    toK: (v) => (v * 5) / 9,
    fromK: (v) => (v * 9) / 5,
  },
};

const TemperatureIntervalConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    if (
      !(from in temperatureIntervalUnits) ||
      !(to in temperatureIntervalUnits)
    )
      return NaN;
    const toKelvin = temperatureIntervalUnits[from].toK;
    const fromKelvin = temperatureIntervalUnits[to].fromK;
    const kelvinValue = toKelvin(value);
    return fromKelvin(kelvinValue);
  };

  return (
    <ReusableConverter
      heading="TemperatureUnits Interval Converter"
      units={Object.keys(temperatureIntervalUnits)}
      convert={convert}
    />
  );
};

export default TemperatureIntervalConverterPage;
