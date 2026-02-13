import './globals.css';
import type {Metadata} from 'next';
import {siteConfig} from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {default: siteConfig.name, template: `%s | ${siteConfig.name}`},
  description: 'Rustige camping in Beek met toerplaatsen, jaarplaatsen en indoor zwembad.',
  openGraph: {
    title: siteConfig.name,
    description: 'Camping en vakantiepark in de Liemerse Achterhoek.',
    images: ['/og-placeholder.svg']
  },
  twitter: {card: 'summary_large_image', images: ['/og-placeholder.svg']}
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="nl"><body>{children}</body></html>;
}
