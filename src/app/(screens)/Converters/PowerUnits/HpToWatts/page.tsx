"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Hp to Watts

const definitions = [
  {
    heading: "Horsepower (Hp)",
    content: [
      "Definition: Horsepower is a unit of power that measures the rate at which work is done, originally defined to compare the power of horses to machines.",
      "History/origin: Coined by James Watt in the late 18th century to market his steam engines.",
      "Current use: Commonly used to rate engines, motors, and other mechanical devices.",
    ],
  },
  {
    heading: "Watts (W)",
    content: [
      "Definition: Watt is the SI unit of power, defined as one joule per second.",
      "History/origin: Named after James Watt to honor his contributions to the steam engine.",
      "Current use: Used worldwide to measure electrical and mechanical power.",
    ],
  },
];

const HpToWattsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Horsepower (Hp) to Watts (W)"
      fromUnit="Horsepower (Hp)"
      toUnit="Watts (W)"
      convertFunction={(val) => val * 745.7} // 1 Hp = 745.7 Watts
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Hp to Watts
      conversionExample={
        <>
          Formula: Watts = Horsepower × 745.7
          <br />
          <strong>Example:</strong> convert 2 Hp to Watts:
          <br />2 × 745.7 = 1491.4 W
        </>
      }
      reversePath="/Converters/PowerUnits/WattsToHp"
    />
  );
};

export default HpToWattsPage;
