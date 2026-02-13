import {test, expect} from '@playwright/test';

const pages = ['/', '/kamperen', '/omgeving', '/jaarplaatsen', '/plattegrond', '/zwembad', '/prijslijst-kamperen', '/faq', '/contact', '/afspraak', '/en', '/en/camping', '/en/surroundings', '/en/pitches', '/en/map', '/en/indoor-pool', '/en/pricelist', '/en/faq', '/en/contact', '/en/appointment'];

test('all main routes load', async ({page}) => {
  for (const route of pages) {
    const response = await page.goto(route);
    expect(response?.ok(), route).toBeTruthy();
  }
});

test('header navigation visible', async ({page}) => {
  await page.goto('/');
  await expect(page.getByRole('link', {name: /contact/i}).first()).toBeVisible();
  await page.goto('/en');
  await expect(page.getByRole('link', {name: /book|contact/i}).first()).toBeVisible();
});
