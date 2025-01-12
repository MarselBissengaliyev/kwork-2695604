import { getRequestConfig } from 'next-intl/server'

import { COUNTRY_LOCALE_MAP, LOCALES } from '@/enums'

export const getLocaleFromCountryCode = (country) => {
  const defaultLocale = LOCALES.EN

  if (!country) return defaultLocale

  const locale = COUNTRY_LOCALE_MAP[country.toUpperCase()] || defaultLocale

  return locale
}

export default getRequestConfig(async ({ locale: country }) => {
  try {
    const locale = getLocaleFromCountryCode(country)

    return {
      messages: (await import(`./../locales/${locale}.json`)).default,
    }
  } catch (e) {
    const locale = LOCALES.EN
    return {
      messages: (await import(`./../locales/${locale}.json`)).default,
    }
  }
})
