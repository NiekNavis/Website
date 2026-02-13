'use client';

import {useLocale} from 'next-intl';
import {usePathname, Link} from '@/lib/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = locale === 'nl' ? 'en' : 'nl';

  return (
    <Link
      href={pathname}
      locale={nextLocale}
      className="rounded-lg border border-slate-300 px-3 py-1 text-sm font-medium"
      aria-label="Switch language"
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}
