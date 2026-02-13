import {Section} from '@/components/section';
import {Card} from '@/components/ui/card';
import {siteConfig} from '@/content/site';

export const metadata = {title: 'Indoor pool'};

export default function Page() {
  return (
    <Section title="Indoor pool">
      <div className="grid gap-4 md:grid-cols-2">{siteConfig.pool.details.map((d) => <Card key={d}>{d}</Card>)}</div>
      <div className="mt-6 space-y-1 text-sm text-slate-700">{siteConfig.pool.hoursNl.map((h) => <p key={h}>{h}</p>)}</div>
      <div className="mt-4 text-sm text-slate-700">{siteConfig.pool.hoursEnExtra.map((h) => <p key={h}>{h}</p>)}</div>
      <a className="mt-4 inline-block underline" href={siteConfig.pool.lessonsUrl} target="_blank">zwemschoolnlg.nl</a>
    </Section>
  );
}
