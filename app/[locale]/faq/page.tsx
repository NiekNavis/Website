import {Section} from '@/components/section';
import {FAQAccordion} from '@/components/faq-accordion';

export const metadata = {title: 'FAQ'};

export default function Page() {
  return <Section title="Veelgestelde vragen"><FAQAccordion /></Section>;
}
