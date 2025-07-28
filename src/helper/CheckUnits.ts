// src/helper/CheckUnits.ts

/**
 * A list of all base units that your converters support.
 * Adjust this array to match the keys in your helper/Units.ts file.
 */
const checkUnits = [
  "Meter",
  "Kilometer",
  "Mile",
  "Yard",
  "Foot",
  "Inch",
  // …add all other unit keys here…
] as const;

// Export it as the default module export
export default checkUnits;
