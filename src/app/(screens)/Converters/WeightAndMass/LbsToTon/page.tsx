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
      const tons = value * 0.0005;
      setToValue(tons.toFixed(6));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert lbs to stone
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
              <span className="ml-2 font-bold">ton (metric)</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() => router.push("/Converters/WeightAndMass/TonToLbs")}
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
                  name="lbs"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">Pound</span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="ton"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">
                Ton (metric)
              </span>
            </div>
          </div>
          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() => router.push("/Converters/WeightAndMass/TonToLbs")}
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Ton</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A ton is a unit of weight and mass. In
          the United States and Canada, the ton, also known as the short ton, is
          defined as 2,000 pounds, or 908 kilograms. In the United Kingdom, the
          ton, sometimes referred to as the long ton, is defined as 2,240
          avoirdupois pounds, or 1,016 kg. The tonne, defined in the
          International System of Units (SI) and also known as the metric ton is
          defined as 2,204.623 pounds, or 1,000 kilograms.
        </p>
        <p>
          <strong>History/origin:</strong> The term "ton" is derived from the
          "tun," a term that was applied to a large cask that could contain
          between 175 to 213 imperial gallons, could weigh around 2,000 pounds,
          and could occupy approximately 60 cubic feet, or 1.7 m3 of space.
          Although various definitions of the ton are still used in certain
          countries, the metric ton, or tonne, is the preferred definition of
          the ton.
        </p>
        <p>
          <strong>Current use:</strong> The long ton is used in the United
          Kingdom along with other countries that still use the imperial system,
          the short ton is used mainly in the United States, and the tonne is
          used worldwide. Although both the UK, the US, and some other countries
          still use other definitions of the ton, the tonne is the legally
          designated form of the ton for use in trade.
        </p>
      </section>

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Pound to Ton (metric) Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Pound to Ton (metric)
      </h1>
      <p>
        1 lbs = 0.0004535924 t
        <br />1 t = 2204.6226218488 lbs
      </p>
      <p>
        <strong>Example: </strong>convert 15 lbs to t :
        <br />
        15 lbs = 15 × 0.0004535924 t = 0.0068038855 t
      </p>
    </div>
  );
};

export default page;
