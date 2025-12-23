import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ConverterClient from "./ConverterClient";

const CONVERSIONS = {
  "cm-to-inches": {
    title: "Cm to Inches Converter",
    description: "Convert centimeters to inches instantly.",
    from: "Centimeter",
    to: "Inch",
  },
  "cm-to-feet": {
    title: "Cm to Feet Converter",
    description: "Convert centimeters to feet instantly.",
    from: "Centimeter",
    to: "Feet",
  },
} as const;

type Params = { slug: keyof typeof CONVERSIONS };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = CONVERSIONS[slug];

  if (!data) return {};

  return {
    title: `${data.title} | ConvertHaven`,
    description: data.description,
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const data = CONVERSIONS[slug];

  if (!data) notFound();

  return <ConverterClient data={data} />;
}
