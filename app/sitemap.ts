import {MetadataRoute} from 'next';
import {siteConfig} from '@/content/site';

const pages = ['','/kamperen','/omgeving','/jaarplaatsen','/plattegrond','/zwembad','/prijslijst-kamperen','/faq','/contact','/afspraak','/voorwaarden'];
const enPages = ['','/camping','/surroundings','/pitches','/map','/indoor-pool','/pricelist','/faq','/contact','/appointment','/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((p) => ({url: `${siteConfig.url}${p}`, lastModified: new Date(), alternates: {languages: {en: `${siteConfig.url}/en${enPages[pages.indexOf(p)]}`, nl: `${siteConfig.url}${p}`}}})),
    ...enPages.map((p) => ({url: `${siteConfig.url}/en${p}`, lastModified: new Date()}))
  ];
}
