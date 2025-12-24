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
      const mph = value * 0.621371;
      setToValue(mph.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };

  return (
    <div className="min-h-screen">
      {/* MAIN H1 (only one H1 on the page) */}
      <h1 className="font-bold text-4xl text-[#006633]">Convert kph to mph</h1>

      {/* Converter UI */}
      <div className="w-full max-w-xl mt-10 px-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
          <div className="space-y-4 w-full">
            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">From:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={fromValue}
                  setter={(n, v) => setFromValue(v)}
                  name="kilometer/hour"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">
                kilometer/hour
              </span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="mile/hour"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">mile/hour</span>
            </div>
          </div>

          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() =>
                router.push("/Converters/CommonConversions/MphToKph")
              }
              title="Switch to mph to kph"
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
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        Kilometers per hour (kph)
      </h2>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> Kilometers per hour (symbol: km/h or kph)
          measures speed by showing how many kilometers an object travels in one
          hour. The metric system uses this unit widely, especially in countries
          that follow metric measurements.
        </p>
        <p>
          <strong>History/origin:</strong> The kilometer per hour comes from two
          base metric units: kilometers (distance) and hours (time). As the
          metric system spread during the 19th and 20th centuries, kph became a
          standard speed unit across most regions.
        </p>
        <p>
          <strong>Current use:</strong> Many countries in Europe, Asia, Africa,
          and South America use kph on road signs, vehicle speedometers, and
          weather reports (for example, wind speed).
        </p>
      </section>

      {/* Section 2 */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        Miles per hour (mph)
      </h2>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> Miles per hour (symbol: mph) measures
          speed by showing how many miles an object travels in one hour. The
          imperial and US customary systems use mph, mainly in the United States
          and a few other places.
        </p>
        <p>
          <strong>History/origin:</strong> The mph unit comes from older
          measurement systems where people used miles for distance. One mile
          equals exactly 1,609.344 meters. Transportation and road laws kept mph
          in use for decades.
        </p>
        <p>
          <strong>Current use:</strong> The United States, the United Kingdom,
          and some Caribbean nations still use mph on roads. Aviation also uses
          mph for specific speed indications in certain contexts.
        </p>
      </section>

      {/* Section 3 */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        Kilometer/hour to Mile/hour Conversion Table
      </h2>
      <ConversionTable />

      {/* Section 4 */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Kilometer/hour to Mile/hour
      </h2>
      <section className="space-y-3 text-justify">
        <p>
          <strong>Conversion factors:</strong>
          <br />
          1 km/h = 0.6213711922 mi/h
          <br />
          1 mi/h = 1.609344 km/h
        </p>
        <p>
          <strong>Example:</strong> Convert 15 km/h to mi/h:
          <br />
          15 × 0.6213711922 = 9.3205678836 mi/h (≈ 9.32 mph)
        </p>
      </section>

      {/* Section 5 */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        KPH to MPH Converter Guide
      </h2>
      <section className="space-y-3 text-justify">
        <p>
          A kph to mph converter helps you convert speed values from kilometers
          per hour to miles per hour in seconds. Many people need this
          conversion when they travel, compare vehicles, or read speed limits in
          another country.
        </p>
        <p>
          The metric system uses kilometers per hour (kph). However, the United
          States and a few other regions use miles per hour (mph). Because of
          this difference, a conversion tool saves time and avoids confusion.
        </p>
      </section>

      {/* Section 6 */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        KPH vs MPH: What’s the Difference?
      </h2>
      <section className="space-y-3 text-justify">
        <p>
          KPH and MPH both measure speed, but they use different distance units.
          One kilometer is shorter than one mile. As a result, kph values look
          higher than mph for the same real-world speed.
        </p>
        <p>
          For example, 100 kph equals about 62 mph. The car moves at the same
          speed. Only the unit changes.
        </p>
      </section>

      {/* Section 7 */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        When Do You Need to Convert KPH to MPH?
      </h2>
      <section className="space-y-3 text-justify">
        <p>
          People convert kph to mph in many everyday situations. For example, you
          may need it when you rent a car abroad or drive in a country with
          different speed units.
        </p>
        <p>
          In addition, students and engineers use speed conversion while solving
          problems or checking specifications. Athletes also use it to compare
          cycling and running speed across different apps.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>International travel and road speed limits</li>
          <li>Vehicle specs and performance comparisons</li>
          <li>Fitness tracking and sports analysis</li>
          <li>Engineering, aviation, and navigation</li>
        </ul>
      </section>

      {/* Section 8 */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        Manual Formula vs Online Converter
      </h2>
      <section className="space-y-3 text-justify">
        <p>
          You can convert speed manually using a formula. However, manual
          calculations may introduce rounding issues, especially when you convert
          many values.
        </p>
        <p>
          An online kph to mph converter gives instant results. It also reduces
          mistakes and saves time.
        </p>
      </section>

      {/* Section 9 */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        Common KPH to MPH Examples
      </h2>
      <section className="space-y-3 text-justify">
        <p>These common conversions help users understand speed limits quickly:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>30 kph ≈ 18.64 mph</li>
          <li>60 kph ≈ 37.28 mph</li>
          <li>90 kph ≈ 55.92 mph</li>
          <li>110 kph ≈ 68.35 mph</li>
          <li>130 kph ≈ 80.78 mph</li>
        </ul>
        <p>
          Therefore, when you see a 90 kph speed limit in many European
          countries, you can think of it as about 56 mph.
        </p>
      </section>

      {/* Section 10 */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        Frequently Asked Questions
      </h2>
      <section className="space-y-3 text-justify">
        <p>
          <strong>Is kph the same as km/h?</strong> Yes. Both terms mean
          kilometers per hour.
        </p>
        <p>
          <strong>Why do some countries use mph?</strong> Some countries follow
          older systems, so they kept miles as the standard distance unit.
        </p>
        <p>
          <strong>Is this converter accurate?</strong> Yes. It uses the standard
          factor: 1 kph = 0.621371 mph.
        </p>
        <p>
          <strong>Can I use this converter on mobile?</strong> Yes. The tool
          works on phones, tablets, and desktops.
        </p>
      </section>

      {/* Section 11 */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        Final Notes
      </h2>
      <section className="space-y-3 text-justify">
        <p>
          A kph to mph converter solves a common problem. It helps you understand
          speed limits, compare vehicles, and avoid confusion when you switch
          between systems.
        </p>
        <p>
          In short, use this page whenever you need fast and accurate speed
          conversion.
        </p>
      </section>
    </div>
  );
};

export default page;
