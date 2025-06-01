import { Currency, Volume } from "lucide-react";

export type MenuItem = {
  label: string;
  path: string;
};

type Menus = {
  [key: string]: MenuItem[];
};

export const menus: Menus = {
  CommonConversions: [
    { label: "cm to inches", path: "/Converters/CommonConversions/CmToInches" },
    { label: "inches to cm", path: "/Converters/CommonConversions/InchesToCm" },

    { label: "Kg to lbs", path: "/Converters/WeightAndMass/KgToLbs" },
    { label: "lbs to kg", path: "/Converters/WeightAndMass/LbsToKg" },

    {
      label: "Celsius to Fahrenheit",
      path: "/Converters/CommonConversions/CelsiusToFahrenheit",
    },
    {
      label: "Fahrenheit to Celsius",
      path: "/Converters/CommonConversions/FahrenheitToCelsius",
    },

    { label: "inches to mm", path: "/Converters/CommonConversions/InchesToMm" },
    { label: "mm to inches", path: "/Converters/CommonConversions/MmToInches" },

    {
      label: "meters to feet",
      path: "/Converters/CommonConversions/MetersToFeet",
    },
    {
      label: "feet to meters",
      path: "/Converters/CommonConversions/FeetToMeters",
    },

    { label: "km to miles", path: "/Converters/CommonConversions/KmToMiles" },
    { label: "miles to km", path: "/Converters/CommonConversions/MilesToKm" },

    { label: "cm to feet", path: "/Converters/CommonConversions/CmToFeet" },
    { label: "feet to cm", path: "/Converters/CommonConversions/FeetToCm" },

    {
      label: "grams to ounces",
      path: "/Converters/WeightAndMass/GramsToOunces",
    },
    {
      label: "ounces to grams",
      path: "/Converters/WeightAndMass/OuncesToGrams",
    },

    {
      label: "inches to feet",
      path: "/Converters/CommonConversions/InchesToFeet",
    },
    {
      label: "feet to inches",
      path: "/Converters/CommonConversions/FeetToInches",
    },

    {
      label: "liters to gallons",
      path: "/Converters/CommonConversions/LitersToGallons",
    },
    {
      label: "gallons to liters",
      path: "/Converters/CommonConversions/GallonsToLiters",
    },

    {
      label: "pounds to ounces",
      path: "/Converters/WeightAndMass/PoundsToOunces",
    },
    {
      label: "ounces to pounds",
      path: "/Converters/WeightAndMass/OuncesToPounds",
    },

    { label: "kph to mph", path: "/Converters/CommonConversions/KphToMph" },
    { label: "mph to kph", path: "/Converters/CommonConversions/MphToKph" },

    {
      label: "acres to square feet",
      path: "/Converters/CommonConversions/AcresToSquareFeet",
    },
    {
      label: "square feet to acres",
      path: "/Converters/CommonConversions/SquareFeetToAcres",
    },

    {
      label: "radians to degrees",
      path: "/Converters/CommonConversions/RadiansToDegrees",
    },
    {
      label: "degrees to radians",
      path: "/Converters/CommonConversions/DegreesToRadians",
    },

    { label: "hp to kw", path: "/Converters/CommonConversions/HpToKw" },
    { label: "kw to hp", path: "/Converters/CommonConversions/KwToHp" },

    {
      label: "meters to yards",
      path: "/Converters/CommonConversions/MetersToYards",
    },
    {
      label: "yards to meters",
      path: "/Converters/CommonConversions/YardsToMeters",
    },

    { label: "mL to cups", path: "/Converters/CommonConversions/MlToCups" },
    { label: "cups to mL", path: "/Converters/CommonConversions/CupsToMl" },
  ],

  LengthUnits: [
    { label: "cm to inches", path: "/Converters/CommonConversions/CmToInches" },
    { label: "inches to cm", path: "/Converters/CommonConversions/InchesToCm" },

    {
      label: "inches to feet",
      path: "/Converters/CommonConversions/InchesToFeet",
    },
    {
      label: "feet to inches",
      path: "/Converters/CommonConversions/FeetToInches",
    },

    {
      label: "meters to feet",
      path: "/Converters/CommonConversions/MetersToFeet",
    },
    {
      label: "feet to meters",
      path: "/Converters/CommonConversions/FeetToMeters",
    },

    { label: "km to miles", path: "/Converters/CommonConversions/KmToMiles" },
    { label: "miles to km", path: "/Converters/CommonConversions/MilesToKm" },

    { label: "cm to feet", path: "/Converters/CommonConversions/CmToFeet" },
    { label: "feet to cm", path: "/Converters/CommonConversions/FeetToCm" },

    {
      label: "inches to feet",
      path: "/Converters/CommonConversions/InchesToFeet",
    },
    {
      label: "feet to inches",
      path: "/Converters/CommonConversions/FeetToInches",
    },

    {
      label: "meters to yards",
      path: "/Converters/CommonConversions/MetersToYards",
    },
    {
      label: "yards to meters",
      path: "/Converters/CommonConversions/YardsToMeters",
    },
    // need to add these
    {
      label: "mm to cm",
      path: "/Converters/LengthUnits/MillimetersToCm",
    },
    {
      label: "cm to mm",
      path: "/Converters/LengthUnits/CmToMillimeters",
    },
    {
      label: "cm to m",
      path: "/Converters/LengthUnits/CmToMeters",
    },
    {
      label: "m to cm",
      path: "/Converters/LengthUnits/MetersToCm",
    },
    {
      label: "cm to km",
      path: "/Converters/LengthUnits/CmToKilometers",
    },
    {
      label: "km to cm",
      path: "/Converters/LengthUnits/KilometersToCm",
    },
    {
      label: "mm to feet",
      path: "/Converters/LengthUnits/MillimetersToFeet",
    },
    {
      label: "feet to mm",
      path: "/Converters/LengthUnits/FeetToMillimeters",
    },
    {
      label: "meter to miles",
      path: "/Converters/LengthUnits/MetersToMiles",
    },
    {
      label: "miles to meter",
      path: "/Converters/LengthUnits/MilesToMeters",
    },
    {
      label: "feet to miles",
      path: "/Converters/LengthUnits/FeetToMiles",
    },
    {
      label: "miles to feet",
      path: "/Converters/LengthUnits/MilesToFeet",
    },
    {
      label: "yard to feet",
      path: "/Converters/LengthUnits/YardsToFeet",
    },
    {
      label: "feet to yard",
      path: "/Converters/LengthUnits/FeetToYards",
    },
    {
      label: "inches to meters",
      path: "/Converters/LengthUnits/InchesToMeters",
    },
    {
      label: "meters to inches",
      path: "/Converters/LengthUnits/MetersToInches",
    },
    {
      label: "mm to m",
      path: "/Converters/LengthUnits/MillimetersToMeters",
    },
    {
      label: "m to mm",
      path: "/Converters/LengthUnits/MetersToMillimeters",
    },
    {
      label: "km to m",
      path: "/Converters/LengthUnits/KilometersToMeters",
    },
    {
      label: "m to km",
      path: "/Converters/LengthUnits/MetersToKilometers",
    },
    {
      label: "inches to yard",
      path: "/Converters/LengthUnits/InchesToYards",
    },
    {
      label: "yard to inches",
      path: "/Converters/LengthUnits/YardsToInches",
    },
    {
      label: "yard to miles",
      path: "/Converters/LengthUnits/YardsToMiles",
    },
    {
      label: "miles to yard",
      path: "/Converters/LengthUnits/MilesToYards",
    },
  ],
  VolumeUnits: [
    {
      label: "liters to gallons",
      path: "/Converters/VolumeUnits/LitersToGallons",
    },
    {
      label: "gallons to liters",
      path: "/Converters/VolumeUnits/GallonsToLiters",
    },

    { label: "ml to cups", path: "/Converters/VolumeUnits/MlToCups" },
    { label: "cups to ml", path: "/Converters/VolumeUnits/CupsToMl" },

    {
      label: "tablespoons to cups",
      path: "/Converters/VolumeUnits/TablespoonsToCups",
    },
    {
      label: "cups to tablespoons",
      path: "/Converters/VolumeUnits/CupsToTablespoons",
    },

    { label: "ml to l", path: "/Converters/VolumeUnits/MlToL" },
    { label: "l to ml", path: "/Converters/VolumeUnits/LToMl" },

    { label: "teaspoon to ml", path: "/Converters/VolumeUnits/TeaspoonToMl" },
    { label: "ml to teaspoon", path: "/Converters/VolumeUnits/MlToTeaspoon" },

    {
      label: "liters to quarts",
      path: "/Converters/VolumeUnits/LitersToQuarts",
    },
    {
      label: "quarts to liters",
      path: "/Converters/VolumeUnits/QuartsToLiters",
    },

    { label: "cups to liters", path: "/Converters/VolumeUnits/CupsToLiters" },
    { label: "liters to cups", path: "/Converters/VolumeUnits/LitersToCups" },

    { label: "pint to ml", path: "/Converters/VolumeUnits/PintToMl" },
    { label: "ml to pint", path: "/Converters/VolumeUnits/MlToPint" },

    { label: "cc to ml", path: "/Converters/VolumeUnits/CcToMl" },
    { label: "ml to cc", path: "/Converters/VolumeUnits/MlToCc" },

    { label: "cc to oz", path: "/Converters/VolumeUnits/CcToOz" },
    { label: "oz to cc", path: "/Converters/VolumeUnits/OzToCc" },

    {
      label: "cubic feet to gallon",
      path: "/Converters/VolumeUnits/CubicFeetToGallon",
    },
    {
      label: "gallon to cubic feet",
      path: "/Converters/VolumeUnits/GallonToCubicFeet",
    },

    {
      label: "cubic feet to cubic yards",
      path: "/Converters/VolumeUnits/CubicFeetToCubicYards",
    },
    {
      label: "cubic yards to cubic feet",
      path: "/Converters/VolumeUnits/CubicYardsToCubicFeet",
    },

    {
      label: "cubic inches to gallons",
      path: "/Converters/VolumeUnits/CubicInchesToGallons",
    },
    {
      label: "gallons to cubic inches",
      path: "/Converters/VolumeUnits/GallonsToCubicInches",
    },

    {
      label: "cubic inches to liters",
      path: "/Converters/VolumeUnits/CubicInchesToLiters",
    },
    {
      label: "liters to cubic inches",
      path: "/Converters/VolumeUnits/LitersToCubicInches",
    },

    { label: "cups to quart", path: "/Converters/VolumeUnits/CupsToQuart" },
    { label: "quart to cup", path: "/Converters/VolumeUnits/QuartToCup" },

    { label: "cups to gallon", path: "/Converters/VolumeUnits/CupsToGallon" },
    { label: "gallon to cups", path: "/Converters/VolumeUnits/GallonsToCups" },

    { label: "pint to cups", path: "/Converters/VolumeUnits/PintToCups" },
    { label: "cups to pint", path: "/Converters/VolumeUnits/CupsToPint" },

    {
      label: "quart to gallon",
      path: "/Converters/VolumeUnits/QuartsToGallon",
    },
    {
      label: "gallon to quart",
      path: "/Converters/VolumeUnits/GallonsToQuarts",
    },

    { label: "gallon to ml", path: "/Converters/VolumeUnits/GallonToMl" },
    { label: "ml to gallon", path: "/Converters/VolumeUnits/MlToGallon" },

    { label: "liter to ounces", path: "/Converters/VolumeUnits/LiterToOunces" },
    { label: "ounces to liter", path: "/Converters/VolumeUnits/OuncesToLiter" },

    { label: "pints to liters", path: "/Converters/VolumeUnits/PintsToLiters" },
    { label: "liters to pints", path: "/Converters/VolumeUnits/LitersToPints" },

    { label: "pints to gallon", path: "/Converters/VolumeUnits/PintsToGallon" },
    { label: "gallon to pints", path: "/Converters/VolumeUnits/GallonToPints" },
  ],

  AreaUnits: [
    {
      label: "acres to square feet",
      path: "/Converters/CommonConversions/AcresToSquareFeet",
    },
    {
      label: "square feet to acres",
      path: "/Converters/CommonConversions/SquareFeetToAcres",
    },
    {
      label: "hectare to acres",
      path: "/Converters/AreaUnit/HectareToAcres",
    },
    {
      label: "acres to hectare",
      path: "/Converters/AreaUnit/AcresToHectare",
    },
    {
      label: "square feet to square meter",
      path: "/Converters/AreaUnit/SquareFeetToSquareMeter",
    },
    {
      label: "square meter to square feet",
      path: "/Converters/AreaUnit/SquareMeterToSquareFeet",
    },
    {
      label: "acres to square miles",
      path: "/Converters/AreaUnit/AcresToSquareMiles",
    },
    {
      label: "square miles to acres",
      path: "/Converters/AreaUnit/SquareMilesToAcres",
    },
    {
      label: "square feet to square yards",
      path: "/Converters/AreaUnit/SquareFeetToSquareYards",
    },
    {
      label: "square yards to square feet",
      path: "/Converters/AreaUnit/SquareYardsToSquareFeet",
    },
  ],

  EnergyUnits: [
    {
      label: "kJ to kcal",
      path: "/Converters/EnergyUnits/KJToKcal",
    },
    {
      label: "kcal to kJ",
      path: "/Converters/EnergyUnits/KcalToKJ",
    },
    {
      label: "kcal to cal",
      path: "/Converters/EnergyUnits/KcalToCal",
    },
    {
      label: "cal to kcal",
      path: "/Converters/EnergyUnits/CalToKcal",
    },
    {
      label: "J to kJ",
      path: "/Converters/EnergyUnits/JToKJ",
    },
    {
      label: "kJ to J",
      path: "/Converters/EnergyUnits/KJToJ",
    },
    {
      label: "cal to J",
      path: "/Converters/EnergyUnits/CalToJ",
    },
    {
      label: "J to cal",
      path: "/Converters/EnergyUnits/JToCal",
    },
    {
      label: "ft lb to Nm",
      path: "/Converters/EnergyUnits/FtLbToNm",
    },
    {
      label: "Nm to ft lb",
      path: "/Converters/EnergyUnits/NmToFtLb",
    },
  ],

  ForceUnits: [
    {
      label: "kg to newtons",
      path: "/Converters/Force/KgToNewtons",
    },
    {
      label: "newtons to kg",
      path: "/Converters/Force/NewtonsToKg",
    },
    {
      label: "newtons to lbs",
      path: "/Converters/Force/NewtonsToLbs",
    },
    {
      label: "lbs to newtons",
      path: "/Converters/Force/LbsToNewtons",
    },
  ],

  SpeedUnits: [
    { label: "mph to kph", path: "/Converters/CommonConversions/MphToKph" },
    { label: "kph to mph", path: "/Converters/CommonConversions/KphToMph" },

    {
      label: "meters per second to miles per hour",
      path: "/Converters/SpeedUnits/MetersPerSecondToMilesPerHour",
    },
    {
      label: "miles per hour to meters per second",
      path: "/Converters/SpeedUnits/MilesPerHourToMetersPerSecond",
    },

    {
      label: "knot to mph",
      path: "/Converters/SpeedUnits/KnotToMph",
    },
    {
      label: "mph to knot",
      path: "/Converters/SpeedUnits/MphToKnot",
    },

    {
      label: "feet per second to mph",
      path: "/Converters/SpeedUnits/FeetPerSecondToMph",
    },
    {
      label: "mph to feet per second",
      path: "/Converters/SpeedUnits/MphToFeetPerSecond",
    },

    {
      label: "meters per second to kph",
      path: "/Converters/SpeedUnits/MetersPerSecondToKph",
    },
    {
      label: "kph to meters per second",
      path: "/Converters/SpeedUnits/KphToMetersPerSecond",
    },
  ],

  DataStorageUnits: [
    {
      label: "MB to GB",
      path: "/Converters/DataStorageUnits/MBToGB",
    },
    {
      label: "GB to MB",
      path: "/Converters/DataStorageUnits/GBToMB",
    },
    {
      label: "KB to MB",
      path: "/Converters/DataStorageUnits/KBToMB",
    },
    {
      label: "MB to KB",
      path: "/Converters/DataStorageUnits/MBToKB",
    },
    {
      label: "KB to GB",
      path: "/Converters/DataStorageUnits/KBToGB",
    },
    {
      label: "GB to KB",
      path: "/Converters/DataStorageUnits/GBToKB",
    },
  ],

  // CurrencyUnits: [
  //   {
  //     label: "EUR to USD",
  //     path: "/Converters/Currency/EURToUSD",
  //   },
  //   {
  //     label: "USD to EUR",
  //     path: "/Converters/Currency/USDToEUR",
  //   },
  //   {
  //     label: "GBP to USD",
  //     path: "/Converters/Currency/GBPToUSD",
  //   },
  //   {
  //     label: "USD to GBP",
  //     path: "/Converters/Currency/USDToGBP",
  //   },
  //   {
  //     label: "MXN to USD",
  //     path: "/Converters/Currency/MXNToUSD",
  //   },
  //   {
  //     label: "USD to MXN",
  //     path: "/Converters/Currency/USDToMXN",
  //   },
  //   {
  //     label: "AUD to USD",
  //     path: "/Converters/Currency/AUDToUSD",
  //   },
  //   {
  //     label: "USD to AUD",
  //     path: "/Converters/Currency/USDToAUD",
  //   },
  //   {
  //     label: "BRL to USD",
  //     path: "/Converters/Currency/BRLToUSD",
  //   },
  //   {
  //     label: "USD to BRL",
  //     path: "/Converters/Currency/USDToBRL",
  //   },
  //   {
  //     label: "CAD to USD",
  //     path: "/Converters/Currency/CADToUSD",
  //   },
  //   {
  //     label: "USD to CAD",
  //     path: "/Converters/Currency/USDToCAD",
  //   },
  //   {
  //     label: "CHF to USD",
  //     path: "/Converters/Currency/CHFToUSD",
  //   },
  //   {
  //     label: "USD to CHF",
  //     path: "/Converters/Currency/USDToCHF",
  //   },
  //   {
  //     label: "CNY to USD",
  //     path: "/Converters/Currency/CNYToUSD",
  //   },
  //   {
  //     label: "USD to CNY",
  //     path: "/Converters/Currency/USDToCNY",
  //   },
  //   {
  //     label: "INR to USD",
  //     path: "/Converters/Currency/INRToUSD",
  //   },
  //   {
  //     label: "USD to INR",
  //     path: "/Converters/Currency/USDToINR",
  //   },
  //   {
  //     label: "JPY to USD",
  //     path: "/Converters/Currency/JPYToUSD",
  //   },
  //   {
  //     label: "USD to JPY",
  //     path: "/Converters/Currency/USDToJPY",
  //   },
  //   {
  //     label: "RUB to USD",
  //     path: "/Converters/Currency/RUBToUSD",
  //   },
  //   {
  //     label: "USD to RUB",
  //     path: "/Converters/Currency/USDToRUB",
  //   },
  //   {
  //     label: "HKD to USD",
  //     path: "/Converters/Currency/HKDToUSD",
  //   },
  //   {
  //     label: "USD to HKD",
  //     path: "/Converters/Currency/USDToHKD",
  //   },
  //   {
  //     label: "BTC to USD",
  //     path: "/Converters/Currency/BTCToUSD",
  //   },
  //   {
  //     label: "USD to BTC",
  //     path: "/Converters/Currency/USDToBTC",
  //   },
  //   {
  //     label: "AUD to BTC",
  //     path: "/Converters/Currency/AUDToBTC",
  //   },
  //   {
  //     label: "BTC to AUD",
  //     path: "/Converters/Currency/BTCToAUD",
  //   },
  //   {
  //     label: "BRL to BTC",
  //     path: "/Converters/Currency/BRLToBTC",
  //   },
  //   {
  //     label: "BTC to BRL",
  //     path: "/Converters/Currency/BTCToBRL",
  //   },
  //   {
  //     label: "CAD to BTC",
  //     path: "/Converters/Currency/CADToBTC",
  //   },
  //   {
  //     label: "BTC to CAD",
  //     path: "/Converters/Currency/BTCToCAD",
  //   },
  //   {
  //     label: "CHF to BTC",
  //     path: "/Converters/Currency/CHFToBTC",
  //   },
  //   {
  //     label: "BTC to CHF",
  //     path: "/Converters/Currency/BTCToCHF",
  //   },
  //   {
  //     label: "EUR to BTC",
  //     path: "/Converters/Currency/EURToBTC",
  //   },
  //   {
  //     label: "BTC to EUR",
  //     path: "/Converters/Currency/BTCToEUR",
  //   },
  //   {
  //     label: "GBP to BTC",
  //     path: "/Converters/Currency/GBPToBTC",
  //   },
  //   {
  //     label: "BTC to GBP",
  //     path: "/Converters/Currency/BTCToGBP",
  //   },
  //   {
  //     label: "INR to BTC",
  //     path: "/Converters/Currency/INRToBTC",
  //   },
  //   {
  //     label: "BTC to INR",
  //     path: "/Converters/Currency/BTCToINR",
  //   },
  //   {
  //     label: "JPY to BTC",
  //     path: "/Converters/Currency/JPYToBTC",
  //   },
  //   {
  //     label: "BTC to JPY",
  //     path: "/Converters/Currency/BTCToJPY",
  //   },
  //   {
  //     label: "MXN to BTC",
  //     path: "/Converters/Currency/MXNToBTC",
  //   },
  //   {
  //     label: "BTC to MXN",
  //     path: "/Converters/Currency/BTCToMXN",
  //   },
  //   {
  //     label: "RUB to BTC",
  //     path: "/Converters/Currency/RUBToBTC",
  //   },
  //   {
  //     label: "BTC to RUB",
  //     path: "/Converters/Currency/BTCToRUB",
  //   },
  // ],

  TemperatureUnits: [
    {
      label: "Celsius to Fahrenheit",
      path: "/Converters/CommonConversions/CelsiusToFahrenheit",
    },
    {
      label: "Fahrenheit to Celsius",
      path: "/Converters/CommonConversions/FahrenheitToCelsius",
    },

    {
      label: "Celsius to Kelvin",
      path: "/Converters/TemperatureUnits/CelsiusToKelvin",
    },
    {
      label: "Kelvin to Celsius",
      path: "/Converters/TemperatureUnits/KelvinToCelsius",
    },
    {
      label: "Fahrenheit to Kelvin",
      path: "/Converters/TemperatureUnits/FahrenheitToKelvin",
    },
    {
      label: "Kelvin to Fahrenheit",
      path: "/Converters/TemperatureUnits/KelvinToFahrenheit",
    },
  ],

  PressureUnits: [
    {
      label: "bar to psi",
      path: "/Converters/PressureUnits/BarToPsi",
    },
    {
      label: "psi to bar",
      path: "/Converters/PressureUnits/PsiToBar",
    },
    {
      label: "kpa to psi",
      path: "/Converters/PressureUnits/KpaToPsi",
    },
    {
      label: "psi to kpa",
      path: "/Converters/PressureUnits/PsiToKpa",
    },
  ],

  PowerUnits: [
    { label: "hp to kw", path: "/Converters/CommonConversions/HpToKw" },
    { label: "kw to hp", path: "/Converters/CommonConversions/KwToHp" },

    {
      label: "hp to watts",
      path: "/Converters/PowerUnits/HpToWatts",
    },
    {
      label: "watts to hp",
      path: "/Converters/PowerUnits/WattsToHp",
    },
    {
      label: "BTU to Ton",
      path: "/Converters/PowerUnits/BTUToTon",
    },
    {
      label: "Ton to BTU",
      path: "/Converters/PowerUnits/TonToBTU",
    },
  ],

  TimeUnits: [
    {
      label: "minutes to hours",
      path: "/Converters/TimeUnits/MinutesToHours",
    },
    {
      label: "hours to minutes",
      path: "/Converters/TimeUnits/HoursToMinutes",
    },
    {
      label: "hours to days",
      path: "/Converters/TimeUnits/HoursToDays",
    },
    {
      label: "days to hours",
      path: "/Converters/TimeUnits/DaysToHours",
    },
    {
      label: "seconds to days",
      path: "/Converters/TimeUnits/SecondsToDays",
    },
    {
      label: "days to seconds",
      path: "/Converters/TimeUnits/DaysToSeconds",
    },
    {
      label: "minutes to days",
      path: "/Converters/TimeUnits/MinutesToDays",
    },
    {
      label: "days to minutes",
      path: "/Converters/TimeUnits/DaysToMinutes",
    },
    {
      label: "days to months",
      path: "/Converters/TimeUnits/DaysToMonths",
    },
    {
      label: "months to days",
      path: "/Converters/TimeUnits/MonthsToDays",
    },
    {
      label: "days to years",
      path: "/Converters/TimeUnits/DaysToYears",
    },
    {
      label: "years to days",
      path: "/Converters/TimeUnits/YearsToDays",
    },
    {
      label: "minutes to seconds",
      path: "/Converters/TimeUnits/MinutesToSeconds",
    },
    {
      label: "seconds to minutes",
      path: "/Converters/TimeUnits/SecondsToMinutes",
    },
    {
      label: "milliseconds to seconds",
      path: "/Converters/TimeUnits/MillisecondsToSeconds",
    },
    {
      label: "seconds to milliseconds",
      path: "/Converters/TimeUnits/SecondsToMilliseconds",
    },
  ],

  AngleUnits: [
    {
      label: "radians to degrees",
      path: "/Converters/CommonConversions/RadiansToDegrees",
    },
    {
      label: "degrees to radians",
      path: "/Converters/CommonConversions/DegreesToRadians",
    },
  ],

  NumberUnits: [
    {
      label: "binary to decimal",
      path: "/Converters/NumberUnits/BinaryToDecimal",
    },
    {
      label: "decimal to binary",
      path: "/Converters/NumberUnits/DecimalToBinary",
    },
    {
      label: "decimal to hex",
      path: "/Converters/NumberUnits/DecimalToHex",
    },
    {
      label: "hex to decimal",
      path: "/Converters/NumberUnits/HexToDecimal",
    },
    {
      label: "binary to hex",
      path: "/Converters/NumberUnits/BinaryToHex",
    },
    {
      label: "hex to binary",
      path: "/Converters/NumberUnits/HexToBinary",
    },
  ],
  WeightAndMass: [
    { label: "Kg to lbs", path: "/Converters/WeightAndMass/KgToLbs" },
    { label: "lbs to kg", path: "/Converters/WeightAndMass/LbsToKg" },
    {
      label: "grams to ounces",
      path: "/Converters/WeightAndMass/GramsToOunces",
    },
    {
      label: "ounces to grams",
      path: "/Converters/WeightAndMass/OuncesToGrams",
    },
    {
      label: "pounds to ounces",
      path: "/Converters/WeightAndMass/PoundsToOunces",
    },
    {
      label: "ounces to pounds",
      path: "/Converters/WeightAndMass/OuncesToPounds",
    },
    {
      label: "grams to pounds",
      path: "/Converters/WeightAndMass/GramsToPounds",
    },
    {
      label: "pounds to grams",
      path: "/Converters/WeightAndMass/PoundsToGrams",
    },
    { label: "g to kg", path: "/Converters/WeightAndMass/GramToKg" },
    { label: "kg to g", path: "/Converters/WeightAndMass/KgToGram" },
    {
      label: "grams to milligrams",
      path: "/Converters/WeightAndMass/GramsToMilligrams",
    },
    {
      label: "milligrams to grams",
      path: "/Converters/WeightAndMass/MilligramsToGrams",
    },
    { label: "oz to kg", path: "/Converters/WeightAndMass/OzToKg" },
    { label: "kg to oz", path: "/Converters/WeightAndMass/KgToOz" },
    { label: "lbs to stone", path: "/Converters/WeightAndMass/LbsToStone" },
    { label: "stone to lbs", path: "/Converters/WeightAndMass/StoneToLbs" },
    { label: "ton to lbs", path: "/Converters/WeightAndMass/TonToLbs" },
    { label: "lbs to ton", path: "/Converters/WeightAndMass/LbsToTon" },
  ],

  CommonConverters: [
    {
      label: "Length Converter",
      path: "/Converters/CommonConverters/LengthConverter",
    },
    {
      label: "Weight and Mass Converter",
      path: "/Converters/CommonConverters/WeightAndMassConverter",
    },
    {
      label: "Volume Converter",
      path: "/Converters/CommonConverters/VolumeConverter",
    },
    {
      label: "Temperature Converter",
      path: "/Converters/CommonConverters/TemperatureConverter",
    },
    {
      label: "Area Converter",
      path: "/Converters/CommonConverters/AreaConverter",
    },
    {
      label: "Pressure Converter",
      path: "/Converters/CommonConverters/PressureConverter",
    },
    {
      label: "Energy Converter",
      path: "/Converters/CommonConverters/EnergyConverter",
    },
    {
      label: "Volume - Dry Converter",
      path: "/Converters/CommonConverters/VolumeDryConverter",
    },
    {
      label: "Case Converter",
      path: "/Converters/CommonConverters/CaseConverter",
    },
    {
      label: "Power Converter",
      path: "/Converters/CommonConverters/PowerConverter",
    },
    {
      label: "Force Converter",
      path: "/Converters/CommonConverters/ForceConverter",
    },
    {
      label: "Time Converter",
      path: "/Converters/CommonConverters/TimeConverter",
    },
    {
      label: "Speed Converter",
      path: "/Converters/CommonConverters/SpeedConverter",
    },
    {
      label: "Angle Converter",
      path: "/Converters/CommonConverters/AngleConverter",
    },
    {
      label: "Fuel Consumption Converter",
      path: "/Converters/CommonConverters/FuelConsumptionConverter",
    },
    {
      label: "Numbers Converter",
      path: "/Converters/CommonConverters/NumbersConverter",
    },
    {
      label: "Data Storage Converter",
      path: "/Converters/CommonConverters/DataStorageConverter",
    },
  ],

  EngineeringConverters: [
    {
      label: "Velocity - Angular Converter",
      path: "/Converters/EngineeringConverters/VelocityAngularConverter",
    },
    {
      label: "Acceleration Converter",
      path: "/Converters/EngineeringConverters/AccelerationConverter",
    },
    {
      label: "Acceleration - Angular Converter",
      path: "/Converters/EngineeringConverters/AccelerationAngularConverter",
    },
    {
      label: "Density Converter",
      path: "/Converters/EngineeringConverters/DensityConverter",
    },
    {
      label: "Specific Volume Converter",
      path: "/Converters/EngineeringConverters/SpecificVolumeConverter",
    },
    {
      label: "Moment of Inertia Converter",
      path: "/Converters/EngineeringConverters/MomentOfInertiaConverter",
    },
    {
      label: "Moment of Force Converter",
      path: "/Converters/EngineeringConverters/MomentOfForceConverter",
    },
    {
      label: "Torque Converter",
      path: "/Converters/EngineeringConverters/TorqueConverter",
    },
  ],

  ElectricityConverters: [
    {
      label: "Charge Converter",
      path: "/Converters/ElectricityConverters/ChargeConverter",
    },
    {
      label: "Linear Charge Density Converter",
      path: "/Converters/ElectricityConverters/LinearChargeDensityConverter",
    },
    {
      label: "Surface Charge Density Converter",
      path: "/Converters/ElectricityConverters/SurfaceChargeDensityConverter",
    },
    {
      label: "Volume Charge Density Converter",
      path: "/Converters/ElectricityConverters/VolumeChargeDensityConverter",
    },
    {
      label: "Current Converter",
      path: "/Converters/ElectricityConverters/CurrentConverter",
    },
    {
      label: "Linear Current Density Converter",
      path: "/Converters/ElectricityConverters/LinearCurrentDensityConverter",
    },
    {
      label: "Surface Current Density Converter",
      path: "/Converters/ElectricityConverters/SurfaceCurrentDensityConverter",
    },
    {
      label: "Electric Field Strength Converter",
      path: "/Converters/ElectricityConverters/ElectricFieldStrengthConverter",
    },
    {
      label: "Electric Potential Converter",
      path: "/Converters/ElectricityConverters/ElectricPotentialConverter",
    },
    {
      label: "Electric Resistance Converter",
      path: "/Converters/ElectricityConverters/ElectricResistanceConverter",
    },
    {
      label: "Electric Resistivity Converter",
      path: "/Converters/ElectricityConverters/ElectricResistivityConverter",
    },
    {
      label: "Electric Conductance Converter",
      path: "/Converters/ElectricityConverters/ElectricConductanceConverter",
    },
    {
      label: "Electric Conductivity Converter",
      path: "/Converters/ElectricityConverters/ElectricConductivityConverter",
    },
    {
      label: "Electrostatic Capacitance",
      path: "/Converters/ElectricityConverters/ElectrostaticCapacitance",
    },
    {
      label: "Inductance Converter",
      path: "/Converters/ElectricityConverters/InductanceConverter",
    },
  ],

  HeatConverters: [
    {
      label: "Fuel Efficiency - Mass Converter",
      path: "/Converters/HeatConverters/FuelEfficiencyMassConverter",
    },
    {
      label: "Fuel Efficiency - Volume Converter",
      path: "/Converters/HeatConverters/FuelEfficiencyVolumeConverter",
    },
    {
      label: "Temperature Interval Converter",
      path: "/Converters/HeatConverters/TemperatureIntervalConverter",
    },
    {
      label: "Thermal Expansion Converter",
      path: "/Converters/HeatConverters/ThermalExpansionConverter",
    },
    {
      label: "Thermal Resistance Converter",
      path: "/Converters/HeatConverters/ThermalResistanceConverter",
    },
    {
      label: "Thermal Conductivity Converter",
      path: "/Converters/HeatConverters/ThermalConductivityConverter",
    },
    {
      label: "Specific Heat Capacity Converter",
      path: "/Converters/HeatConverters/SpecificHeatCapacityConverter",
    },
    {
      label: "Heat Density Converter",
      path: "/Converters/HeatConverters/HeatDensityConverter",
    },
    {
      label: "Heat Flux Density Converter",
      path: "/Converters/HeatConverters/HeatFluxDensityConverter",
    },
    {
      label: "Heat Transfer Coefficient Converter",
      path: "/Converters/HeatConverters/HeatTransferCoefficientConverter",
    },
  ],

  MagnetismConverters: [
    {
      label: "Magnetomotive Force Converter",
      path: "/Converters/MagnetismConverters/MagnetomotiveForceConverter",
    },
    {
      label: "Magnetic Field Strength Converter",
      path: "/Converters/MagnetismConverters/MagneticFieldStrengthConverter",
    },
    {
      label: "Magnetic Flux Converter",
      path: "/Converters/MagnetismConverters/MagneticFluxConverter",
    },
    {
      label: "Magnetic Flux Density Converter",
      path: "/Converters/MagnetismConverters/MagneticFluxDensityConverter",
    },
  ],

  FluidsConverters: [
    {
      label: "Flow Converter",
      path: "/Converters/FluidsConverters/FlowConverter",
    },
    {
      label: "Flow - Mass Converter",
      path: "/Converters/FluidsConverters/FlowMassConverter",
    },
    {
      label: "Flow - Molar Converter",
      path: "/Converters/FluidsConverters/FlowMolarConverter",
    },
    {
      label: "Mass Flux Density Converter",
      path: "/Converters/FluidsConverters/MassFluxDensityConverter",
    },
    {
      label: "Concentration - Molar Converter",
      path: "/Converters/FluidsConverters/ConcentrationMolarConverter",
    },
    {
      label: "Concentration - Solution Converter",
      path: "/Converters/FluidsConverters/ConcentrationSolutionConverter",
    },
    {
      label: "Viscosity - Dynamic Converter",
      path: "/Converters/FluidsConverters/ViscosityDynamicConverter",
    },
    {
      label: "Viscosity - Kinematic Converter",
      path: "/Converters/FluidsConverters/ViscosityKinematicConverter",
    },
    {
      label: "Surface Tension Converter",
      path: "/Converters/FluidsConverters/SurfaceTensionConverter",
    },
    {
      label: "Permeability Converter",
      path: "/Converters/FluidsConverters/PermeabilityConverter",
    },
  ],

  RadiologyConverters: [
    {
      label: "Radiation Converter",
      path: "/Converters/RadiologyConverters/RadiationConverter",
    },
    {
      label: "Radiation-Activity Converter",
      path: "/Converters/RadiologyConverters/RadiationActivityConverter",
    },
    {
      label: "Radiation-Exposure Converter",
      path: "/Converters/RadiologyConverters/RadiationExposureConverter",
    },
    {
      label: "Radiation-Absorbed Dose Converter",
      path: "/Converters/RadiologyConverters/RadiationAbsorbedDoseConverter",
    },
  ],

  LightConverters: [
    {
      label: "Luminance Converter",
      path: "/Converters/LightConverters/LuminanceConverter",
    },
    {
      label: "Luminous Intensity Converter",
      path: "/Converters/LightConverters/LuminousIntensityConverter",
    },
    {
      label: "Illumination Converter",
      path: "/Converters/LightConverters/IlluminationConverter",
    },
    {
      label: "Digital Image Resolution Converter",
      path: "/Converters/LightConverters/DigitalImageResolutionConverter",
    },
    {
      label: "Frequency Wavelength Converter",
      path: "/Converters/LightConverters/FrequencyWavelengthConverter",
    },
  ],

  OtherConverters: [
    {
      label: "Prefixes Converter",
      path: "/Converters/OtherConverters/PrefixesConverter",
    },
    {
      label: "Data Transfer Converter",
      path: "/Converters/OtherConverters/DataTransferConverter",
    },
    {
      label: "Sound Converter",
      path: "/Converters/OtherConverters/SoundConverter",
    },
    {
      label: "Typography Converter",
      path: "/Converters/OtherConverters/TypographyConverter",
    },
    {
      label: "Volume - Lumber Converter",
      path: "/Converters/OtherConverters/VolumeLumberConverter",
    },
  ],
};

