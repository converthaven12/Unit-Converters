// Helper/conversionFactors.ts

/**
 * Conversion factors to meters for each unit.
 * All values here are “how many meters in one <unit>”.
 */
export const conversionFactors: Record<string, number> = {
  Mile: 1609.344,
  Km:   1000,
  Cm:   0.01,
  Inch: 0.0254,
  Foot: 0.3048,
  Yard: 0.9144,
  // …add the rest of your 70+ unit keys here
};

/**
 * Convert a numeric value from one unit to another.
 * @param value The quantity in the source unit.
 * @param from  The source unit key.
 * @param to    The target unit key.
 * @returns     The converted quantity.
 */
export function convert(value: number, from: string, to: string): number {
  const inMeters = value * conversionFactors[from];
  return inMeters / conversionFactors[to];
}
