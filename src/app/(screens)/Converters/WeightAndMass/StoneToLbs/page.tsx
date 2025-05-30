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
      const pounds = value * 12.5;
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
        Convert stone to lbs
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
              <span className="ml-2 font-bold">stone (US)</span>
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
              onClick={() => router.push("/Converters/WeightAndMass/LbsToStone")}
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Stone (US)</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A stone (symbol: st) is a unit of mass
          commonly used in the United Kingdom and Ireland for measuring body
          weight. One stone is defined as exactly 14 pounds avoirdupois, which
          is approximately 6.35029318 kilograms. Although the stone is not part
          of the International System of Units (SI), it remains in popular use
          for everyday body weight measurements in some countries.
        </p>
        <p>
          <strong>History/origin:</strong> The stone as a unit of measurement
          has ancient origins dating back to Roman and medieval times. Its value
          varied across regions and goods traded, often depending on local
          standards. The standardization of the stone to 14 pounds in the
          avoirdupois system became widespread in Britain by the late Middle
          Ages. This standardization allowed for easier trade and consistency in
          weight measurement. Despite the adoption of the metric system, the
          stone has persisted culturally in the UK and Ireland.
        </p>
        <p>
          <strong>Current use:</strong> The stone is primarily used in the
          United Kingdom and Ireland to express human body weight, especially in
          informal contexts. For example, a person’s weight may be described as
          "11 stone 4 pounds" rather than in kilograms or pounds alone. While
          most official measurements use kilograms or pounds, the stone remains
          a culturally significant unit for weight in everyday life and in
          sports like boxing or wrestling.
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
        Stone (US) to Pound Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Stone (US) to Pound
      </h1>
      <p>
        1 stone (US) = 12.5 lbs <br />1 lbs = 0.08 stone (US)
      </p>
      <p>
        <strong>Example: </strong>convert 15 stone (US) to lbs :
        <br />
        15 stone (US) = 15 × 12.5 lbs = 187.5 lbs
      </p>
    </div>
  );
};

export default page;
