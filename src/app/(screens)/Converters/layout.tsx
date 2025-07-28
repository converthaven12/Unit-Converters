// File: src/app/(screens)/Converters/layout.tsx

type FAQEntry = {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
};

type FAQMap = Record<string, FAQEntry[]>;

'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import Script from 'next/script';

import { SidebarProvider, useSidebar } from '../../utils/context/SidebarContext';
import Footer from '@/app/utils/components/Footer/Footer';
import SeoHead from '../../components/SeoHead';
import PageHeader from '../../components/PageHeader';

import faqMapRaw from '@/data/faqMap.json';
import keywordMap from '@/data/keywordMap.json';

// ↓ corrected imports ↓
// Go up three levels from this file into 'src', then into 'helper'
import units from '../../../helper/CheckUnits';
import { DropDownOptions } from '../../../helper/Menus';

const faqMap = faqMapRaw as FAQMap;

// Dynamically loaded components
const Sidebar = dynamic(
  () => import('../../utils/components/SideBar/Sidebar'),
  { ssr: false }
);
const GetConversionAccordingToPathname = dynamic(
  () =>
    import(
      '@/app/utils/components/GetConversionAccordingToPathname/GetConversionAccordingToPathname'
    ),
  { ssr: false }
);
const DefinationsForUnit = dynamic(
  () =>
    import(
      '@/app/utils/components/DefinationsForUnit/DefinationsForUnit'
    ),
  { ssr: false }
);
const Dropdown = dynamic(
  () => import('@/app/utils/components/Dropdown/Dropdown'),
  { ssr: false }
);
const RelatedConverters = dynamic(
  () => import('../../components/RelatedConverters'),
  { ssr: false }
);

function InnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const { isOpened, setIsOpened } = useSidebar();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // SEO title logic
  const meta =
    (keywordMap as Record<string, { title: string }>)[pathname] || {
      title: 'Converter',
    };
  const titleBase = meta.title.split(' Converter')[0];

  // Sidebar toggle handling
  const sidebarWidth = isOpened
    ? 'md:ml-[20dvw] xl:ml-[18dvw]'
    : 'ml-0 md:ml-[74px]';

  // Determine if this path should show the conversion component
  const pathSegments = pathname.split('/') || [];
  const isLinkedConversions = pathSegments[2] !== 'linkedConversions';
  const baseUnit = pathSegments[3]?.split('To')[0] || '';
  const shouldShowConversion = isLinkedConversions && units.includes(baseUnit);

  useEffect(() => {
    if (selectedOption && selectedOption.trim() !== '') {
      router.push(selectedOption);
    }
  }, [selectedOption, router]);

  return (
    <>
      <SeoHead />

      <div className="flex min-h-screen relative">
        {!isOpened && (
          <button
            className="fixed top-4 right-4 z-40 md:hidden bg-white p-2 rounded-md shadow-md"
            onClick={() => setIsOpened(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        <div className="fixed top-0 h-full z-40">
          <Sidebar />
        </div>

        <div
          className={`bg-[#F5F5F9] w-full flex-1 flex flex-col justify-between transition-all duration-300 ${sidebarWidth}`}
        >
          <div className="p-2 md:px-5 font-alata">
            <PageHeader title={titleBase} />

            <div className="mb-4">
              <Dropdown
                options={DropDownOptions}
                activeId={selectedOption}
                name="selectedOption"
                handleDropdownChange={(_, value) =>
                  setSelectedOption(value as string)
                }
                placeHolder="Search converters"
                clearable
              />
            </div>

            {children}
            {shouldShowConversion && <GetConversionAccordingToPathname />}
            {!isLinkedConversions && <DefinationsForUnit />}
          </div>

          <aside className="p-2 md:px-5 mt-8">
            <h2 className="text-xl font-semibold">Related Converters</h2>
            <RelatedConverters />
          </aside>

          <Footer />
        </div>
      </div>

      {/* JSON-LD FAQ */}
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqMap[pathname] || [],
        })}
      </Script>
    </>
  );
}

export default function ConvertersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarProvider><InnerLayout>{children}</InnerLayout></SidebarProvider>;
}
