import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['nl', 'en'],
  defaultLocale: 'nl',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/camping': {nl: '/kamperen', en: '/camping'},
    '/surroundings': {nl: '/omgeving', en: '/surroundings'},
    '/pitches': {nl: '/jaarplaatsen', en: '/pitches'},
    '/map': {nl: '/plattegrond', en: '/map'},
    '/indoor-pool': {nl: '/zwembad', en: '/indoor-pool'},
    '/pricelist': {nl: '/prijslijst-kamperen', en: '/pricelist'},
    '/faq': {nl: '/faq', en: '/faq'},
    '/contact': {nl: '/contact', en: '/contact'},
    '/appointment': {nl: '/afspraak', en: '/appointment'},
    '/terms': {nl: '/voorwaarden', en: '/terms'}
  }
});

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);
