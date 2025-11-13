import { test, expect } from '@playwright/test';

test('home shows Hello World', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /hello world/i })).toBeVisible();
});
