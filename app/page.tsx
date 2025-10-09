// app/page.tsx
'use client';

import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { productUrls } from '@/lib/config';

export default function Home() {
  const { t } = useLanguage();

  const products = [
    { name: 'saasInABox', price: 'price297', type: 'typeOneTime' },
    { name: 'aiAgentSuite', price: 'price197', type: 'typeOneTime' },
    { name: 'funnelPro', price: 'price147', type: 'typeOneTime' },
    { name: 'nexoraPro', price: 'price29mo', type: 'typeRecurring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <LanguageSwitcher />
      
      <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <header className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t(product.name as keyof typeof t)}
              </h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-indigo-600">
                  {t(product.price as keyof typeof t)}
                </span>
                <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {t(product.type as keyof typeof t)}
                </span>
              </div>
              <a
                href={productUrls[product.name as keyof typeof productUrls]}
                className="w-full block bg-indigo-600 text-white text-center py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition opacity-90"
              >
                {t('checkoutLink')}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}