import { notFound } from "next/navigation";
import ConverterClient from "./ConverterClient";

type Conversion = {
  title: string;
  description: string;
  from: string;
  to: string;
};

const CONVERSIONS: Record<string, Conversion> = {
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = CONVERSIONS[params.slug];
  if (!data) return {};

  return {
    title: `${data.title} | ConvertHaven`,
    description: data.description,
    alternates: {
      canonical: `https://www.converthaven.com/Converters/CommonConversions/${params.slug}`,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = CONVERSIONS[params.slug];
  if (!data) return notFound();

  return (
    <div style={{ padding: 16 }}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ConverterClient data={data} />
    </div>
  );
}
