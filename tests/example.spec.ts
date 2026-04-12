import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await expect(page).toHaveTitle(/Mahjong/)
})

test('shows menu', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  page.getByTestId('menu-button').click()

  await expect(page.getByTestId('menu-list')).toBeInViewport()
})
