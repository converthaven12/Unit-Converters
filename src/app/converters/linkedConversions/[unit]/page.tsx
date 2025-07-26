// File: src/app/converters/[unit]/page.tsx

import Head from 'next/head';
import { conversionFactors, convert } from '../../../Helper/conversionFactors';

export const dynamicParams = false; // only the units you list get prerendered

/**  
 * Tell Next.js which `unit` slugs to prerender.  
 */
export async function generateStaticParams() {
  return Object.keys(conversionFactors).map((unit) => ({ unit }));
}

/**  
 * Page component must be async so it returns a Promise (matching Next’s PageProps).  
 * We accept `props: any` to avoid the built‑in PageProps mismatch.  
 */
export default async function Page(props: any) {
  const unit: string = props.params.unit;
  const entries = Object.entries(conversionFactors).map(
    ([otherUnit]) => ({
      otherUnit,
      value: convert(1, unit, otherUnit),
    })
  );

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

