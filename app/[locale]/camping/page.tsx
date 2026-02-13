import {Section} from '@/components/section';
import {Card} from '@/components/ui/card';
import {siteConfig} from '@/content/site';

export const metadata = {title: 'Camping'};

export default function Page() {
  return (
    <Section title="Camping">
      <div className="grid gap-4 md:grid-cols-2">
        {siteConfig.campingFacts.map((item) => <Card key={item}>{item}</Card>)}
      </div>
    </Section>
  );
}
