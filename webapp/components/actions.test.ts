import { redirect } from "next/navigation";
import { acceptPayQuote, updatePayQuote } from "@/apis/pay";
import { pendingQuote } from "@/mocks/pay-quote";
import { acceptQuoteAction, updateQuoteAction } from "./actions";

jest.mock("next/navigation");
jest.mock("@/apis/pay");

const uuid = "1234";
const currency = "BRL";
const updateFormData = new FormData();
updateFormData.append("uuid", uuid);
updateFormData.append("currency", currency);
const acceptFormData = new FormData();
acceptFormData.append("uuid", uuid);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const asMock = <T extends (...args: any[]) => any>(fn: T) =>
	fn as unknown as jest.Mock;

test("updateQuoteAction - success", async () => {
	asMock(updatePayQuote).mockResolvedValue({ data: pendingQuote });

	const result = await updateQuoteAction({}, updateFormData);
	expect(updatePayQuote).toHaveBeenCalledWith(uuid, currency, "crypto");
	expect(redirect).not.toHaveBeenCalled();

	expect(result.data).toEqual(pendingQuote);
});

test("updateQuoteAction - invalid params", async () => {
	asMock(updatePayQuote).mockResolvedValue({ data: pendingQuote });

	const result = await updateQuoteAction({}, new FormData());
	expect(updatePayQuote).not.toHaveBeenCalled();
	expect(redirect).not.toHaveBeenCalled();

	expect(result.error?.message).toEqual("invalid params");
});

test("updateQuoteAction - expired", async () => {
	const expiredError = { error: { code: "MER-PAY-2017" } };
	asMock(updatePayQuote).mockResolvedValue(expiredError);

	await updateQuoteAction({}, updateFormData);
	expect(redirect).toHaveBeenCalledWith(`/payin/${uuid}/expired`);
});

test("acceptQuoteAction - success", async () => {
	asMock(acceptPayQuote).mockResolvedValue({ data: true });

	await acceptQuoteAction({}, acceptFormData);

	expect(redirect).toHaveBeenCalledWith(`/payin/${uuid}/confirm`);
});

test("acceptQuoteAction - invalid params", async () => {
	asMock(acceptPayQuote).mockResolvedValue({ data: true });

	const result = await acceptQuoteAction({}, new FormData());
	expect(acceptPayQuote).not.toHaveBeenCalled();
	expect(redirect).not.toHaveBeenCalled();

	expect(result.error?.message).toEqual("invalid params");
});

test("acceptQuoteAction - error", async () => {
	const errObj = { error: {} };
	asMock(acceptPayQuote).mockResolvedValue(errObj);

	const result = await acceptQuoteAction({}, acceptFormData);
	expect(redirect).not.toHaveBeenCalled();
	expect(result).toEqual(errObj);
});
