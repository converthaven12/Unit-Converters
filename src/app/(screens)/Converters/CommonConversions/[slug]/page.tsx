import { notFound } from "next/navigation";
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
};

export function generateStaticParams() {
  return Object.keys(CONVERSIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
const data = CONVERSIONS[slug];
  if (!data) return {};
  return {
    title: `${data.title} | ConvertHaven`,
    description: data.description,
    alternates: {
      canonical: `https://www.converthaven.com/Converters/CommonConversions/${params.slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
const data = CONVERSIONS[slug];
  if (!data) return notFound();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ConverterClient data={data} />
    </div>
  );
}
