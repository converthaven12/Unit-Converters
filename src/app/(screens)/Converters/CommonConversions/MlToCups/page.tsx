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
      const cups = value * 0.00422675;
      setToValue(cups.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">Convert ml to cups</h1>
      <div className="w-full max-w-md mt-10 px-2 py-4 bg-gray-100 rounded shadow">
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
              <span className="ml-2 font-bold">milliliter</span>
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
              <span className="ml-2 font-bold">cup (US)</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/CupsToMl")
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

      <h1 className="text-xl text-[#006633] font-semibold mt-10">Millimeter</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A millimeter (symbol: mm) is a unit of
          length in the metric system, equal to one-thousandth of a meter (0.001
          m). It is commonly used to measure very small distances or
          thicknesses.
        </p>
        <p>
          <strong>History/origin:</strong> The millimeter is part of the metric
          system, which was introduced in France in the late 18th century. The
          metric system was designed to create a universal, decimal-based system
          of measurement, and the millimeter emerged as a convenient subdivision
          of the meter.
        </p>
        <p>
          <strong>Current use:</strong> Millimeters are widely used worldwide,
          especially in engineering, manufacturing, and design, where precision
          measurements are necessary. It is commonly used to measure thickness,
          small dimensions in mechanical parts, and in everyday contexts such as
          paper sizes and rainfall amounts.
        </p>
      </section>

      {/* Section 2 */}

      <h1 className="text-xl text-[#006633] font-semibold mt-10">Cup</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A cup is a unit of volume commonly used
          in cooking to measure liquids and bulk foods. In the US customary
          system, one cup is equal to 8 fluid ounces or approximately 236.588
          milliliters.
        </p>
        <p>
          <strong>History/origin:</strong> The cup as a cooking measure
          originated from traditional household measurements. Its size and use
          vary internationally, but the US cup is widely standardized and used
          in American recipes. The cup's origin traces back to everyday
          household items used for measuring ingredients before metrication.
        </p>
        <p>
          <strong>Current use:</strong> Cups are primarily used in cooking and
          baking to measure ingredients easily and consistently. While metric
          units are often preferred internationally, the cup remains common in
          American cookbooks, food packaging, and kitchen tools.
        </p>
      </section>

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Milliliter to Cup (US) Conversion Table
      </h1>
      <ConversionTable />
      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Milliliter to Cup (US)
      </h1>
      <p>
        1 mL = 0.0042267528 cup (US)
        <br />1 cup (US) = 236.5882365 mL
      </p>
      <p>
        <strong>Example: </strong>convert 15 mL to cup (US) :
        <br />
        15 mL = 15 × 0.0042267528 cup (US) = 0.0634012926 cup (US)
      </p>
    </div>
  );
};

export default page;
