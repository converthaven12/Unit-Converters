"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const temperatureUnits = [
  "Celsius",
  "Fahrenheit",
  "Kelvin",
  "Rankine",
  "Delisle",
  "Newton",
  "Réaumur",
  "Rømer",
];

const convertTemperature = (
  value: number,
  from: string,
  to: string
): number => {
  // Convert from input to Celsius
  let celsius: number;
  switch (from) {
    case "Celsius":
      celsius = value;
      break;
    case "Fahrenheit":
      celsius = ((value - 32) * 5) / 9;
      break;
    case "Kelvin":
      celsius = value - 273.15;
      break;
    case "Rankine":
      celsius = ((value - 491.67) * 5) / 9;
      break;
    case "Delisle":
      celsius = 100 - (value * 2) / 3;
      break;
    case "Newton":
      celsius = (value * 100) / 33;
      break;
    case "Réaumur":
      celsius = (value * 5) / 4;
      break;
    case "Rømer":
      celsius = ((value - 7.5) * 40) / 21;
      break;
    default:
      return NaN;
  }

  // Convert from Celsius to target
  switch (to) {
    case "Celsius":
      return celsius;
    case "Fahrenheit":
      return (celsius * 9) / 5 + 32;
    case "Kelvin":
      return celsius + 273.15;
    case "Rankine":
      return ((celsius + 273.15) * 9) / 5;
    case "Delisle":
      return ((100 - celsius) * 3) / 2;
    case "Newton":
      return (celsius * 33) / 100;
    case "Réaumur":
      return (celsius * 4) / 5;
    case "Rømer":
      return (celsius * 21) / 40 + 7.5;
    default:
      return NaN;
  }
};

const TemperatureConverterPage: React.FC = () => {
  return (
    <ReusableConverter
      heading="TemperatureUnits Converter"
      units={temperatureUnits}
      convert={convertTemperature}
    />
  );
};

export default TemperatureConverterPage;
