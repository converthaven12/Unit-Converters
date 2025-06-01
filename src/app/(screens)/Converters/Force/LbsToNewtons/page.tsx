"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adapt this table for lbs to N

const definitions = [
  {
    heading: "Pound-force (lbf)",
    content: [
      "Definition: A pound-force is a unit of force in the Imperial system, defined as the force exerted by gravity on a mass of one pound at the Earth's surface.",
      "History/origin: Commonly used in the United States and other countries using Imperial units.",
      "Current use: Pound-force is widely used in engineering and everyday measurements in Imperial unit countries.",
    ],
  },
  {
    heading: "Newton (N)",
    content: [
      "Definition: A newton is the SI unit of force, defined as the force required to accelerate one kilogram of mass by one meter per second squared.",
      "History/origin: Named after Sir Isaac Newton for his work in classical mechanics.",
      "Current use: Newtons are the standard unit of force used globally in physics and engineering.",
    ],
  },
];

const LbsToNewtonsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Pounds-Force to Newtons"
      fromUnit="Pounds-Force (lbf)"
      toUnit="Newtons (N)"
      convertFunction={(val) => val / 0.224809} // 1 lbf ≈ 4.44822 N (inverse of 0.224809)
      definitions={definitions}
      tableComponent={<ConversionTable />} // Use a ConversionTable adapted for lbs to N
      conversionExample={
        <>
          1 pound-force ≈ 4.44822 newtons
          <br />
          <strong>Example:</strong> convert 22.4809 pounds-force to newtons:
          <br />
          22.4809 ÷ 0.224809 = 100 newtons
        </>
      }
      reversePath="/Converters/Force/NewtonsToLbs"
    />
  );
};

export default LbsToNewtonsPage;
