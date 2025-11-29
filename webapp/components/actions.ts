"use server";
import { redirect } from "next/navigation";
import { acceptPayQuote, updatePayQuote } from "@/apis/pay";
import type { ApiResult, PayInQuote } from "@/types";

export async function updateQuoteAction(
	_: ApiResult<PayInQuote>,
	formData: FormData,
) {
	const uuid = formData.get("uuid") as string;
	const currency = formData.get("currency") as string;

	if (!uuid || !currency) return {};

	const result = await updatePayQuote(uuid, currency, "crypto");
	// quote expired
	if (result.error?.code === "MER-PAY-2017") {
		return redirect(`/payin/${uuid}/expired`);
	}

	return result;
}

export async function acceptQuoteAction(
	_: ApiResult<PayInQuote>,
	formData: FormData,
) {
	const uuid = formData.get("uuid") as string;

	const result = await acceptPayQuote(uuid);
	if (result) {
		redirect(`/payin/${uuid}/confirm`);
	}

	return result;
}
