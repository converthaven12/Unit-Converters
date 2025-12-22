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

type PageProps = {
  params: {
    slug: keyof typeof CONVERSIONS;
  };
};

export default function Page({ params }: PageProps) {
  const data = CONVERSIONS[params.slug];

  if (!data) {
    notFound();
  }

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
