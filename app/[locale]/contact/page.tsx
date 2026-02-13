import {Section} from '@/components/section';
import {ContactForm} from '@/components/contact-form';
import {siteConfig} from '@/content/site';

export const metadata = {title: 'Contact'};

export default function Page() {
  return (
    <Section title="Contact">
      <div className="mb-4 text-sm text-slate-700">
        <p>{siteConfig.contact.address}</p><p>{siteConfig.contact.phone}</p><p>{siteConfig.contact.email}</p>
      </div>
      <ContactForm />
    </Section>
  );
}
