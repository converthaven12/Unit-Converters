import ConverterClient from "./ConverterClient";
import { notFound } from "next/navigation";

/**
 * Conversion config
 * (abhi sirf 2 example, baad mein aur add kar sakte ho)
 */
const CONVERSIONS = {
  "cm-to-inches": {
    title: "Cm to Inches Converter",
    from: "Centimeter",
    to: "Inch",
  },
  "cm-to-feet": {
    title: "Cm to Feet Converter",
    from: "Centimeter",
    to: "Feet",
  },
};

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const data = CONVERSIONS[params.slug as keyof typeof CONVERSIONS];

  if (!data) {
    notFound();
  }

  return <ConverterClient data={data} />;
}
