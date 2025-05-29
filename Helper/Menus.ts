export type MenuItem = {
  label: string;
  path: string;
};

type Menus = {
  [key: string]: MenuItem[];
};

export const menus: Menus = {
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
};
