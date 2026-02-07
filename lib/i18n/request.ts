import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;

  let locale: Locale;

  if (
    requestedLocale &&
    routing.locales.includes(requestedLocale as Locale)
  ) {
    locale = requestedLocale as Locale;
  } else {
    locale = routing.defaultLocale;
  }

  console.log("requestLocale =", requestedLocale);

  return {
    locale,
    messages: (await import(`@/locales/${locale}.json`)).default
  };
});
