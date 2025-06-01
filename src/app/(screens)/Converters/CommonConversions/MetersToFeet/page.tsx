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
      const feet = value * 3.280839895;
      setToValue(feet.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert meters to feet
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
              <span className="ml-2 font-bold">meters</span>
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
              <span className="ml-2 font-bold">foot</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/FeetToMeters")
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
                  name="kg"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">meters</span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="gram"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">foot</span>
            </div>
          </div>
          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() =>
                router.push("/Converters/CommonConversions/FeetToMeters")
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Meter</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A meter (symbol: m) is the base unit of
          length in the International System of Units (SI). It is defined as the
          distance light travels in a vacuum in 1/299,792,458 of a second. The
          meter is the foundation for other metric units of length, such as the
          kilometer and millimeter.
        </p>
        <p>
          <strong>History/origin:</strong> The meter was originally defined in
          1793 during the French Revolution as one ten-millionth of the distance
          from the Earth's equator to the North Pole along a meridian. Over
          time, this definition evolved through the use of physical artifacts
          and later through more precise scientific constants. The current
          definition based on the speed of light was adopted in 1983 to ensure
          consistency and accuracy.
        </p>
        <p>
          <strong>Current use:</strong> The meter is universally used across the
          globe for measuring length and distance in both everyday and
          scientific contexts. It is the standard unit in most fields, including
          construction, engineering, physics, and transportation. As part of the
          metric system, it is favored for its simplicity and ease of conversion
          with other metric units.
        </p>
      </section>

      {/* Section 2 */}

      <h1 className="text-xl text-[#006633] font-semibold mt-10">Feet</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A foot (plural: feet, symbol: ft) is a
          unit of length in the imperial and U.S. customary systems of
          measurement. One foot is equal to 12 inches and is exactly defined as
          0.3048 meters. It is commonly used to measure height, distance, and
          dimensions in non-metric countries.
        </p>
        <p>
          <strong>History/origin:</strong> The foot has ancient origins and was
          historically based on the length of a human foot. It was used in many
          different cultures, including the Romans, Greeks, and Chinese, with
          varying definitions. The current international foot was defined in
          1959 through an agreement between English-speaking nations,
          standardizing it to exactly 0.3048 meters.
        </p>
        <p>
          <strong>Current use:</strong> The foot is primarily used in the United
          States, as well as in the United Kingdom and Canada for certain
          applications. It is widely used in construction, aviation, and real
          estate to measure height, elevation, and floor plans. Despite the
          global shift to the metric system, the foot remains prevalent in
          everyday use in countries that have not fully adopted metric
          standards.
        </p>
      </section>

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Meter to Foot Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Meter to Foot
      </h1>
      <p>
        1 m = 3.280839895 ft
        <br />1 ft = 0.3048 m
      </p>
      <p>
        <strong>Example: </strong>convert 15 m to ft :
        <br />
        15 m = 15 × 3.280839895 ft = 49.2125984252 ft
      </p>
    </div>
  );
};

export default page;
