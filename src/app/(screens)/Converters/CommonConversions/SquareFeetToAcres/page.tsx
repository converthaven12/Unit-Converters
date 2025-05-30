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
    const acres = value / 43560;
    setToValue(acres.toFixed(4));
  }
};


  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert square feet to acres
      </h1>
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
              <span className="ml-2 font-bold">square foot</span>
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
              <span className="ml-2 font-bold">acre</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/AcresToSquareFeet")
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
      {/* Section 2 */}
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

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Square Foot to Acre Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Square Foot to Acre
      </h1>
      <p>
       1 ft^2 = 2.29568E-5 ac
       <br />
1 ac = 43560 ft^2
      </p>
      <p>
        <strong>Example: </strong>convert 15 ft^2 to ac :
        <br />
        15 ft^2 = 15 × 2.29568E-5 ac = 0.0003443526 ac
      </p>
    </div>
  );
};

export default page;
