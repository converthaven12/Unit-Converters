// File: src/app/screens/Converters/linkedConversions/[unit]/page.tsx

import Head from 'next/head'
// ↑ we’ll use a plain relative path for the helper:
import { conversionFactors, convert } from '../../../../../../Helper/conversionFactors'

export const dynamicParams = false // Only the units you list will render.

/**
 * Tell Next.js which `unit` slugs to prerender.
 */
export async function generateStaticParams() {
  return Object.keys(conversionFactors).map((unit) => ({ unit }))
}

export default async function Page(props: any) {
  // mark as async so it satisfies Next’s PageProps signature
  const unit: string = props.params.unit
  const entries = Object.entries(conversionFactors).map(([otherUnit]) => ({
    otherUnit,
    value: convert(1, unit, otherUnit),
  }))

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
        <h1>{unit} → all units</h1>
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
  )
}
