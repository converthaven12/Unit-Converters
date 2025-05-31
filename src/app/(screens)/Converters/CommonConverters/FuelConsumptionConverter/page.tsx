'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const fuelConsumptionUnits: Record<string, number> = {
  // Distance per volume (base unit: miles per gallon US)
  "Miles per gallon (US)": 1,
  "Miles per gallon (UK)": 1.20095,            // 1 mpg(UK) ≈ 1.20095 mpg(US)
  "Kilometers per liter": 2.35215,             // 1 km/L ≈ 2.35215 mpg(US)
  "Meter per liter": 2352.15,                   // 1 m/L = 0.001 km/L * 2352.15 (conversion factor)
  "Mile per liter": 0.264172,                   // 1 mi/L ≈ 0.264172 mpg(US)

  // Volume per distance (inverse units, base unit: gallons per 100 miles US)
  "Liters per 100 kilometers": 1 / 235.215,    // Convert L/100km to mpg(US) requires inversion
  "Gallons per 100 miles (US)": 1 / 100,       // base for volume per distance is gal/100mi
  "Gallons per 100 miles (UK)": 1 / 120.095,   // UK gallon per 100 mi approx

  // Additional:
  "Kilometer per gallon (US)": 0.425144,       // km/gal(US)
  "Nautical mile per gallon (US)": 0.23074,    // nm/gal(US)
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
