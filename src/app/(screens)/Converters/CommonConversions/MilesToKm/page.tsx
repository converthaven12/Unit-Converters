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
      const kilometers = value * 1.609344;
      setToValue(kilometers.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">Convert miles to km</h1>
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
              <span className="ml-2 font-bold">mile</span>
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
              <span className="ml-2 font-bold">kilometer</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/KmToMiles")
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
                  name="mile"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">mile</span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="kilometer"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">kilometer</span>
            </div>
          </div>
          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() =>
                router.push("/Converters/CommonConversions/KmToMiles")
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Mile</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A mile (symbol: mi) is a unit of length
          commonly used in the imperial and U.S. customary systems. One mile is
          exactly equal to 1,609.344 meters or 5,280 feet. It is typically used
          to measure longer distances, such as between towns or along roads.
        </p>
        <p>
          <strong>History/origin:</strong> The mile has its roots in the Roman
          "mille passus," meaning "a thousand paces," which measured
          approximately 1,480 meters. Over centuries, different countries
          developed varying definitions of the mile, but the international mile
          was standardized in 1959 by an agreement between English-speaking
          countries. This ensured uniformity in the mile’s length as exactly
          1,609.344 meters.
        </p>
        <p>
          <strong>Current use:</strong> The mile is primarily used in the United
          States, the United Kingdom, and a few other countries for measuring
          distances on road signs, in aviation, and for land surveying. While
          most of the world has adopted the metric system, the mile remains an
          important unit for everyday use in countries that still employ
          imperial or customary measurements.
        </p>
      </section>

      {/* Section 2 */}

      <h1 className="text-xl text-[#006633] font-semibold mt-10">Kilometer</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A kilometer (symbol: km) is a unit of
          length in the metric system, equal to 1,000 meters. It is commonly
          used to measure longer distances such as those between cities or
          geographical features.
        </p>
        <p>
          <strong>History/origin:</strong> The kilometer originated as part of
          the metric system established during the French Revolution in the late
          18th century. It was introduced to provide a decimal-based system of
          measurement that could easily scale from the base unit of the meter.
          Over time, the kilometer became widely adopted internationally for
          measuring large distances.
        </p>
        <p>
          <strong>Current use:</strong> The kilometer is extensively used
          worldwide, especially in countries that have adopted the metric
          system, for road distances, maps, and geographic measurements. It is
          the standard unit for expressing distances in transportation, travel,
          and many scientific disciplines.
        </p>
      </section>
      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Mile to Kilometer Conversion Table
      </h1>
      <ConversionTable />
      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Mile to Kilometer
      </h1>
      <p>
        1 mi, mi(Int) = 1.609344 km
        <br />1 km = 0.6213711922 mi, mi(Int)
      </p>
      <p>
        <strong>Example: </strong>convert 15 mi, mi(Int) to km :
        <br />
        15 mi, mi(Int) = 15 × 1.609344 km = 24.14016 km
      </p>
    </div>
  );
};

export default page;
