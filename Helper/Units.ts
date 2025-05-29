const unitMaps: Record<string, Record<string, number>> = {
  Length: {
    Meter: 1,
    Kilometer: 1000,
    Centimeter: 0.01,
    Millimeter: 0.001,
    Inch: 0.0254,
    Foot: 0.3048,
    Yard: 0.9144,
    Mile: 1609.34,
  },
  Volume: {
    Liter: 1,
    Milliliter: 0.001,
    CubicMeter: 1000,
    Gallon: 3.78541,
    Pint: 0.473176,
  },
  Area: {
    SquareMeter: 1,
    SquareKilometer: 1e6,
    SquareCentimeter: 0.0001,
    Hectare: 10000,
    Acre: 4046.86,
  },
  Weight: {
    Kilogram: 1,
    Gram: 0.001,
    Milligram: 0.000001,
    Pound: 0.453592,
    Ounce: 0.0283495,
  },
  Time: {
    Second: 1,
    Minute: 60,
    Hour: 3600,
    Day: 86400,
  },
};

export default unitMaps;
