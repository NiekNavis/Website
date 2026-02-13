import {Accordion} from './ui/accordion';

export function FAQAccordion() {
  return (
    <Accordion
      items={[
        {q: 'Zijn jullie het hele jaar open?', a: 'Ja, de camping is het hele jaar geopend.'},
        {q: 'Is er water op de plaats in de winter?', a: 'In de winter is er geen water op het veld. Water is beschikbaar in het sanitairgebouw.'},
        {q: 'Valt een XL-plaats onder ACSI?', a: 'Nee, XL-plaatsen vallen niet onder het ACSI-tarief. Neem contact op voor beschikbaarheid.'},
        {q: 'Zijn honden toegestaan?', a: 'Ja, honden zijn aangelijnd welkom voor €1,50 per dag.'},
        {q: 'Is het zwembad gratis?', a: 'Voor bewoners en gasten wel. Buitenbezoekers betalen €4,50 per bezoek of €37,50 voor 10 keer.'},
        {q: 'Hoe boek ik?', a: 'Neem contact op via telefoon of e-mail voor actuele beschikbaarheid en voorwaarden.'}
      ]}
    />
  );
}
