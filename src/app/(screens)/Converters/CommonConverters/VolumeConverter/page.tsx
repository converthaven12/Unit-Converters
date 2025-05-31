'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const volumeUnits: Record<string, number> = {
  "cubic meter": 1,
  "cubic kilometer": 1e9,
  "cubic centimeter": 1e-6,
  "cubic millimeter": 1e-9,
  liter: 1e-3,
  milliliter: 1e-6,
  "gallon (US)": 0.00378541,
  "quart (US)": 0.000946353,
  "pint (US)": 0.000473176,
  cup: 0.000236588,
  tablespoon: 1.47868e-5, // US tablespoon
  teaspoon: 4.92892e-6, // US teaspoon
  "cubic mile": 4.16818e9,
  "cubic yard": 0.764555,
  "cubic foot": 0.0283168,
  "cubic inch": 1.63871e-5,
  "cubic decimeter": 1e-3,
  exaliter: 1e18,
  petaliter: 1e15,
  teraliter: 1e12,
  gigaliter: 1e9,
  megaliter: 1e6,
  kiloliter: 1,
  hectoliter: 0.1,
  dekaliter: 0.01,
  deciliter: 0.0001,
  centiliter: 0.00001,
  microliter: 1e-9,
  nanoliter: 1e-12,
  picoliter: 1e-15,
  femtoliter: 1e-18,
  attoliter: 1e-21,
  cc: 1e-6,
  drop: 5e-8, // Approximate volume of one drop (m³)
  "barrel (oil)": 0.158987,
  "barrel (US)": 0.1192405,
  "barrel (UK)": 0.16365924,
  "gallon (UK)": 0.00454609,
  "quart (UK)": 0.00113652,
  "pint (UK)": 0.000568261,
  "cup (metric)": 0.00025,
  "cup (UK)": 0.000284131,
  "fluid ounce (US)": 2.9574e-5,
  "fluid ounce (UK)": 2.84131e-5,
  "tablespoon (metric)": 1.5e-5,
  "tablespoon (UK)": 1.77869e-5,
  "dessertspoon (US)": 1e-5,   // Approximate
  "dessertspoon (UK)": 1.333e-5, // Approximate
  "teaspoon (metric)": 5e-6,
  "teaspoon (UK)": 5.91939e-6,
  "gill (US)": 0.000118294,
  "gill (UK)": 0.000142065,
  "minim (US)": 6.17e-8,
  "minim (UK)": 5.92e-8,
  "ton register": 2.83,  // register ton in m³
  ccf: 2.83168466,       // hundred cubic feet
  "hundred-cubic foot": 2.83168466,
  "acre-foot": 1233.48,
  "acre-foot (US survey)": 1233.489,
  "acre-inch": 102.79,
  dekaster: 10,          // 10 cubic meters
  estere: 1,             // 1 cubic meter (sometimes estere = cubic meter)
  decister: 0.1,
  ecord: 0.5,            // Approximate (1 ecord = 0.5 m³)
  tun: 0.95435,
  hogshead: 0.238481,
  "board foot": 0.00235974,
  dram: 3.69669e-6,
  cor: 220,              // biblical approx (varies widely)
  homer: 220,            // biblical approx
  bath: 22,              // biblical approx
  hin: 3.7,              // biblical approx
  cab: 0.15,             // biblical approx
  log: 0.3,              // biblical approx
  taza: 0.00025,         // Spanish cup approx
  "earth's volume": 1.08321e21, // m³, approx Earth's volume
};


const VolumeConverterPage: React.FC = () => {
  const convertVolume = (value: number, from: string, to: string): number => {
    const fromFactor = volumeUnits[from];
    const toFactor = volumeUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Volume Converter"
      units={Object.keys(volumeUnits)}
      convert={convertVolume}
    />
  );
};

export default VolumeConverterPage;
