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
      const meters = value / 1.09361;
      setToValue(meters.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert yards to meters
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
              <span className="ml-2 font-bold">yard</span>
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
              <span className="ml-2 font-bold">meter</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/MetersToYards")
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
                  name="yard"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">yard</span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="meter"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">meter</span>
            </div>
          </div>
          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() =>
                router.push("/Converters/CommonConversions/MetersToYards")
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

      <h1 className="text-xl text-[#006633] font-semibold mt-10">Yard</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong>A yard (symbol: yd) is a unit of length in
          both the imperial and US customary systems of measurement. Since 1959,
          a yard has been defined as exactly 0.9144 meters. It is also equal to
          3 feet, or 36 inches.
        </p>
        <p>
          <strong>History/origin:</strong> The origin of the yard as a unit is
          unclear. It is an English unit (predecessor of imperial units) and the
          term was derived from "gerd" in Old English, the earliest historical
          form of the English language. Some suggest that the yard could have
          been derived based on the girth of a person's waist.
        </p>
        <p>
          <strong>Current use:</strong> The yard is commonly used in
          field-length measurement for certain sports such as American and
          Canadian football, and association football (soccer). The yard is also
          used in cricket pitch dimensions, and sometimes in golf fairway
          measurements. In the United Kingdom (UK) as well as the United States,
          the yard is frequently used when referring to distance. In the UK, it
          is also a legal requirement that road signs indicating shorter
          distances are displayed in yards.
        </p>
      </section>

      {/* Section 2 */}

      <h1 className="text-xl text-[#006633] font-semibold mt-10">Meter</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A meter, or metre (symbol: m), is the
          base unit of length and distance in the International System of Units
          (SI). The meter is defined as the distance traveled by light in 1/299
          792 458 of a second. This definition was slightly modified in 2019 to
          reflect changes in the definition of the second.
        </p>
        <p>
          <strong>History/origin:</strong> Originally, in 1793, the meter was
          defined as one ten-millionth of the distance from the equator to the
          North Pole. This changed in 1889, when the International prototype
          metre was established as the length of a prototype meter bar (made of
          an alloy of 90% platinum and 10% iridium) measured at the melting
          point of ice. In 1960, the meter was again redefined, this time in
          terms of a certain number of wavelengths of a certain emission line of
          krypton-86. The current definition of the meter is effectively the
          same as the definition that was adopted in 1983, with slight
          modifications due to the change in definition of the second.
        </p>
        <p>
          <strong>Current use:</strong> Being the SI unit of length, the meter
          is used worldwide in many applications such as measuring distance,
          height, length, width, etc. The United States is one notable exception
          in that it largely uses US customary units such as yards, inches,
          feet, and miles instead of meters in everyday use.
        </p>
      </section>
      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Yard to Meter Conversion Table
      </h1>
      <ConversionTable />
      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Yard to Meter
      </h1>
      <p>
        1 yd = 0.9144 m
        <br />1 m = 1.0936132983 yd
      </p>
      <p>
        <strong>Example: </strong>convert 15 yd to m :
        <br />
        15 yd = 15 × 0.9144 m = 13.716 m
      </p>
    </div>
  );
};

export default page;
