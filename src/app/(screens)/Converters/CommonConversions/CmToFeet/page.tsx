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
      const feet = value / 30.48;
      setToValue(feet.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">Convert cm to feet</h1>
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
              <span className="ml-2 font-bold">centimeter</span>
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
                router.push("/Converters/CommonConversions/FeetToCm")
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Centimeter</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A centimeter (symbol: cm) is a unit of
          length in the metric system, equal to one-hundredth of a meter (0.01
          m). It is commonly used for measuring moderate lengths and distances
          in everyday life, science, and engineering.
        </p>
        <p>
          <strong>History/origin:</strong> The centimeter is derived from the
          meter, which was first defined in 1793 during the French Revolution as
          one ten-millionth of the distance from the equator to the North Pole
          along a meridian. The metric system was designed to be a universal and
          standardized system of measurement, and the centimeter emerged as a
          convenient unit for medium-scale measurements.
        </p>
        <p>
          <strong>Current use:</strong> The centimeter is widely used worldwide
          in countries that have adopted the metric system. It is frequently
          used in everyday contexts, such as measuring height or small objects,
          in education, in construction for detailed measurements, and in
          various fields of science and engineering. It serves as a practical
          unit bridging smaller units like millimeters and larger units like
          meters.
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
        Centimeter to Foot Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Centimeter to Foot
      </h1>
      <p>
        1 cm = 0.032808399 ft
        <br />
1 ft = 30.48 cm
      </p>
      <p>
        <strong>Example: </strong>convert 15 cm to ft :
        <br />
        15 cm = 15 × 0.032808399 ft = 0.4921259843 ft
      </p>
    </div>
  );
};

export default page;
