import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type Locale = (typeof routing.locales)[number];

export default getRequestConfig(async ({ locale }) => {
  const isValidLocale = (l: string | undefined): l is Locale => {
    return !!l && (routing.locales as readonly string[]).includes(l);
  };

  if (!isValidLocale(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});