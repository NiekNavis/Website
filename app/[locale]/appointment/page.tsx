import {Section} from '@/components/section';
import {ContactForm} from '@/components/contact-form';

export const metadata = {title: 'Appointment'};

export default function Page() {
  return <Section title="Kennismaking (15 min gratis)"><p className="mb-4 text-slate-700">Plan een vrijblijvende kennismaking. Laat je gegevens achter, dan nemen we contact op.</p><ContactForm /></Section>;
}
