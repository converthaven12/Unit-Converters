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
      const kilograms = value * 0.45359237;
      setToValue(kilograms.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">Convert lbs to kg</h1>
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
              <span className="ml-2 font-bold">Pound</span>
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
              <span className="ml-2 font-bold">Kilogram</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() => router.push("/Converters/WeightAndMass/KgToLbs")}
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
        Pound to Kilogram Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Pound to Kilogram
      </h1>
      <p>
        1 lbs = 0.45359237 kg
        <br />1 kg = 2.2046226218 lbs
      </p>
      <p>
        <strong>Example: </strong>convert 15 lbs to kg :
        <br />
        15 lbs = 15 × 0.45359237 kg = 6.80388555 kg
      </p>
    </div>
  );
};

export default page;
