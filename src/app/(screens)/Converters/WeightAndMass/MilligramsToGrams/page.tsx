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
      const grams = value * 0.001;
      setToValue(grams.toFixed(6));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert milligrams to grams
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
              <span className="ml-2 font-bold">milligram</span>
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
              <span className="ml-2 font-bold">gram</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/WeightAndMass/GramsToMilligrams")
              }
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
                  name="mg"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">Milligram</span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="g"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">Gram</span>
            </div>
          </div>
          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() =>
                router.push("/Converters/WeightAndMass/GramsToMilligrams")
              }
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Milligram</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A milligram is a unit of weight and mass
          that is based on the SI (International System of Units) base unit of
          mass, the kilogram. It is equal to 1/1,000 grams, or 1/1,000,000
          kilograms.
        </p>
        <p>
          <strong>History/origin:</strong> The milligram is based on the SI unit
          of weight and mass, the kilogram. As an SI unit, it uses the "milli"
          SI prefix to denote that it is a submultiple of the base unit.
          Although the "milli" prefix denotes a submultiple with respect to the
          gram, the kilogram, not the gram, is technically the SI base unit of
          mass.
        </p>
        <p>
          <strong>Current use:</strong> As a submultiple of an SI base unit, the
          milligram is widely used in many applications, from everyday use to
          measure the weight or mass of foods, substances, etc., to widespread
          use in scientific labs, among other areas.
        </p>
      </section>
      {/* Section 2 */}
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

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Milligram to Gram Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Milligram to Gram
      </h1>
      <p>
        1 mg = 0.001 g
        <br />1 g = 1000 mg
      </p>
      <p>
        <strong>Example: </strong>convert 15 mg to g :
        <br />
        15 mg = 15 × 0.001 g = 0.015 g
      </p>
    </div>
  );
};

export default page;
