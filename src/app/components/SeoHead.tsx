'use client'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import keywordMap from '@/data/keywordMap.json'

const defaultMeta = {
  title: 'ConvertHaven — Instant Unit Conversions',
  description: 'Convert units quickly and accurately with our free converters.',
}

export default function SeoHead() {
  const pathname = usePathname()
  const [meta, setMeta] = useState(defaultMeta)
  const [canonical, setCanonical] = useState('https://www.converthaven.com/')

  useEffect(() => {
    if (!pathname) return
    const metaFromMap = (keywordMap as Record<string, { title: string; description: string }>)[pathname]
    setMeta(metaFromMap || defaultMeta)
    setCanonical(`https://www.converthaven.com${pathname}`)
  }, [pathname])

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />
    </Head>
  )
}
