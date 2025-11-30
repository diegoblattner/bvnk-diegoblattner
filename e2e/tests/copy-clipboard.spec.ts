import { expect, type Page, test } from "@playwright/test";
import { SITE_URL } from "../constants";

/**
 * Clipboard permissions are not fully implemented in headless browsers,
 * se here we mock the functions needed instead
 */
async function spyClipboard(page: Page) {
	const log: string[] = [];
	let originalWrite: (data: string) => Promise<void>;

	await page.exposeFunction("logWriteTextValue", (value: string) =>
		log.push(value),
	);

	await page.addInitScript(() => {
		originalWrite = globalThis.navigator.clipboard.writeText;
		globalThis.navigator.clipboard.writeText = (text) => {
			// @ts-expect-error Injected function
			logWriteTextValue(text);
			return Promise.resolve();
		};
	});

	async function resetMock() {
		await page.evaluate(() => {
			globalThis.navigator.clipboard.writeText = originalWrite;
		});
	}

	return [log, resetMock] as const;
}

test("items copied to clipboard", async ({ page }) => {
	const [logs, resetMock] = await spyClipboard(page);

	await page.goto(`${SITE_URL}/payin/create`);
	const select = await page.getByLabel("Pay with");
	const currency = "LTC";
	await select.selectOption({ value: currency });
	const cta = await page.getByRole("button", { name: "Confirm" });
	await cta.click();

	// navigates to /confirm page
	await page.waitForURL("**/confirm");

	const copyValue = await page.getByRole("button", { name: /Copy/ }).first();
	const copyAddress = await page.getByRole("button", { name: /Copy/ }).last();

	await copyValue.click();
	await expect(page.getByText("Copied!")).toBeVisible();
	const amountCopied = logs[0];
	await expect(page.getByText(`${amountCopied} ${currency}`)).toBeVisible();
	await expect(page.getByText("Copied!")).not.toBeVisible();

	await copyAddress.click();
	await expect(page.getByText("Copied!")).toBeVisible();
	const addressCopied = logs[1];
	await expect(page.getByText(addressCopied, { exact: true })).toBeVisible();

	resetMock();
});
