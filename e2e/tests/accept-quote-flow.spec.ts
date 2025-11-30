import { expect, test } from "@playwright/test";
import { SITE_URL } from "../constants";

test("create a quote and accept it", async ({ page }) => {
	await page.goto(`${SITE_URL}/payin/create`);

	await expect(
		page.getByRole("heading", { name: "Business Account" }),
	).toBeVisible();
	await expect(page.getByRole("heading", { name: /200 ZAR/ })).toBeVisible();
	await expect(page.getByText(/test_reference_in_/)).toBeVisible();

	const select = await page.getByLabel("Pay with");
	expect(select).toBeVisible();
	const options = await select.getByRole("option");
	expect((await options.all()).length).toEqual(4);
	expect(
		await page.getByRole("button", { name: "Confirm" }),
	).not.toBeAttached(); // button only visible when currency is selected

	const currency = "BTC";
	await select.selectOption({ value: currency });

	const cta = await page.getByRole("button", { name: "Confirm" });
	await cta.click();

	// navigates to /confirm page
	await page.waitForURL("**/confirm");
	await expect(
		page.getByRole("heading", { name: `Pay with ${currency}` }),
	).toBeVisible();

	await expect(
		(await page.getByRole("button", { name: /Copy/ }).all()).length,
	).toEqual(2);

	await expect(page.getByRole("img", { name: /QR code for:/ })).toBeVisible(); // qr code is visible
});
