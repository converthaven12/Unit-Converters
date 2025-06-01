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
      const millimeters = value * 25.4;
      setToValue(millimeters.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert inches to mm
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
              <span className="ml-2 font-bold">inches</span>
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
              <span className="ml-2 font-bold">millimeter</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/MmToInches")
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
                  name="inches"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">inches</span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="millimeter"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">millimeter</span>
            </div>
          </div>
          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() =>
                router.push("/Converters/CommonConversions/MmToInches")
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Millimeter</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A millimeter (symbol: mm) is a unit of
          length in the metric system, equal to one-thousandth of a meter (0.001
          m). It is a standard unit used for measuring small distances and
          thicknesses, especially in engineering and manufacturing.
        </p>
        <p>
          <strong>History/origin:</strong> The millimeter is derived from the
          meter, which was originally defined in 1793 during the French
          Revolution as one ten-millionth of the distance from the equator to
          the North Pole along a meridian. The metric system was created to
          provide a universal and standardized measurement system, and the
          millimeter emerged as a practical subunit of the meter for
          smaller-scale measurements.
        </p>
        <p>
          <strong>Current use:</strong> The millimeter is widely used around the
          world, particularly in countries that have adopted the metric system.
          It is commonly used in mechanical engineering, design specifications,
          science, and everyday measurements, such as the thickness of paper,
          the diameter of wires, or dimensions in construction and
          manufacturing. In many contexts, it has replaced the inch due to the
          global standardization of the metric system.
        </p>
      </section>

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Inch to Millimeter Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Inch to Millimeter
      </h1>
      <p>
        1 in = 25.4 mm
        <br />1 mm = 0.0393700787 in
      </p>
      <p>
        <strong>Example: </strong>convert 15 in to mm :
        <br />
        15 in = 15 × 25.4 mm = 381 mm
      </p>
    </div>
  );
};

export default page;
