import Image from 'next/image';
import {Section} from '@/components/section';
import {siteConfig} from '@/content/site';

export const metadata = {title: 'Map'};

export default function Page() {
  return (
    <Section title="Plattegrond">
      <p className="mb-4 text-sm text-slate-600">TODO: vervang /map-placeholder.svg met de echte camping plattegrond.</p>
      <Image src="/map-placeholder.svg" alt="Camping map placeholder" width={1600} height={1000} className="rounded-2xl border" />
      <a className="mt-4 inline-block underline" href={siteConfig.contact.mapsUrl} target="_blank">Get directions</a>
    </Section>
  );
}
