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
      const squareFeet = value * 43560;
      setToValue(squareFeet.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert acres to square feet
      </h1>
      <div className="w-full max-w-xl mt-10 px-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
          <div className="space-y-4 w-full">
            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">From:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={fromValue}
                  setter={(n, v) => setFromValue(v)}
                  name={"Acres"}
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">Acres</span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="square foot"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">square foot</span>
            </div>
          </div>
          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() =>
                router.push("/Converters/CommonConversions/SquareFeetToAcres")
              }
            >
              ↕
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
          <GreenBtn text="Convert" clickEvent={convert} />
          <GreenBtn text="Clear" clickEvent={clear} />
        </div>
      </div>
      {/* Section 1 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Acre</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> An acre is a unit of area commonly used
          in the imperial and US customary systems. It is defined as exactly
          43,560 square feet or about 4,047 square meters. Acres are primarily
          used to measure large plots of land, especially in agriculture and
          real estate.
        </p>
        <p>
          <strong>History/origin:</strong> The acre originated in medieval
          England as a measure of land that could be plowed by one man with a
          team of oxen in one day. Its size was standardized over time to the
          current definition. The acre remains a common land measurement unit in
          many English-speaking countries.
        </p>
        <p>
          <strong>Current use:</strong> Acres are widely used today in the
          United States, the United Kingdom, and other countries that follow the
          imperial measurement system. It is frequently used in agriculture,
          land planning, and real estate to describe the size of plots, farms,
          and properties.
        </p>
      </section>
      {/* Section 2 */}

      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Square Foot
      </h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A square foot (symbol: sq ft or ft²) is a
          unit of area in the imperial and US customary systems. It represents
          the area of a square with sides measuring one foot in length. One
          square foot equals 144 square inches or about 0.0929 square meters.
        </p>
        <p>
          <strong>History/origin:</strong> The square foot has been used
          historically in English-speaking countries as a standard unit for
          measuring smaller areas, particularly in construction, real estate,
          and interior design. Its use dates back to the establishment of the
          imperial measurement system.
        </p>
        <p>
          <strong>Current use:</strong> Square feet are extensively used in the
          United States, Canada, and the UK for measuring floor space in
          buildings, homes, offices, and land parcels. It remains a fundamental
          unit for property descriptions, architectural plans, and interior
          space calculations.
        </p>
      </section>

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Acre to Square Foot Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Acre to Square Foot
      </h1>
      <p>
        1 ac = 43560 ft^2
        <br />1 ft^2 = 2.29568E-5 ac
      </p>
      <p>
        <strong>Example: </strong>convert 15 ac to ft^2 :
        <br />
        15 ac = 15 × 43560 ft^2 = 653400 ft^2
      </p>
    </div>
  );
};

export default page;
