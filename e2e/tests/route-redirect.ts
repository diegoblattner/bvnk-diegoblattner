import { expect, test } from "@playwright/test";
import { SITE_URL } from "../constants";

test("navigates to expired quote", async ({ page }) => {
	await page.goto(`${SITE_URL}/payin/create`); // creates a new quote
	await page.waitForURL(`${SITE_URL}/payin/**`);
	await expect(
		page.getByRole("heading", { name: "Business Account" }),
	).toBeVisible();

	const uuid = page.url().split("/").at(-1) ?? "";

	// tries to navigate to /confirm and /expired, but should redirect to pain/uuid
	await page.goto(`${SITE_URL}/payin/${uuid}/confirm`);
	await page.waitForURL(`${SITE_URL}/payin/${uuid}`);
	await expect(
		page.getByRole("heading", { name: "Business Account" }),
	).toBeVisible();

	await page.goto(`${SITE_URL}/payin/${uuid}/expired`);
	await page.waitForURL(`${SITE_URL}/payin/${uuid}`);
	await expect(
		page.getByRole("heading", { name: "Business Account" }),
	).toBeVisible();

	// accpets the quote
	const currency = "ETH";
	const select = await page.getByLabel("Pay in");
	await select.selectOption({ value: currency });
	await page.getByRole("button", { name: "Accept" }).click();
	await page.waitForURL(`${SITE_URL}/payin/${uuid}/confirm`);
	await expect(
		page.getByRole("heading", { name: `Pay with ${currency}` }),
	).toBeVisible();

	// tries to navigate to payin/uuid and /expired, but should redirect to /confirm
	await page.goto(`${SITE_URL}/payin/${uuid}`);
	await page.waitForURL(`${SITE_URL}/payin/${uuid}/confirm`);
	await expect(
		page.getByRole("heading", { name: `Pay with ${currency}` }),
	).toBeVisible();

	await page.goto(`${SITE_URL}/payin/${uuid}/expired`);
	await page.waitForURL(`${SITE_URL}/payin/${uuid}/confirm`);
	await expect(
		page.getByRole("heading", { name: `Pay with ${currency}` }),
	).toBeVisible();
});
