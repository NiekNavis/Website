import {Section} from '@/components/section';
import {Card} from '@/components/ui/card';
import {siteConfig} from '@/content/site';

export const metadata = {title: 'Year pitches'};

export default function Page() {
  return <Section title="Jaarplaatsen"><div className="grid gap-4 md:grid-cols-2">{siteConfig.yearPitchesFacts.map((fact) => <Card key={fact}>{fact}</Card>)}</div></Section>;
}
