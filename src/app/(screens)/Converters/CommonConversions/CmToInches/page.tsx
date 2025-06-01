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
      const inches = value * 0.3937007874;
      setToValue(inches.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert cm to inches
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
              <span className="ml-2 font-bold">inch</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/InchesToCm")
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
          length in the International System of Units (SI), the current form of
          the metric system. It is defined as 1/100 meters.
        </p>
        <p>
          <strong>History/origin:</strong> A centimeter is based on the SI unit
          meter, and as the prefix "centi" indicates, is equal to one hundredth
          of a meter. Metric prefixes range from factors of 10<sup>-18</sup> to
          10<sup>18</sup>based on a decimal system, with the base (in this case
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
      {/* Section 2 */}
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

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Centimeter to Inch Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Centimeter to Inch
      </h1>
      <p>
        1 cm = 0.3937007874 in
        <br />1 in = 2.54 cm
      </p>
      <p>
        <strong>Example: </strong>convert 15 cm to in :
        <br />
        15 cm = 15 × 0.3937007874 in = 5.905511811 in
      </p>
    </div>
  );
};

export default page;
