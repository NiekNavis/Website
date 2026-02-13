import {Phone} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/lib/routing';
import {siteConfig} from '@/content/site';
import {LanguageSwitcher} from './language-switcher';

export async function Header() {
  const t = await getTranslations();
  const nav = [
    ['/', t('nav.home')],
    ['/camping', t('nav.camping')],
    ['/surroundings', t('nav.surroundings')],
    ['/pitches', t('nav.pitches')],
    ['/map', t('nav.map')],
    ['/indoor-pool', t('nav.pool')],
    ['/pricelist', t('nav.pricelist')],
    ['/faq', t('nav.faq')],
    ['/contact', t('nav.contact')]
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-bold text-primary">{t('common.brand')}</Link>
        <nav className="hidden gap-4 text-sm md:flex">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-primary">{label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-white">{t('common.ctaReserve')}</Link>
          <a href={`tel:${siteConfig.contact.phone}`} className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold inline-flex items-center gap-1"><Phone className="h-4 w-4"/>{t('common.ctaCall')}</a>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
