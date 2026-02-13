import {Section} from '@/components/section';
import {siteConfig} from '@/content/site';

export const metadata = {title: 'Terms & Conditions'};

export default function Page() {
  return (
    <Section title="Terms & Conditions">
      <p>{siteConfig.legal.companyName}</p>
      <p>{siteConfig.legal.kvk}</p>
      <a className="underline" href={siteConfig.pricing2026.termsPdf}>Bekijk algemene voorwaarden PDF</a>
    </Section>
  );
}
