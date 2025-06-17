import { test, expect } from '@playwright/test';

test('Validate SpiceJet searchFlights API response', async ({ page }) => {
  // Intercept the searchFlights API response
  const [response] = await Promise.all([
    page.waitForResponse(resp => 
      resp.url().includes('searchFlights') && resp.status() === 200
    ),
    
    // Open the website
    page.goto('https://www.spicejet.com'),

    // Simulate user interaction that triggers the API
    (async () => {
      // Wait for page to be interactive
      await page.waitForLoadState('networkidle');

      // Select 'One Way'
      await page.locator('text=one way').click();

      // Select From & To (Use airport codes if needed)
      await page.locator('input[placeholder="From"]').fill('DEL');
      await page.keyboard.press('Enter');

      await page.locator('input[placeholder="To"]').fill('BOM');
      await page.keyboard.press('Enter');

      // Pick a future date
      await page.locator('div[data-testid="departure-date-dropdown-label"]').click();
      await page.locator('div[data-testid="undefined-calendar-day-15"]').click();

      // Click Search
      await page.locator('div[data-testid="home-page-flight-cta"]').click();
    })()
  ]);

  // Validate response body
  const body = await response.json();
  console.log('API Response:', body);

  expect(response.status()).toBe(200);
  expect(body.data).toBeDefined();
  expect(body.data.length).toBeGreaterThan(0); // Make sure flights are returned
});