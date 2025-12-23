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

type Params = { slug: string };
type Slug = keyof typeof CONVERSIONS;

async function resolveParams(p: Params | Promise<Params>) {
  return await Promise.resolve(p);
}

export async function generateMetadata({
  params,
}: {
  params: Params | Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await resolveParams(params);
  const data = CONVERSIONS[slug as Slug];

  if (!data) return {};

  return {
    title: `${data.title} | ConvertHaven`,
    description: data.description,
  };
}

export default async function Page({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const { slug } = await resolveParams(params);
  const data = CONVERSIONS[slug as Slug];

  if (!data) notFound();

  return <ConverterClient data={data} />;
}
