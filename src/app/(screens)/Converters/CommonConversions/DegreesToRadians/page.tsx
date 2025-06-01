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
      const radians = value * (Math.PI / 180);
      setToValue(radians.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert degrees to radians
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
              <span className="ml-2 font-bold">degree</span>
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
              <span className="ml-2 font-bold">radian</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/RadiansToDegrees")
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Degrees</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A degree (symbol: °) is a unit of angular
          measurement equal to 1/360 of a full rotation. It divides a circle
          into 360 equal parts, making it intuitive and widely used for everyday
          applications.
        </p>
        <p>
          <strong>History/origin:</strong> The degree has ancient origins, with
          the 360-part division believed to be influenced by Babylonian
          astronomy and their base-60 number system. This division approximates
          the number of days in a year, which contributed to its adoption for
          angular measurement.
        </p>
        <p>
          <strong>Current use:</strong> Degrees are commonly used in navigation,
          geography, engineering, and many everyday applications involving
          angles. They are the preferred unit for measuring angles in maps,
          compasses, and construction due to their simplicity and ease of
          understanding.
        </p>
      </section>
      {/* Section 2 */}

      <h1 className="text-xl text-[#006633] font-semibold mt-10">Radians</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A radian (symbol: rad) is the standard
          unit of angular measure used in many areas of mathematics. It is
          defined as the angle subtended at the center of a circle by an arc
          whose length is equal to the circle’s radius. One radian is
          approximately 57.2958 degrees.
        </p>
        <p>
          <strong>History/origin:</strong> The radian concept dates back to the
          18th century and has its roots in classical geometry. Unlike degrees,
          radians provide a natural way of measuring angles based on the
          properties of the circle itself, making it fundamental in calculus,
          trigonometry, and physics.
        </p>
        <p>
          <strong>Current use:</strong> Radians are widely used in mathematics,
          physics, engineering, and computer science, especially where angular
          measurements are involved in calculations. They are the preferred unit
          in scientific work, particularly in calculus and trigonometric
          functions, due to their direct relationship with the properties of
          circles.
        </p>
      </section>
      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Degree to Radian Conversion Table
      </h1>
      <ConversionTable />
      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Degree to Radian
      </h1>
      <p>
        1 ° = 0.0174532925 rad
        <br />1 rad = 57.2957795131 °
      </p>
      <p>
        <strong>Example: </strong> convert 15 ° to rad :
        <br />
        15 ° = 15 × 0.0174532925 rad = 0.2617993878 rad
      </p>
    </div>
  );
};

export default page;
