import {getTranslations} from 'next-intl/server';
import {Hero} from '@/components/hero';
import {Section} from '@/components/section';
import {Card} from '@/components/ui/card';
import {siteConfig} from '@/content/site';
import {getCampgroundJsonLd} from '@/lib/seo';

export default async function Home() {
  const t = await getTranslations();
  const jsonLd = getCampgroundJsonLd();
  return (
    <>
      <Hero title={t('home.title')} subtitle={t('home.subtitle')} />
      <Section title="Waarom De Byvanck">
        <div className="grid gap-4 md:grid-cols-3">
          {siteConfig.campingFacts.slice(0, 3).map((fact) => <Card key={fact}>{fact}</Card>)}
        </div>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
    </>
  );
}
