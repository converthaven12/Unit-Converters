"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adapt this table for Nm to ft·lb

const definitions = [
  {
    heading: "Newton-Meter (Nm)",
    content: [
      "Definition: A newton-meter is the SI unit of torque, defined as the torque resulting from a force of one newton applied at a distance of one meter from the pivot point.",
      "History/origin: Adopted internationally with the SI system, named after Sir Isaac Newton.",
      "Current use: Newton-meters are the standard unit for torque in most scientific and engineering disciplines worldwide.",
    ],
  },
  {
    heading: "Foot-Pound (ft·lb)",
    content: [
      "Definition: A foot-pound is a unit of torque (or energy) in the Imperial system, defined as the torque resulting from a force of one pound-force applied at a distance of one foot from the pivot point.",
      "History/origin: Commonly used in the United States and other countries that use Imperial units, especially in engineering and automotive contexts.",
      "Current use: Foot-pounds are widely used in mechanical and automotive engineering to measure torque.",
    ],
  },
];

const NmToFtLbPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Newton-Meters to Foot-Pounds"
      fromUnit="Newton-Meters (Nm)"
      toUnit="Foot-Pounds (ft·lb)"
      convertFunction={(val) => val * 0.73756} // 1 Nm = 0.73756 ft·lb
      definitions={definitions}
      tableComponent={<ConversionTable />} // Should be adapted for Nm to ft·lb
      conversionExample={
        <>
          1 newton-meter = 0.73756 foot-pounds
          <br />
          1 foot-pound = 1.35582 newton-meters
          <br />
          <strong>Example:</strong> convert 67.791 newton-meters to foot-pounds:
          <br />
          67.791 × 0.73756 = 50 foot-pounds
        </>
      }
      reversePath="/Converters/TorqueUnits/FtLbToNm"
    />
  );
};

export default NmToFtLbPage;
