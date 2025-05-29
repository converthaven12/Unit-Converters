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
    { label: "grams to ounces", path: "/Converters/WeightAndMass/GramsToOunces" },
    { label: "ounces to grams", path: "/Converters/WeightAndMass/OuncesToGrams" },
    { label: "pounds to ounces", path: "/Converters/WeightAndMass/PoundsToOunces" },
    { label: "ounces to pounds", path: "/Converters/WeightAndMass/OuncesToPounds" },
    { label: "grams to pounds", path: "/Converters/WeightAndMass/GramsToPounds" },
    { label: "pounds to grams", path: "/Converters/WeightAndMass/PoundsToGrams" },
    { label: "g to kg", path: "/Converters/WeightAndMass/GramToKg" },
    { label: "kg to g", path: "/Converters/WeightAndMass/KgToGram" },
    { label: "grams to milligrams", path: "/Converters/WeightAndMass/GramsToMilligrams" },
    { label: "milligrams to grams", path: "/Converters/WeightAndMass/MilligramsToGrams" },
    { label: "oz to kg", path: "/Converters/WeightAndMass/OzToKg" },
    { label: "kg to oz", path: "/Converters/WeightAndMass/KgToOz" },
    { label: "lbs to stone", path: "/Converters/WeightAndMass/LbsToStone" },
    { label: "stone to lbs", path: "/Converters/WeightAndMass/StoneToLbs" },
    { label: "ton to lbs", path: "/Converters/WeightAndMass/TonToLbs" },
    { label: "lbs to ton", path: "/Converters/WeightAndMass/LbsToTon" }
  ],

  
  CommonConverters: [
    { label: "Length Converter", path: "/Converters/CommonConverters/LengthConverter" },
    { label: "Weight and Mass Converter", path: "/Converters/CommonConverters/WeightAndMassConverter" },
    { label: "Volume Converter", path: "/Converters/CommonConverters/VolumeConverter" },
    { label: "Temperature Converter", path: "/Converters/CommonConverters/TemperatureConverter" },
    { label: "Area Converter", path: "/Converters/CommonConverters/AreaConverter" },
    { label: "Pressure Converter", path: "/Converters/CommonConverters/PressureConverter" },
    { label: "Energy Converter", path: "/Converters/CommonConverters/EnergyConverter" },
    { label: "Volume - Dry Converter", path: "/Converters/CommonConverters/VolumeDryConverter" },
    { label: "Currency Converter", path: "/Converters/CommonConverters/CurrencyConverter" },
    { label: "Case Converter", path: "/Converters/CommonConverters/CaseConverter" },
    { label: "Power Converter", path: "/Converters/CommonConverters/PowerConverter" },
    { label: "Force Converter", path: "/Converters/CommonConverters/ForceConverter" },
    { label: "Time Converter", path: "/Converters/CommonConverters/TimeConverter" },
    { label: "Speed Converter", path: "/Converters/CommonConverters/SpeedConverter" },
    { label: "Angle Converter", path: "/Converters/CommonConverters/AngleConverter" },
    { label: "Fuel Consumption Converter", path: "/Converters/CommonConverters/FuelConsumptionConverter" },
    { label: "Numbers Converter", path: "/Converters/CommonConverters/NumbersConverter" },
    { label: "Data Storage Converter", path: "/Converters/CommonConverters/DataStorageConverter" }
  ],

  EngineeringConverters: [
    { label: "Velocity - Angular Converter", path: "/Converters/EngineeringConverters/VelocityAngularConverter" },
    { label: "Acceleration Converter", path: "/Converters/EngineeringConverters/AccelerationConverter" },
    { label: "Acceleration - Angular Converter", path: "/Converters/EngineeringConverters/AccelerationAngularConverter" },
    { label: "Density Converter", path: "/Converters/EngineeringConverters/DensityConverter" },
    { label: "Specific Volume Converter", path: "/Converters/EngineeringConverters/SpecificVolumeConverter" },
    { label: "Moment of Inertia Converter", path: "/Converters/EngineeringConverters/MomentOfInertiaConverter" },
    { label: "Moment of Force Converter", path: "/Converters/EngineeringConverters/MomentOfForceConverter" },
    { label: "Torque Converter", path: "/Converters/EngineeringConverters/TorqueConverter" }
  ],

  ElectricityConverters: [
    { label: "Charge Converter", path: "/Converters/ElectricityConverters/ChargeConverter" },
    { label: "Linear Charge Density Converter", path: "/Converters/ElectricityConverters/LinearChargeDensityConverter" },
    { label: "Surface Charge Density Converter", path: "/Converters/ElectricityConverters/SurfaceChargeDensityConverter" },
    { label: "Volume Charge Density Converter", path: "/Converters/ElectricityConverters/VolumeChargeDensityConverter" },
    { label: "Current Converter", path: "/Converters/ElectricityConverters/CurrentConverter" },
    { label: "Linear Current Density Converter", path: "/Converters/ElectricityConverters/LinearCurrentDensityConverter" },
    { label: "Surface Current Density Converter", path: "/Converters/ElectricityConverters/SurfaceCurrentDensityConverter" },
    { label: "Electric Field Strength Converter", path: "/Converters/ElectricityConverters/ElectricFieldStrengthConverter" },
    { label: "Electric Potential Converter", path: "/Converters/ElectricityConverters/ElectricPotentialConverter" },
    { label: "Electric Resistance Converter", path: "/Converters/ElectricityConverters/ElectricResistanceConverter" },
    { label: "Electric Resistivity Converter", path: "/Converters/ElectricityConverters/ElectricResistivityConverter" },
    { label: "Electric Conductance Converter", path: "/Converters/ElectricityConverters/ElectricConductanceConverter" },
    { label: "Electric Conductivity Converter", path: "/Converters/ElectricityConverters/ElectricConductivityConverter" },
    { label: "Electrostatic Capacitance", path: "/Converters/ElectricityConverters/ElectrostaticCapacitance" },
    { label: "Inductance Converter", path: "/Converters/ElectricityConverters/InductanceConverter" }
  ],

  HeatConverters: [
    { label: "Fuel Efficiency - Mass Converter", path: "/Converters/HeatConverters/FuelEfficiencyMassConverter" },
    { label: "Fuel Efficiency - Volume Converter", path: "/Converters/HeatConverters/FuelEfficiencyVolumeConverter" },
    { label: "Temperature Interval Converter", path: "/Converters/HeatConverters/TemperatureIntervalConverter" },
    { label: "Thermal Expansion Converter", path: "/Converters/HeatConverters/ThermalExpansionConverter" },
    { label: "Thermal Resistance Converter", path: "/Converters/HeatConverters/ThermalResistanceConverter" },
    { label: "Thermal Conductivity Converter", path: "/Converters/HeatConverters/ThermalConductivityConverter" },
    { label: "Specific Heat Capacity Converter", path: "/Converters/HeatConverters/SpecificHeatCapacityConverter" },
    { label: "Heat Density Converter", path: "/Converters/HeatConverters/HeatDensityConverter" },
    { label: "Heat Flux Density Converter", path: "/Converters/HeatConverters/HeatFluxDensityConverter" },
    { label: "Heat Transfer Coefficient Converter", path: "/Converters/HeatConverters/HeatTransferCoefficientConverter" }
  ],

  MagnetismConverters: [
    { label: "Magnetomotive Force Converter", path: "/Converters/MagnetismConverters/MagnetomotiveForceConverter" },
    { label: "Magnetic Field Strength Converter", path: "/Converters/MagnetismConverters/MagneticFieldStrengthConverter" },
    { label: "Magnetic Flux Converter", path: "/Converters/MagnetismConverters/MagneticFluxConverter" },
    { label: "Magnetic Flux Density Converter", path: "/Converters/MagnetismConverters/MagneticFluxDensityConverter" }
  ],

  FluidsConverters: [
    { label: "Flow Converter", path: "/Converters/FluidsConverters/FlowConverter" },
    { label: "Flow - Mass Converter", path: "/Converters/FluidsConverters/FlowMassConverter" },
    { label: "Flow - Molar Converter", path: "/Converters/FluidsConverters/FlowMolarConverter" },
    { label: "Mass Flux Density Converter", path: "/Converters/FluidsConverters/MassFluxDensityConverter" },
    { label: "Concentration - Molar Converter", path: "/Converters/FluidsConverters/ConcentrationMolarConverter" },
    { label: "Concentration - Solution Converter", path: "/Converters/FluidsConverters/ConcentrationSolutionConverter" },
    { label: "Viscosity - Dynamic Converter", path: "/Converters/FluidsConverters/ViscosityDynamicConverter" },
    { label: "Viscosity - Kinematic Converter", path: "/Converters/FluidsConverters/ViscosityKinematicConverter" },
    { label: "Surface Tension Converter", path: "/Converters/FluidsConverters/SurfaceTensionConverter" },
    { label: "Permeability Converter", path: "/Converters/FluidsConverters/PermeabilityConverter" }
  ],

  RadiologyConverters: [
    { label: "Radiation Converter", path: "/Converters/RadiologyConverters/RadiationConverter" },
    { label: "Radiation-Activity Converter", path: "/Converters/RadiologyConverters/RadiationActivityConverter" },
    { label: "Radiation-Exposure Converter", path: "/Converters/RadiologyConverters/RadiationExposureConverter" },
    { label: "Radiation-Absorbed Dose Converter", path: "/Converters/RadiologyConverters/RadiationAbsorbedDoseConverter" }
  ],

  LightConverters: [
    { label: "Luminance Converter", path: "/Converters/LightConverters/LuminanceConverter" },
    { label: "Luminous Intensity Converter", path: "/Converters/LightConverters/LuminousIntensityConverter" },
    { label: "Illumination Converter", path: "/Converters/LightConverters/IlluminationConverter" },
    { label: "Digital Image Resolution Converter", path: "/Converters/LightConverters/DigitalImageResolutionConverter" },
    { label: "Frequency Wavelength Converter", path: "/Converters/LightConverters/FrequencyWavelengthConverter" }
  ],

  OtherConverters: [
    { label: "Prefixes Converter", path: "/Converters/OtherConverters/PrefixesConverter" },
    { label: "Data Transfer Converter", path: "/Converters/OtherConverters/DataTransferConverter" },
    { label: "Sound Converter", path: "/Converters/OtherConverters/SoundConverter" },
    { label: "Typography Converter", path: "/Converters/OtherConverters/TypographyConverter" },
    { label: "Volume - Lumber Converter", path: "/Converters/OtherConverters/VolumeLumberConverter" }
  ]
};

