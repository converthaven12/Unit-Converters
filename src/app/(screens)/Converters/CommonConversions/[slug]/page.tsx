import { notFound } from "next/navigation";

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

type Slug = keyof typeof CONVERSIONS;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}) {
  const { slug } = await params;

  const data = CONVERSIONS[slug];
  if (!data) return notFound();

  return (
    <div style={{ padding: 20 }}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>
        From <b>{data.from}</b> to <b>{data.to}</b>
      </p>
    </div>
  );
}
