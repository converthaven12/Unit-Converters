import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const ConverterClient = dynamic(() => import("./ConverterClient"), {
  ssr: false,
});

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

export default function Page({ params }: { params: { slug: string } }) {
  const data = CONVERSIONS[params.slug as keyof typeof CONVERSIONS];
  if (!data) notFound();

  return <ConverterClient data={data} />;
}