export const CommonConversions = [
  { label: "cm to inches", path: "/Converters/CommonConversions/CmToInches" },
  { label: "kg to lbs", path: "/Converters/CommonConversions/KgToLbs" },
  {
    label: "Celsius to Fahrenheit",
    path: "/Converters/CommonConversions/CelsiusToFahrenheit",
  },
  { label: "mm to inches", path: "/Converters/CommonConversions/MmToInches" },
  {
    label: "meters to feet",
    path: "/Converters/CommonConversions/MetersToFeet",
  },
  { label: "km to miles", path: "/Converters/CommonConversions/KmToMiles" },
  { label: "cm to feet", path: "/Converters/CommonConversions/CmToFeet" },
  {
    label: "grams to ounces",
    path: "/Converters/CommonConversions/GramsToOunces",
  },
  {
    label: "inches to feet",
    path: "/Converters/CommonConversions/InchesToFeet",
  },
  {
    label: "liters to gallons",
    path: "/Converters/CommonConversions/LitersToGallons",
  },
  {
    label: "pounds to ounces",
    path: "/Converters/CommonConversions/PoundsToOunces",
  },
  { label: "mph to kph", path: "/Converters/CommonConversions/MphToKph" },
  {
    label: "acres to square feet",
    path: "/Converters/CommonConversions/AcresToSquareFeet",
  },
  {
    label: "radians to degrees",
    path: "/Converters/CommonConversions/RadiansToDegrees",
  },
  { label: "hp to kw", path: "/Converters/CommonConversions/HpToKw" },
  {
    label: "meters to yards",
    path: "/Converters/CommonConversions/MetersToYards",
  },
  { label: "mL to cups", path: "/Converters/CommonConversions/MlToCups" },
  { label: "inches to cm", path: "/Converters/CommonConversions/InchesToCm" },
  { label: "lbs to kg", path: "/Converters/CommonConversions/LbsToKg" },
  {
    label: "Fahrenheit to Celsius",
    path: "/Converters/CommonConversions/FahrenheitToCelsius",
  },
  { label: "inches to mm", path: "/Converters/CommonConversions/InchesToMm" },
  {
    label: "feet to meters",
    path: "/Converters/CommonConversions/FeetToMeters",
  },
  { label: "miles to km", path: "/Converters/CommonConversions/MilesToKm" },
  { label: "feet to cm", path: "/Converters/CommonConversions/FeetToCm" },
  {
    label: "ounces to grams",
    path: "/Converters/CommonConversions/OuncesToGrams",
  },
  {
    label: "feet to inches",
    path: "/Converters/CommonConversions/FeetToInches",
  },
  {
    label: "gallons to liters",
    path: "/Converters/CommonConversions/GallonsToLiters",
  },
  {
    label: "ounces to pounds",
    path: "/Converters/CommonConversions/OuncesToPounds",
  },
  { label: "kph to mph", path: "/Converters/CommonConversions/KphToMph" },
  {
    label: "square feet to acres",
    path: "/Converters/CommonConversions/SquareFeetToAcres",
  },
  {
    label: "degrees to radians",
    path: "/Converters/CommonConversions/DegreesToRadians",
  },
  { label: "kw to hp", path: "/Converters/CommonConversions/KwToHp" },
  {
    label: "yards to meters",
    path: "/Converters/CommonConversions/YardsToMeters",
  },
  { label: "cups to mL", path: "/Converters/CommonConversions/CupsToMl" },
];
