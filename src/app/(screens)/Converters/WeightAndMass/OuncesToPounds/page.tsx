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
      const pounds = value * 0.0625;
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
        Convert ounces to pounds
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
              <span className="ml-2 font-bold">pound</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/WeightAndMass/PoundsToOunces")
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
                  name="oz"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">Ounce</span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="lbs"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">Pound</span>
            </div>
          </div>
          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() =>
                router.push("/Converters/WeightAndMass/PoundsToOunces")
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
        Ounce to Pound Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Ounce to Pound
      </h1>
      <p>
        1 oz = 0.0625 lbs
        <br />1 lbs = 16 oz
      </p>
      <p>
        <strong>Example: </strong>convert 15 oz to lbs :
        <br />
        15 oz = 15 × 0.0625 lbs = 0.9375 lbs
      </p>
    </div>
  );
};

export default page;
