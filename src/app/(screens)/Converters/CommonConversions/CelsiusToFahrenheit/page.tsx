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
      const fahrenheit = (value * 9) / 5 + 32;
      setToValue(fahrenheit.toFixed(2));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert Celsius to Fahrenheit
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
              <span className="ml-2 font-bold">Celsius</span>
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
              <span className="ml-2 font-bold">Fahrenheit</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/FahrenheitToCelsius")
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
                  name="kg"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">Celsius</span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="gram"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">Fahrenheit</span>
            </div>
          </div>
          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() =>
                router.push("/Converters/CommonConversions/FahrenheitToCelsius")
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Celsius</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> The Celsius (symbol: °C) is an SI
          (International System of Units) derived unit of temperature. It is
          defined based on the SI unit of temperature, the kelvin. The Celsius
          and Kelvin scales are precisely related, with a one-degree change in
          Celsius being equal to a one degree-change in kelvin. The kelvin (and
          thus Celsius) is defined based on the Boltzmann constant, k, which
          equals 1.380649 × 10<sup>-23</sup> when expressed in the unit J·K
          <sup>-1</sup>, a unit equivalent to kg·m<sup>2</sup>·s<sup>-2·</sup>K
          <sup>-1</sup>. The kilogram, meter, and second, are defined based on
          Planck's constant, h, the speed of light, c, and cesium frequency,
          ΔνCs.
        </p>
        <p>
          <strong>History/origin:</strong> From 1743 until 1954, the Celsius
          scale was based on 0°C for the freezing point of water and 100 °C for
          the boiling point of water, both at a pressure of one standard
          atmosphere, using mercury as the working material. This was not always
          the case, and originally 0°C was defined as the boiling point of water
          and 100°C was defined as the melting point of snow. Celsius as a unit
          and a scale was not widely used until this original definition was
          inverted. In 1954, the unit, "degree Celsius," as well as the Celsius
          scale were again re-defined to instead be based on absolute zero
          (-273.15 °C) and the triple point of VSMOW (specially purified water).
          This is the definition that was used up until 2019, when the kelvin
          was redefined based on the definitions of the second, meter, and
          kilogram.
        </p>
        <p>
          <strong>Current use: </strong>
          The Celsius scale replaced the Fahrenheit scale in most countries in
          the mid to late 20<sup>th</sup> century. Almost all countries around
          the world use this scale, except for those in which the metric system
          has not been adopted, such as the United States. Even in countries
          like the United States however, Celsius is widely used within the
          scientific community—it just is not widely used in everyday
          temperature references.
        </p>
      </section>
      {/* Section 2 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Fahrenheit</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> The Fahrenheit (symbol: °F) is a unit of
          temperature that was widely used prior to metrication. It is currently
          defined by two fixed points: the temperature at which water freezes,
          32°F, and the boiling point of water, 212°F, both at sea level and
          standard atmospheric pressure. The interval between the freezing and
          boiling point is divided into 180 equal parts.
        </p>
        <p>
          <strong>History/origin:</strong> The Fahrenheit scale was developed
          based on a measurement proposed in 1724 by the German physicist Daniel
          Gabriel Fahrenheit. He initially based the scale on an equal ice-salt
          mixture, selecting the values of 30°F for the freezing point of water,
          and 90°F for normal body temperature. He later adjusted the scale such
          that the melting point of ice was 32°F and body temperature was 96°F.
          He chose these values to simplify the degree markings he could make on
          his instruments, since this difference between the temperatures
          allowed him to mark degree lines by bisecting the interval six times.
          Later, when using the freezing and boiling points of water as fixed
          reference points for thermometers became popular, the scale was
          slightly re-defined such that there would be 180 degrees separating
          freezing and boiling point, resulting in normal human body temperature
          being approximately 98°F, rather than Fahrenheit's 96°F.
        </p>
        <p>
          <strong>Current use:</strong> Until the 1960's the Fahrenheit scale
          was the primary scale used in English-speaking countries. Today, most
          countries around the world use the Celsius temperature scale instead,
          many having made the change during their metrication processes
          (conversion to using the metric system of units). However, the
          Fahrenheit scale is still used as the official temperature scale in a
          number of countries, including the United States (as well as its
          unincorporated territories), the Bahamas, Belize, the Cayman Islands,
          and a few others.
        </p>
      </section>

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Celsius to Fahrenheit Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Celsius to Fahrenheit
      </h1>
      <p>
        F = 9/5 C + 32
        <br /> F = 5/9(F - 32)
      </p>
      <p>
        <strong>Example: </strong>convert 15 °C to °F :
        <br />
        15 °C = 15 × 9/5 + 32 = 59 °F
      </p>
    </div>
  );
};

export default page;
