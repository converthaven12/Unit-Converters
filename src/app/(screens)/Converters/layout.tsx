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


// Dynamically loaded components (client-heavy or large)
const Sidebar = dynamic(() => import('../../utils/components/SideBar/Sidebar'), { ssr: false });
const GetConversionAccordingToPathname = dynamic(() => import('@/app/utils/components/GetConversionAccordingToPathname/GetConversionAccordingToPathname'), { ssr: false });
const DefinationsForUnit = dynamic(() => import('@/app/utils/components/DefinationsForUnit/DefinationsForUnit'), { ssr: false });
const Dropdown = dynamic(() => import('@/app/utils/components/Dropdown/Dropdown'), { ssr: false });
const RelatedConverters = dynamic(() => import('../../components/RelatedConverters'), { ssr: false });

import React, { useEffect, useState } from 'react';

import { SidebarProvider, useSidebar } from '../../utils/context/SidebarContext';

import { usePathname, useRouter } from 'next/navigation';
import units from '../../../../Helper/CheckUnits';

import { Menu } from 'lucide-react';

import { DropDownOptions } from '../../../../Helper/Menus';
import Footer from '@/app/utils/components/Footer/Footer';

// SEO & Layout imports
import SeoHead from '../../components/SeoHead';
import PageHeader from '../../components/PageHeader';


import faqMapRaw from '@/data/faqMap.json';

const faqMap = faqMapRaw as FAQMap;

import keywordMap from '@/data/keywordMap.json';
import Script from 'next/script';

function InnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const { isOpened, setIsOpened } = useSidebar();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Determine converter title and FAQ
  const meta = (keywordMap as Record<string, { title: string }>)[pathname] || { title: 'Converter' };
  const titleBase = meta.title.split(' Converter')[0];

  // Dropdown and sidebar logic
  const sidebarWidth = isOpened
    ? 'md:ml-[20dvw] xl:ml-[18dvw]'
    : 'ml-0 md:ml-[74px]';

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
      {/* SEO meta tags */}
      <SeoHead />

      <div className="flex min-h-screen relative">
        {/* Sidebar toggle */}
        {!isOpened && (
          <button
            className="fixed top-4 right-4 z-40 md:hidden bg-white p-2 rounded-md shadow-md"
            onClick={() => setIsOpened(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Sidebar */}
        <div className="fixed top-0 h-full z-40">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className={`bg-[#F5F5F9] w-full flex-1 flex flex-col justify-between transition-all duration-300 ${sidebarWidth}`}>
          {/* Page Header H1 */}
          <div className="p-2 md:px-5 font-alata">
            <PageHeader title={titleBase} />

            {/* Search Dropdown */}
            <div className="mb-4">
              <Dropdown
                options={DropDownOptions}
                activeId={selectedOption}
                name="selectedOption"
                handleDropdownChange={(name, value) => setSelectedOption(value as string)}
                placeHolder="Search converters"
                clearable
              />
            </div>

            {/* Page Children & Conversion Logic */}
            {children}
            {shouldShowConversion && <GetConversionAccordingToPathname />}
            {!isLinkedConversions && <DefinationsForUnit />}
          </div>

          {/* Related Converters Section */}
          <aside className="p-2 md:px-5 mt-8">
            <h2 className="text-xl font-semibold">Related Converters</h2>
            <RelatedConverters />
          </aside>

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* JSON-LD FAQ Data */}
      
{console.log('🔍 Current pathname:', pathname)}
{console.log('📦 FAQ Data for this path:', faqMap[pathname])}

      <Script id="faq-jsonld" type="application/ld+json" >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqMap[pathname] || [],
        })}
      </Script>
    </>
  );
}

export default function ConvertersLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <InnerLayout>{children}</InnerLayout>
    </SidebarProvider>
  );
}
