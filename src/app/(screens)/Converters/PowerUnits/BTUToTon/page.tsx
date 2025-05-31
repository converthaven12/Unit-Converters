"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for BTU to Ton

const definitions = [
  {
    heading: "British Thermal Unit (BTU)",
    content: [
      "Definition: BTU is a traditional unit of heat; it is the amount of heat required to raise the temperature of one pound of water by one degree Fahrenheit.",
      "History/origin: Originated in the 19th century in the UK and US for heating and cooling measurements.",
      "Current use: Commonly used in heating, ventilation, air conditioning, and refrigeration (HVAC) industries.",
    ],
  },
  {
    heading: "Ton (of refrigeration)",
    content: [
      "Definition: Ton of refrigeration is a unit of power used in refrigeration and air conditioning to describe the heat-extraction capacity.",
      "History/origin: Based on the cooling power of melting one ton (2000 pounds) of ice in 24 hours.",
      "Current use: Used to rate cooling capacity of air conditioners and refrigeration equipment.",
    ],
  },
];

const BTUToTonPage = () => {
  return (
    <ReusableConversionPage
      title="Convert British Thermal Unit (BTU) to Ton of Refrigeration"
      fromUnit="British Thermal Unit (BTU)"
      toUnit="Ton of Refrigeration"
      convertFunction={(val) => val / 12000} // 1 Ton = 12,000 BTU/hr
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for BTU to Ton
      conversionExample={
        <>
          Formula: Ton = BTU ÷ 12,000
          <br />
          <strong>Example:</strong> convert 24,000 BTU to Ton:
          <br />
          24,000 ÷ 12,000 = 2 Ton
        </>
      }
      reversePath="/Converters/Power/TonToBTU"
    />
  );
};

export default BTUToTonPage;
