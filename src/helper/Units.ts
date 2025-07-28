// src/helper/Units.ts

/**
 * Maps each unit key to its factor relative to a base unit (e.g. meter).
 * The converter logic multiplies by `Units[from]` then divides by `Units[to]`.
 */
const Units: Record<string, number> = {
  Meter: 1,
  Kilometer: 1000,
  Mile: 1609.34,
  Yard: 0.9144,
  Foot: 0.3048,
  Inch: 0.0254,
  // …all the other unit factors…
};

// Export as the default module export
export default Units;
