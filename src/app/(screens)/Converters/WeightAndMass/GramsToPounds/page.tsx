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
      const pounds = value * 0.00220462262;
      setToValue(pounds.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert grams to pounds
      </h1>
      <div className="w-full max-w-md mt-10 px-2 py-4 bg-white rounded shadow">
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
              <span className="ml-2 font-bold">pound</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/WeightAndMass/PoundsToGrams")
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Pound</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A pound (symbol: lb) is a unit of mass
          used in the imperial and US customary systems of measurement. The
          international avoirdupois pound (the common pound used today) is
          defined as exactly 0.45359237 kilograms. The avoirdupois pound is
          equivalent to 16 avoirdupois ounces.
        </p>
        <p>
          <strong>History/origin:</strong> The pound descended from the Roman
          libra, and numerous different definitions of the pound were used
          throughout history prior to the international avoirdupois pound that
          is widely used today. The avoirdupois system is a system that was
          commonly used in the 13<sup>th</sup> century. It was updated to its
          current form in 1959. It is a system that was based on a physical
          standardized pound that used a prototype weight. This prototype weight
          could be divided into 16 ounces, a number that had three even divisors
          (8, 4, 2). This convenience could be the reason that the system was
          more popular than other systems of the time that used 10, 12, or 15
          subdivisions.
        </p>
        <p>
          <strong>Current use:</strong> The pound as a unit of weight is widely
          used in the United States, often for measuring body weight. Many
          versions of the pound existed in the past in the United Kingdom (UK),
          and although the UK largely uses the International System of Units,
          pounds are still used within certain contexts, such as labelling of
          packaged foods (by law the metric values must also be displayed). The
          UK also often uses both pounds and stones when describing body weight,
          where a stone is comprised of 14 pounds.
        </p>
      </section>

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Gram to Pound Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Gram to Pound
      </h1>
      <p>
        1 g = 0.0022046226 lbs
        <br />1 lbs = 453.59237 g
      </p>
      <p>
        <strong>Example: </strong>convert 15 g to lbs :
        <br />
        15 g = 15 × 0.0022046226 lbs = 0.0330693393 lbs
      </p>
    </div>
  );
};

export default page;
