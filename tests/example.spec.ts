import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Mahjong/)
})

test('shows menu', async ({ page }) => {
  await page.goto('/')

  page.getByTestId('menu-button').click()

  await expect(page.getByTestId('menu-list')).toBeInViewport()
})

test('pauses the game and hides board', async ({ page }) => {
  await page.goto('/')

  const board = page.getByTestId('board')

  await expect(board).toBeInViewport()

  page.getByTestId('timer-controls').click()

  await expect(board).not.toBeInViewport()
})
