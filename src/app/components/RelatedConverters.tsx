'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RelatedConverters() {
  const path = usePathname() || '/';
  const [relatedLinks, setRelatedLinks] = useState<string[]>([]);
  const [titles, setTitles] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadData = async () => {
      const relatedMap = (await import('@/data/relatedMap.json')).default as Record<string, string[]>;
      const keywordMap = (await import('@/data/keywordMap.json')).default as Record<string, { title: string }>;

      const links = relatedMap[path] || [];
      const mappedTitles = Object.fromEntries(
        links.map((href) => [href, keywordMap[href]?.title || 'Related Converter'])
      );

      setRelatedLinks(links);
      setTitles(mappedTitles);
    };

    loadData();
  }, [path]);

  if (relatedLinks.length === 0) {
    return <p className="text-sm text-gray-500">No related converters available.</p>;
  }

  return (
    <ul className="space-y-2 px-4 py-2 bg-white shadow-sm rounded-lg">
      {relatedLinks.map((href) => (
        <li key={href}>
          <Link href={href} className="text-blue-600 hover:underline">
            {titles[href]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
