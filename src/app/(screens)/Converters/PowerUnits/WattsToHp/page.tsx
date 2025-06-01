"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Watts to Hp

const definitions = [
  {
    heading: "Watts (W)",
    content: [
      "Definition: Watt is the SI unit of power, defined as one joule per second.",
      "History/origin: Named after James Watt to honor his contributions to the steam engine.",
      "Current use: Used worldwide to measure electrical and mechanical power.",
    ],
  },
  {
    heading: "Horsepower (Hp)",
    content: [
      "Definition: Horsepower is a unit of power that measures the rate at which work is done, originally defined to compare the power of horses to machines.",
      "History/origin: Coined by James Watt in the late 18th century to market his steam engines.",
      "Current use: Commonly used to rate engines, motors, and other mechanical devices.",
    ],
  },
];

const WattsToHpPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Watts (W) to Horsepower (Hp)"
      fromUnit="Watts (W)"
      toUnit="Horsepower (Hp)"
      convertFunction={(val) => val / 745.7} // 1 W = 1/745.7 Hp
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Watts to Hp
      conversionExample={
        <>
          Formula: Horsepower = Watts ÷ 745.7
          <br />
          <strong>Example:</strong> convert 1491.4 W to Hp:
          <br />
          1491.4 ÷ 745.7 = 2 Hp
        </>
      }
      reversePath="/Converters/PowerUnits/HpToWatts"
    />
  );
};

export default WattsToHpPage;
