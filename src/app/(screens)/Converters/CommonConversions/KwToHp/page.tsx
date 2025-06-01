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
      const horsepower = value / 0.7457;
      setToValue(horsepower.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">Convert kw to hp</h1>
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
              <span className="ml-2 font-bold">kilowatt</span>
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
              <span className="ml-2 font-bold">horsepower (metric)</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/HpToKw")
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
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Kilowatt</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A kilowatt (symbol: kw) is a unit of
          power in the International System of Units (SI). The base unit of the
          kilowatt is the watt, which was named after Scottish inventor James
          Watt. As is consistent with SI units, the prefix kilo- means that a
          kilowatt equals one thousand watts or one thousand joules per second.
        </p>
        <p>
          <strong>History/origin:</strong> The base unit of the kilowatt is the
          watt, which was named after a Scottish inventor named James Watt. This
          was first proposed in 1882 by Sir Charles William Siemens, an engineer
          and entrepreneur, who suggested the use of Watt's name as a unit of
          power. He defined the unit within the system of units being used at
          the time, and his definition was adopted in 1908.
        </p>
        <p>
          <strong>Current use: </strong>
          Kilowatts are used worldwide, typically to express the output power of
          engines and the power of electric motors, tools, machines, and
          heaters. Electricity used by a home is typically measured in kilowatt
          hours, or kWh, meaning 1000 watts being applied over a period of one
          hour. Megawatt or gigawatt hours may be used in larger buildings or
          for industrial applications.
        </p>
      </section>
      {/* Section 2 */}

      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Horsepower (metric)
      </h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> The unit horsepower (symbol: hp) is a
          unit of measurement of power (the rate at which work is done).
          Mechanical horsepower, also known as imperial horsepower, is defined
          as approximately 745.7 watts (550 ft·lbf/s), while metric horsepower
          is approximately 735.5 watts (75 kgf·m/s). Boiler horsepower, albeit a
          less common measurement than either imperial or metric horsepower, is
          used for rating steam boilers, and is equivalent to 34.5 pounds of
          water evaporated per hour at 212 degrees Fahrenheit, or 9809.5 watts.
          In addition, when rating electric motors, one horsepower is equal to
          746 watts.
        </p>
        <p>
          <strong>History/origin:</strong> The term horsepower was adopted in
          the late 18th century by James Watt to compare the output of steam
          engines with the power of draft horses. Watt was not the first person
          to compare the output of horses to that of engines. As early as 1702,
          Thomas Savery referenced horses when describing the output of an
          engine. It is believed that Watt built on this idea and introduced the
          term horsepower, largely in an effort to market his steam engine. The
          term was later expanded to include other types of output power such as
          the imperial and metric horsepower measurements commonly used today.
        </p>
      </section>
      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Kilowatt to Horsepower (metric) Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Kilowatt to Horsepower (metric)
      </h1>
      <p>
        1 kW = 1.3596216173 horsepower (metric)
        <br />1 horsepower (metric) = 0.73549875 kW
      </p>
      <p>
        <strong>Example: </strong>convert 15 kW to horsepower (metric) :
        <br />
        15 kW = 15 × 1.3596216173 horsepower (metric) = 20.3943242596 horsepower
        (metric)
      </p>
    </div>
  );
};

export default page;
