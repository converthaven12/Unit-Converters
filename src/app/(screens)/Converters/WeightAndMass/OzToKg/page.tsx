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
      const kilograms = value * 0.0283495231;
      setToValue(kilograms.toFixed(6));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">Convert oz to kg</h1>
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
              <span className="ml-2 font-bold">ounce</span>
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
              <span className="ml-2 font-bold">kilogram</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() => router.push("/Converters/WeightAndMass/KgToOz")}
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Ounce</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> An ounce (symbol: oz) is a unit of mass
          in the imperial and US customary systems of measurement. The
          avoirdupois ounce (the common ounce) is defined as exactly
          28.349523125 grams and is equivalent to one sixteenth of an
          avoirdupois pound.
        </p>
        <p>
          <strong>History/origin:</strong> The origin of the term ounce stems
          from the Roman uncia, which means a "twelfth part," and the use of a
          standardized copper bar which defined both the Roman pound and foot.
          The copper bar was divided into twelve equal parts, called unciae.
          This relationship between the Roman pound and foot eventually
          contributed to the uncia being the basis of the modern inch as well as
          the common ounce. The ounce has been used as a standard of mass
          throughout history for different applications and with different
          definitions. Examples include the Dutch metric ounce (100g), French
          ounce (30.59g), and the Spanish ounce (28.75g), among others. The
          current definition of the ounce, the international avoirdupois ounce
          was adopted in 1959.
        </p>
        <p>
          <strong>Current use:</strong> The ounce is still a standard unit of
          mass in the US customary system of measurement. It is mostly used in
          the United States for measuring packaged food products, food portions,
          and postal items, among other things. The ounce is still used in some
          other countries around the world that have roots in British history
          and culture. Due to metrication, the United Kingdom (UK) no longer
          officially uses the ounce. It is however, still used in some settings
          in the UK, such as restaurants.
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
        Ounce to Kilogram Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Ounce to Kilogram
      </h1>
      <p>
        1 oz = 0.0283495231 kg
        <br />1 kg = 35.2739619496 oz
      </p>
      <p>
        <strong>Example: </strong>convert 15 oz to kg :
        <br />
        15 oz = 15 × 0.0283495231 kg = 0.4252428469 kg
      </p>
    </div>
  );
};

export default page;
