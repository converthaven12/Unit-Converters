// File: src/app/screens/Converters/linkedConversions/[unit]/page.tsx

import { conversionFactors, convert } from '../../../../../../Helper/conversionFactors';
import Head from 'next/head';

export const dynamicParams = false; // only the units you list will build

/**
 * Pre‑generate one page per key in conversionFactors.
 */
export function generateStaticParams() {
  return Object.keys(conversionFactors).map((unit) => ({ unit }));
}

interface PageProps {
  params: { unit: string };
}

export default function Page({ params }: PageProps) {
  const { unit } = params;
  const entries = Object.entries(conversionFactors).map(([otherUnit]) => ({
    otherUnit,
    value: convert(1, unit, otherUnit),
  }));

  return (
    <>
      <Head>
        <title>{unit} to All Units Converter | Converthaven</title>
        <meta
          name="description"
          content={`Convert ${unit} to ${entries.length} other units instantly.`}
        />
      </Head>
      <main>
        <h1>{unit} to All Units Converter</h1>
        <table>
          <thead>
            <tr>
              <th>Unit</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(({ otherUnit, value }) => (
              <tr key={otherUnit}>
                <td>{otherUnit}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
