"use client";

import Head from "next/head";
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
      const centimeters = value * 2.54;
      setToValue(centimeters.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };

  return (
    <>
      <Head>
        <title>
          Inches to CM Converter – Convert Inches to Centimeters (cm) | Converthaven
        </title>
        <meta
          name="description"
          content="Free Inches to CM converter for students and daily use. Convert inches to centimeters (cm) instantly with accurate results, conversion table, and examples."
        />
        <link
          rel="canonical"
          href="https://www.converthaven.com/Converters/CommonConversions/InchesToCm"
        />
      </Head>

      <div className="min-h-screen">
        <h1 className="font-bold text-4xl text-[#006633]">
          Convert inches to cm
        </h1>

        <div className="w-full max-w-xl mt-10 px-4 py-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
            <div className="space-y-4 w-full">
              <div className="flex items-center">
                <label className="w-16 font-semibold text-gray-700">From:</label>
                <div className="flex-1 max-w-xs">
                  <InputTag
                    value={fromValue}
                    setter={(n, v) => setFromValue(v)}
                    name="inch"
                  />
                </div>
                <span className="ml-2 font-bold text-[#006633]">inch</span>
              </div>

              <div className="flex items-center">
                <label className="w-16 font-semibold text-gray-700">To:</label>
                <div className="flex-1 max-w-xs">
                  <InputTag
                    value={toValue}
                    setter={() => {}}
                    disabled={true}
                    name="centimeter"
                  />
                </div>
                <span className="ml-2 font-bold text-[#006633]">centimeter</span>
              </div>
            </div>

            <div className="self-center sm:self-start">
              <span
                className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
                onClick={() =>
                  router.push("/Converters/CommonConversions/CmToInches")
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
        <h1 className="text-xl text-[#006633] font-semibold mt-10">Inch</h1>
        <section className="space-y-3 text-justify">
          <p className="mt-2">
            <strong>Definition:</strong> An inch (symbol: in) is a unit of length
            in the imperial and US customary systems of measurement. An inch was
            defined to be equivalent to exactly 25.4 millimeters in 1959. There
            are 12 inches in a foot and 36 inches in a yard.
          </p>
          <p>
            <strong>History/origin:</strong> The term "inch" was derived from the
            Latin unit "uncia" which equated to "one-twelfth" of a Roman foot.
            <br />
            There have been a number of different standards for the inch in the
            past, with the current definition being based on the international
            yard. One of the earliest definitions of the inch was based on
            barleycorns, where an inch was equal to the length of three grains of
            dry, round barley placed end-to-end. Another version of the inch is
            also believed to have been derived from the width of a human thumb,
            where the length was obtained from averaging the width of three
            thumbs: a small, a medium, and a large one.
          </p>
          <p>
            <strong>Current use:</strong> The inch is mostly used in the United
            States, Canada, and the United Kingdom. It is also sometimes used in
            Japan (as well as other countries) in relation to electronic parts,
            like the size of display screens.
          </p>
        </section>

        {/* Section 2 */}
        <h1 className="text-xl text-[#006633] font-semibold mt-10">
          Centimeter
        </h1>
        <section className="space-y-3 text-justify">
          <p className="mt-2">
            <strong>Definition:</strong> A centimeter (symbol: cm) is a unit of
            length in the International System of Units (SI), the current form of
            the metric system. It is defined as 1/100 meters.
          </p>
          <p>
            <strong>History/origin:</strong> A centimeter is based on the SI unit
            meter, and as the prefix "centi" indicates, is equal to one hundredth
            of a meter. Metric prefixes range from factors of 10<sup>-18</sup> to
            10<sup>18</sup> based on a decimal system, with the base (in this case
            the meter) having no prefix and having a factor of 1. Learning some of
            the more commonly used metric prefixes, such as kilo-, mega-, giga-,
            tera-, centi-, milli-, micro-, and nano-, can be helpful for quickly
            navigating metric units
          </p>
          <p>
            <strong>Current use: </strong>
            The centimeter, like the meter, is used in all sorts of applications
            worldwide (in countries that have undergone metrication) in instances
            where a smaller denomination of the meter is required. Height is
            commonly measured in centimeters outside of countries like the United
            States.
          </p>
        </section>

        {/* Section 3 */}
        <h1 className="text-xl text-[#006633] font-semibold mt-10">
          Inch to Centimeter Conversion Table
        </h1>
        <ConversionTable />

        {/* Section 4 */}
        <h1 className="text-xl text-[#006633] font-semibold mt-10">
          How to Convert Inch to Centimeter
        </h1>
        <p>
          1 in = 2.54 cm
          <br />1 cm = 0.3937007874 in
        </p>
        <p>
          <strong>Example: </strong>convert 15 in to cm :
          <br />
          15 in = 15 × 2.54 cm = 38.1 cm
        </p>
      </div>
    </>
  );
};

export default page;
