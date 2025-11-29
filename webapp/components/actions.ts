"use server";
import { redirect } from "next/navigation";
import { acceptPayQuote, updatePayQuote } from "@/apis/pay";
import type { ApiResult, PayInQuote } from "@/types";

function getInvalidParams(): ApiResult<PayInQuote> {
	return {
		error: { requestId: "invalid params", message: "invalid params" },
	};
}

export async function updateQuoteAction(
	_: ApiResult<PayInQuote>,
	formData: FormData,
) {
	const uuid = formData.get("uuid") as string;
	const currency = formData.get("currency") as string;

	if (!uuid || !currency) return getInvalidParams();

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
	if (!uuid) return getInvalidParams();

	const result = await acceptPayQuote(uuid);
	if (!result.error) {
		redirect(`/payin/${uuid}/confirm`);
	}

	return result;
}
