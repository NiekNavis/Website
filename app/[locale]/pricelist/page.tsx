import {Section} from '@/components/section';
import {PricingTable} from '@/components/pricing-table';
import {siteConfig} from '@/content/site';

export const metadata = {title: 'Pricelist camping 2026'};

export default function Page() {
  return (
    <Section title="Prijslijst kamperen 2026">
      <PricingTable />
      <a href={siteConfig.pricing2026.termsPdf} className="mt-4 inline-block underline">algemene voorwaarden</a>
    </Section>
  );
}
