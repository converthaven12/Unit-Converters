"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const flowUnits: Record<string, number> = {
  // Cubic meter units
  "cubic meter/second [m^3/s]": 1,
  "cubic meter/day [m^3/d]": 1 / 86400,
  "cubic meter/hour [m^3/h]": 1 / 3600,
  "cubic meter/minute": 1 / 60,

  // Cubic centimeter units
  "cubic centimeter/day": 1e-6 / 86400,
  "cubic centimeter/hour": 1e-6 / 3600,
  "cubic centimeter/minute": 1e-6 / 60,
  "cubic centimeter/second": 1e-6,

  // Liter units
  "liter/day [L/d]": 0.001 / 86400,
  "liter/hour [L/h]": 0.001 / 3600,
  "liter/minute [L/min]": 0.001 / 60,
  "liter/second [L/s]": 0.001,

  // Milliliter units
  "milliliter/day [mL/d]": 1e-6 / 86400,
  "milliliter/hour [mL/h]": 1e-6 / 3600,
  "milliliter/minute [mL/min]": 1e-6 / 60,
  "milliliter/second [mL/s]": 1e-6,

  // US Gallon
  "gallon (US)/day [gal (US)/d]": 0.00378541 / 86400,
  "gallon (US)/hour [gal (US)/h]": 0.00378541 / 3600,
  "gallon (US)/minute": 0.00378541 / 60,
  "gallon (US)/second": 0.00378541,

  // UK Gallon
  "gallon (UK)/day [gal (UK)/d]": 0.00454609 / 86400,
  "gallon (UK)/hour [gal (UK)/h]": 0.00454609 / 3600,
  "gallon (UK)/minute": 0.00454609 / 60,
  "gallon (UK)/second": 0.00454609,

  // Oil Barrels
  "kilobarrel (US)/day": 158.9873 / 86400 * 1000,
  "barrel (US)/day [bbl (US)/d]": 158.9873 / 86400,
  "barrel (US)/hour [bbl (US)/h]": 158.9873 / 3600,
  "barrel (US)/minute": 158.9873 / 60,
  "barrel (US)/second": 158.9873,

  // Acre-foot
  "acre-foot/year [acft/y]": 1233.48 / (365 * 24 * 3600),
  "acre-foot/day [acft/d]": 1233.48 / 86400,
  "acre-foot/hour [ac*ft/h]": 1233.48 / 3600,

  // Hundred cubic feet
  "hundred-cubic foot/day": 100 * 0.0283168 / 86400,
  "hundred-cubic foot/hour": 100 * 0.0283168 / 3600,
  "hundred-cubic foot/minute": 100 * 0.0283168 / 60,

  // Ounce (US)
  "ounce/hour [oz/h]": 2.95735e-5 / 3600,
  "ounce/minute [oz/min]": 2.95735e-5 / 60,
  "ounce/second [oz/s]": 2.95735e-5,

  // Ounce (UK)
  "ounce (UK)/hour [oz (UK)/h]": 2.84131e-5 / 3600,
  "ounce (UK)/minute": 2.84131e-5 / 60,
  "ounce (UK)/second": 2.84131e-5,

  // Cubic yard
  "cubic yard/hour [yd^3/h]": 0.764555 / 3600,
  "cubic yard/minute": 0.764555 / 60,
  "cubic yard/second [yd^3/s]": 0.764555,

  // Cubic foot
  "cubic foot/hour [ft^3/h]": 0.0283168 / 3600,
  "cubic foot/minute [ft^3/min]": 0.0283168 / 60,
  "cubic foot/second [ft^3/s]": 0.0283168,

  // Cubic inch
  "cubic inch/hour [in^3/h]": 1.63871e-5 / 3600,
  "cubic inch/minute [in^3/min]": 1.63871e-5 / 60,
  "cubic inch/second [in^3/s]": 1.63871e-5,

  // Pound (gasoline)
  "pound/second (Gasoline at 15.5°C)": 0.00053524,
  "pound/minute (Gasoline at 15.5°C)": 0.00053524 / 60,
  "pound/hour (Gasoline at 15.5°C)": 0.00053524 / 3600,
  "pound/day (Gasoline at 15.5°C)": 0.00053524 / 86400,

  // Kilogram (gasoline)
  "kilogram/second (Gasoline at 15.5°C)": 0.00053524 * 0.453592,
  "kilogram/minute (Gasoline at 15.5°C)": (0.00053524 * 0.453592) / 60,
  "kilogram/hour (Gasoline at 15.5°C)": (0.00053524 * 0.453592) / 3600,
  "kilogram/day (Gasoline at 15.5°C)": (0.00053524 * 0.453592) / 86400
};

const FlowConverter: React.FC = () => {
  const convertFlow = (value: number, from: string, to: string): number => {
    const fromFactor = flowUnits[from];
    const toFactor = flowUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Flow Converter"
      units={Object.keys(flowUnits)}
      convert={convertFlow}
    />
  );
};

export default FlowConverter;
