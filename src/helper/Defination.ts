// src/helper/Defination.ts

/**
 * For each unit key, a list of definition entries.
 * Each entry has: unit name, description, and an example.
 */
export type DefinitionEntry = {
  unit: string;
  description: string;
  example: string;
};

const Defination: Record<string, DefinitionEntry[]> = {
  meter: [
    {
      unit: "meter",
      description: "The metre is the base unit of length in the SI system.",
      example: "1 meter = 100 centimeters",
    },
    // …add more entries for 'meter' if desired…
  ],
  kilogram: [
    {
      unit: "kilogram",
      description: "The kilogram is the SI base unit of mass.",
      example: "1 kilogram = 1000 grams",
    },
  ],
  second: [
    {
      unit: "second",
      description: "The second is the SI base unit of time.",
      example: "1 second = 1000 milliseconds",
    },
  ],
  // …add more unit definition arrays keyed by unit name…
};

// Export as default so you can import it with a default import
export default Defination;
