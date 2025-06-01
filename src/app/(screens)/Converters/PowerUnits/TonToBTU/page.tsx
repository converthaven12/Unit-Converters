"use client";
import LinkToOthers from "@/app/utils/components/LinkToOthers/LinkToOthers";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Ton to BTU

const definitions = [
  {
    heading: "Ton (of refrigeration)",
    content: [
      "Definition: Ton of refrigeration is a unit of power used in refrigeration and air conditioning to describe the heat-extraction capacity.",
      "History/origin: Based on the cooling power of melting one ton (2000 pounds) of ice in 24 hours.",
      "Current use: Used to rate cooling capacity of air conditioners and refrigeration equipment.",
    ],
  },
  {
    heading: "British Thermal Unit (BTU)",
    content: [
      "Definition: BTU is a traditional unit of heat; it is the amount of heat required to raise the temperature of one pound of water by one degree Fahrenheit.",
      "History/origin: Originated in the 19th century in the UK and US for heating and cooling measurements.",
      "Current use: Commonly used in heating, ventilation, air conditioning, and refrigeration (HVAC) industries.",
    ],
  },
];

const TonToBTUPage = () => {
  return (
    <>
      <ReusableConversionPage
        title="Convert Ton of Refrigeration to British Thermal Unit (BTU)"
        fromUnit="Ton of Refrigeration"
        toUnit="British Thermal Unit (BTU)"
        convertFunction={(val) => val * 12000} // 1 Ton = 12,000 BTU/hr
        definitions={definitions}
        tableComponent={<ConversionTable />} // Table component for Ton to BTU
        conversionExample={
          <>
            Formula: BTU = Ton × 12,000
            <br />
            <strong>Example:</strong> convert 2 Ton to BTU:
            <br />2 × 12,000 = 24,000 BTU
          </>
        }
        reversePath="/Converters/Power/BTUToTon"
      />
      <LinkToOthers
        heading={"More Ton Conversions"}
        link={"/Converters/linkedConversions/TonToOthers"}
        label={"Ton to other..."}
      />
    </>
  );
};

export default TonToBTUPage;
