import {siteConfig} from '@/content/site';

export function getCampgroundJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Campground',
    name: siteConfig.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Melkweg 2',
      postalCode: '7037 CN',
      addressLocality: 'Beek',
      addressCountry: 'NL'
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    url: siteConfig.url
  };
}
