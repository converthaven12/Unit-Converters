// File: src/Helper/conversionFactors.ts

// A map of each unit to its value in a “base” unit.
// Feel free to extend this with any additional units you need.
export const conversionFactors: Record<string, number> = {
  // Length
  meter: 1,
  kilometer: 1000,
  centimeter: 0.01,
  millimeter: 0.001,
  mile: 1609.344,
  yard: 0.9144,
  foot: 0.3048,
  inch: 0.0254,

  // Mass
  kilogram: 1,
  gram: 0.001,
  milligram: 0.000001,
  pound: 0.45359237,
  ounce: 0.0283495231,

  // Time
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,

  // Add more categories as needed…
};

// A helper function to convert between any two units.
export function convert(
  value: number,
  from: string,
  to: string
): number {
  const fromFactor = conversionFactors[from];
  const toFactor = conversionFactors[to];
  if (fromFactor === undefined || toFactor === undefined) {
    throw new Error(
      `Unknown unit: ${from} or ${to}`
    );
  }
  return (value * fromFactor) / toFactor;
}
