import {getLocale, getTranslations} from 'next-intl/server';
import {Link} from '@/lib/routing';
import {siteConfig} from '@/content/site';

export async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations();
  const hours = locale === 'nl' ? siteConfig.contact.receptionHoursNl : siteConfig.contact.receptionHoursEn;

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h2 className="font-semibold">{t('common.brand')}</h2>
          <p className="text-sm text-slate-600">{siteConfig.contact.address}</p>
          <p className="text-sm text-slate-600">{siteConfig.contact.phone}</p>
          <p className="text-sm text-slate-600">{siteConfig.contact.email}</p>
        </div>
        <div>
          <h3 className="font-semibold">Openingstijden receptie</h3>
          {hours.map((line) => <p className="text-sm text-slate-600" key={line}>{line}</p>)}
        </div>
        <div className="space-y-2">
          <Link href="/contact" className="block text-sm">{t('nav.contact')}</Link>
          <Link href="/faq" className="block text-sm">{t('nav.faq')}</Link>
          <Link href="/terms" className="block text-sm">Terms & Conditions</Link>
          <p className="text-xs text-slate-500">{siteConfig.asOf}</p>
        </div>
      </div>
    </footer>
  );
}
