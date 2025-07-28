/**
 * A mapping of category keys to lists of menu items.
 * Each item has a label and a path.
 */
export const menus: Record<string, { label: string; path: string }[]> = {
  Length: [
    { label: "Meter → Kilometer", path: "/converters/length/meter-to-kilometer" },
    // …your other length links…
  ],
  Weight: [
    { label: "Kilogram → Gram", path: "/converters/weight/kilogram-to-gram" },
    // …etc…
  ],
  // …other categories…
};

/**
 * Options for the site‑wide dropdown search
 */
export const DropDownOptions = [
  { label: "Length converters", path: "/converters/length" },
  { label: "Weight converters", path: "/converters/weight" },
  // …etc…
];

/**
 * Quick “common conversions” shown on the home page
 */
export const CommonConversions = [
  { label: "Celsius ↔ Fahrenheit", path: "/converters/temperature/celsius-to-fahrenheit" },
  // …etc…
];

// Make sure there is at least one export at top-level (above), so this file is a module
