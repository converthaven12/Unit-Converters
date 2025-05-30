'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const fuelConsumptionUnits: Record<string, number> = {
  "Miles per gallon (US)": 1,
  "Miles per gallon (UK)": 1.20095,
  "Liters per 100 kilometers": 235.215 / 100, // This unit requires special handling; we approximate here
  "Kilometers per liter": 0.425144,
  "Gallons per 100 miles": 100 / 235.215,
};

const FuelConsumptionConverterPage: React.FC = () => {
  // Since some units (like L/100km) are inverse measures, here’s a helper for accurate conversions:

  const convertFuelConsumption = (value: number, from: string, to: string): number => {
    if (value === 0) return 0;
    
    // Convert input to miles per gallon (US) as base
    let mpgUS: number;

    switch(from) {
      case "Miles per gallon (US)":
        mpgUS = value;
        break;
      case "Miles per gallon (UK)":
        mpgUS = value / 1.20095;
        break;
      case "Liters per 100 kilometers":
        mpgUS = 235.215 / value;
        break;
      case "Kilometers per liter":
        mpgUS = value * 2.35215;
        break;
      case "Gallons per 100 miles":
        mpgUS = 100 / value;
        break;
      default:
        return NaN;
    }

    // Convert base mpgUS to target unit
    switch(to) {
      case "Miles per gallon (US)":
        return mpgUS;
      case "Miles per gallon (UK)":
        return mpgUS * 1.20095;
      case "Liters per 100 kilometers":
        return 235.215 / mpgUS;
      case "Kilometers per liter":
        return mpgUS / 2.35215;
      case "Gallons per 100 miles":
        return 100 / mpgUS;
      default:
        return NaN;
    }
  };

  return (
    <ReusableConverter
      heading="Fuel Consumption Converter"
      units={Object.keys(fuelConsumptionUnits)}
      convert={convertFuelConsumption}
    />
  );
};

export default FuelConsumptionConverterPage;
