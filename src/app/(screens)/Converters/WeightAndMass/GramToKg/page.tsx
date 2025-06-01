"use client";
import InputTag from "@/app/utils/components/InputTag/InputTag";
import GreenBtn from "@/app/utils/components/GreenBtn/GreenBtn";
import React, { useState } from "react";
import ConversionTable from "./ConversionTable";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const convert = () => {
    const value = parseFloat(fromValue);
    if (!isNaN(value)) {
      const kilograms = value * 0.001;
      setToValue(kilograms.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert grams to kilograms
      </h1>
      {/* <div className="w-full max-w-md mt-10 px-2 py-4 bg-white rounded shadow">
        <div className="flex justify-between items-center sm:gap-0 -gap-x-1">
          <div>
            <div className="flex items-center mb-4">
              <label className="w-16 font-semibold">From:</label>
              <div className="w-48">
                <InputTag
                  value={fromValue}
                  setter={(n, v) => setFromValue(v)}
                  name="kg"
                />
              </div>
              <span className="ml-2 font-bold">gram</span>
            </div>

            <div className="flex items-center mb-4">
              <label className="w-16 font-semibold">To:</label>
              <div className="w-48">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="gram"
                />
              </div>
              <span className="ml-2 font-bold">kilogram</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() => router.push("/Converters/WeightAndMass/KgToGram")}
            >
              ↕
            </span>
          </div>
        </div>

        <div className="flex space-x-4">
          <GreenBtn text="Convert" clickEvent={convert} />
          <GreenBtn text="Clear" clickEvent={clear} />
        </div>
      </div> */}
      <div className="w-full max-w-xl mt-10 px-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
          <div className="space-y-4 w-full">
            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">From:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={fromValue}
                  setter={(n, v) => setFromValue(v)}
                  name="gram"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">grams (g)</span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="kilogram"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">
                kilograms (kg)
              </span>
            </div>
          </div>
          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() => router.push("/Converters/WeightAndMass/KgToGram")}
            >
              ↕
            </span>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <GreenBtn text="Convert" clickEvent={convert} />
          <GreenBtn text="Clear" clickEvent={clear} />
        </div>
      </div>
      {/* Section 1 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Gram</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A gram (symbol: g) is a unit of mass in
          the International System of Units (SI). The definition of the gram is
          based on the kilogram, where a gram is one thousandth of a kilogram,
          the SI base unit of mass. Since 2019, the definition of the kilogram
          is no longer based on the international prototype, and rather is based
          on Planck's constant, h, along with the new definitions of the second
          and the meter
        </p>
        <p>
          <strong>History/origin:</strong>Originally, a gram was defined as the
          absolute weight of pure water in a cubic centimeter at the temperature
          of melting ice (later 4 °C). The gram used to be a fundamental unit of
          mass as part of centimeter-gram-second systems of units up until the
          widespread adoption of SI, which uses kilograms as the base unit of
          mass. The gram was later redefined as one thousandth of a kilogram,
          the SI (meter-kilogram-second system of units) base unit of mass.
        </p>
        <p>
          <strong>Current use: </strong>
          The gram is widely used in every life as well as scientific contexts.
          For example, the gram is typically used to measure non-liquid
          ingredients used for cooking or groceries. Standards on the nutrition
          labels of food products often require the relative contents to be
          stated per 100 grams of the product.
        </p>
      </section>
      {/* Section 2 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Kilogram</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A kilogram (symbol: kg) is the base unit
          of mass in the International System of Units (SI). It is currently
          defined based on the fixed numerical value of the Planck constant, h,
          which is equal to 6.62607015 × 10 <sup>-34</sup> in the units of J·s,
          or kg·m<sup>2</sup>·s<sup>-1</sup>. The meter and the second are
          defined in terms of c, the speed of light, and cesium frequency, ΔνCs.
          Even though the definition of the kilogram was changed in 2019, the
          actual size of the unit remained the same. The changes were intended
          to improve the definitions of SI base units, not to actually change
          how the units are used throughout the world.
        </p>
        <p>
          <strong>History/origin:</strong> The name kilogram was derived from
          the French "kilogramme," which in turn came from adding Greek
          terminology meaning "a thousand," before the Late Latin term "gramma"
          meaning "a small weight."
        </p>
        <p>
          Unlike the other SI base units, the kilogram is the only SI base unit
          with an SI prefix. SI is a system based on the meter-kilogram-second
          system of units rather than a centimeter-gram-second system. This is
          at least in part due to the inconsistencies and lack of coherence that
          can arise through use of centimeter-gram-second systems, such as those
          between the systems of electrostatic and electromagnetic units.
        </p>
        <p>
          The kilogram was originally defined as the mass of one liter of water
          at its freezing point in 1794, but was eventually re-defined, since
          measuring the mass of a volume of water was imprecise and cumbersome.
        </p>
        <p>
          A new definition of the kilogram was introduced in 2019 based on
          Planck's constant and changes to the definition of the second. Prior
          to the current definition, the kilogram was defined as being equal to
          the mass of a physical prototype, a cylinder made of a
          platinum-iridium alloy, which was an imperfect measure. This is
          evidenced by the fact that the mass of the original prototype for the
          kilogram now weighs 50 micrograms less than other copies of the
          standard kilogram.
        </p>
        <p>
          <strong>Current use: </strong>
          As a base unit of SI, the kilogram is used globally in nearly all
          fields and applications, with the exception of countries like the
          United States, where the kilogram is used in many areas, at least to
          some extent (such as science, industry, government, and the military)
          but typically not in everyday applications.
        </p>
      </section>

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Gram to Kilogram Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Gram to Kilogram
      </h1>
      <p>
        1 g = 0.001 kg
        <br />1 kg = 1000 g
      </p>
      <p>
        <strong>Example: </strong>convert 15 g to kg:
        <br />
        15 g = 15 × 0.001 kg = 0.015 kg
      </p>
    </div>
  );
};

export default page;