export const CommonConversions = [
    { label: "cm to inches", path: "/Converters/CommonConversions/CmToInches" },
    { label: "kg to lbs", path: "/Converters/CommonConversions/KgToLbs" },
    { label: "Celsius to Fahrenheit", path: "/Converters/CommonConversions/CelsiusToFahrenheit" },
    { label: "mm to inches", path: "/Converters/CommonConversions/MmToInches" },
    { label: "meters to feet", path: "/Converters/CommonConversions/MetersToFeet" },
    { label: "km to miles", path: "/Converters/CommonConversions/KmToMiles" },
    { label: "cm to feet", path: "/Converters/CommonConversions/CmToFeet" },
    { label: "grams to ounces", path: "/Converters/CommonConversions/GramsToOunces" },
    { label: "inches to feet", path: "/Converters/CommonConversions/InchesToFeet" },
    { label: "liters to gallons", path: "/Converters/CommonConversions/LitersToGallons" },
    { label: "pounds to ounces", path: "/Converters/CommonConversions/PoundsToOunces" },
    { label: "mph to kph", path: "/Converters/CommonConversions/MphToKph" },
    { label: "acres to square feet", path: "/Converters/CommonConversions/AcresToSquareFeet" },
    { label: "radians to degrees", path: "/Converters/CommonConversions/RadiansToDegrees" },
    { label: "hp to kw", path: "/Converters/CommonConversions/HpToKw" },
    { label: "meters to yards", path: "/Converters/CommonConversions/MetersToYards" },
    { label: "mL to cups", path: "/Converters/CommonConversions/MlToCups" },
    { label: "inches to cm", path: "/Converters/CommonConversions/InchesToCm" },
    { label: "lbs to kg", path: "/Converters/CommonConversions/LbsToKg" },
    { label: "Fahrenheit to Celsius", path: "/Converters/CommonConversions/FahrenheitToCelsius" },
    { label: "inches to mm", path: "/Converters/CommonConversions/InchesToMm" },
    { label: "feet to meters", path: "/Converters/CommonConversions/FeetToMeters" },
    { label: "miles to km", path: "/Converters/CommonConversions/MilesToKm" },
    { label: "feet to cm", path: "/Converters/CommonConversions/FeetToCm" },
    { label: "ounces to grams", path: "/Converters/CommonConversions/OuncesToGrams" },
    { label: "feet to inches", path: "/Converters/CommonConversions/FeetToInches" },
    { label: "gallons to liters", path: "/Converters/CommonConversions/GallonsToLiters" },
    { label: "ounces to pounds", path: "/Converters/CommonConversions/OuncesToPounds" },
    { label: "kph to mph", path: "/Converters/CommonConversions/KphToMph" },
    { label: "square feet to acres", path: "/Converters/CommonConversions/SquareFeetToAcres" },
    { label: "degrees to radians", path: "/Converters/CommonConversions/DegreesToRadians" },
    { label: "kw to hp", path: "/Converters/CommonConversions/KwToHp" },
    { label: "yards to meters", path: "/Converters/CommonConversions/YardsToMeters" },
    { label: "cups to mL", path: "/Converters/CommonConversions/CupsToMl" }
  ]