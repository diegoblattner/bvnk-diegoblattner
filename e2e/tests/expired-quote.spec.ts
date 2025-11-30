import { expect, test } from "@playwright/test";
import { SITE_URL } from "../constants";

const uuid = "019ad0a9-690e-7d85-8c9f-9f22366add70"; // expired quote

test("navigates to expired quote", async ({ page }) => {
	async function expectExpired() {
		await page.waitForURL("**/expired");
		await expect(
			page.getByRole("heading", { name: "Payment details expired" }),
		).toBeVisible();
	}
	await page.goto(`${SITE_URL}/payin/${uuid}`);
	await expectExpired();

	await page.goto(`${SITE_URL}/payin/${uuid}/confirm`);
	await expectExpired();

	await page.goto(`${SITE_URL}/payin/${uuid}/expired`);
	await expectExpired();
});
