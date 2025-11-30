import { expect, test } from "@playwright/test";
import { SITE_URL } from "../constants";

test("not found routes", async ({ page }) => {
	await page.goto(SITE_URL);
	await expect(page.getByRole("heading", { name: /Not found/ })).toBeVisible();

	await page.goto(`${SITE_URL}/payin`);
	await expect(page.getByRole("heading", { name: /Not found/ })).toBeVisible();

	await page.goto(`${SITE_URL}/payin/1234`);
	await expect(page.getByRole("heading", { name: /Not found/ })).toBeVisible();

	await page.goto(`${SITE_URL}/payin/1234/confirm`);
	await expect(page.getByRole("heading", { name: /Not found/ })).toBeVisible();

	await page.goto(`${SITE_URL}/payin/1234/expired`);
	await expect(page.getByRole("heading", { name: /Not found/ })).toBeVisible();

	await page.goto(`${SITE_URL}/payin/1234/nonexistent`);
	await expect(page.getByRole("heading", { name: /Not found/ })).toBeVisible();
});
