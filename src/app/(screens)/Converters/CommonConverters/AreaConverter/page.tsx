'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const areaUnits: Record<string, number> = {
  "Square Millimeter": 1e-6,
  "Square Centimeter": 1e-4,
  "Square Meter": 1,
  "Square Kilometer": 1e6,
  "Hectare": 1e4,
  "Are": 100,                     // 1 are = 100 m²
  "Acre": 4046.8564224,
  "Square Mile": 2.59e6,
  "Square Yard": 0.836127,
  "Square Foot": 0.092903,
  "Square Inch": 0.00064516,
  "Barn": 1e-28,
  "Square Rod": 25.2929,
  "Square Chain": 404.686,
  "Square Micrometer": 1e-12,
  "Square Nanometer": 1e-18,
  "Square Hectometer": 1e4,       // 100 m * 100 m = 10,000 m²
  "Square Dekameter": 100,        // 10 m * 10 m
  "Square Decimeter": 0.01,       // 0.1 m * 0.1 m
  "Square Mile (US Survey)": 2589988.110336, 
  "Square Foot (US Survey)": 0.09290304,
  "Circular Inch": 0.0005067075,  // π * (0.5 in)^2
  "Township": 9.295e6,            // 6 miles × 6 miles = 36 sq miles × 2.59e6 m²
  "Section": 2589988.110336,      // 1 square mile
  "Acre (US Survey)": 4046.87261,
  "Rood": 1011.7141056,           // 1/4 acre
  "Square Rod (US Survey)": 25.29285264,
  "Square Perch": 25.2929,        // same as square rod
  "Square Pole": 25.2929,         // same as square rod
  "Square Mil": 6.4516e-10,       // 1 mil = 1/1000 inch, squared
  "Circular Mil": 5.067e-10,      // π * (0.5 mil)^2
  "Homestead": 6.471e6,           // 160 acres
  "Sabin": 0.092903,              // 1 square foot, often used in acoustics
  "Arpent": 3418.94,              // French unit
  "Cuerda": 3930,                 // Puerto Rican acre approx
  "Plaza": 628.32,                // variable, approx 25 m × 25 m
  "Varas Castellanas Cuad": 0.698896, // 1 vara ≈ 0.8359 m, squared
  "Varas Conuqueras Cuad": 698.896,    // 1000 × squared vara
  "Electron Cross Section": 1e-20,     // Approximate value in m²
};


const AreaConverterPage: React.FC = () => {
  const convertArea = (value: number, from: string, to: string): number => {
    const fromFactor = areaUnits[from];
    const toFactor = areaUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Area Converter"
      units={Object.keys(areaUnits)}
      convert={convertArea}
    />
  );
};

export default AreaConverterPage;
