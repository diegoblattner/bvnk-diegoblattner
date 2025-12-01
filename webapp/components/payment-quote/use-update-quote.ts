import { startTransition, useActionState, useEffect } from "react";
import type { ApiResult, PayInQuote } from "@/types";
import { updateQuoteAction } from "./actions";

/**
 * sage gap to refresh the quote a bit before its expiry time,
 * allowing slower connections to succed more often in refreshing the quote automatically
 */
const timerSafeGap = 500;

export function getExpiryTime(quote: PayInQuote | undefined, gap = 0) {
	return Math.max((quote?.acceptanceExpiryDate ?? 0) - Date.now() - gap, 0);
}

function callUpdateAction(
	action: (payload: FormData) => void,
	uuid: string,
	currency: string,
) {
	const formData = new FormData();

	formData.append("uuid", uuid);
	formData.append("currency", currency);
	startTransition(() => {
		action(formData);
	});
}

export function useUpdateQuote(uuid: string, currency: string) {
	const [state, action, isPending] = useActionState(updateQuoteAction, {});
	useEffect(() => {
		if (!uuid || !currency) return;

		callUpdateAction(action, uuid, currency);
	}, [action, uuid, currency]);

	return [state, action, isPending] as const;
}

export function useRefreshQuoteOnExpire(
	quote: ApiResult<PayInQuote>,
	uuid: string,
	currency: string,
	updateAction: (payload: FormData) => void,
) {
	useEffect(() => {
		if (uuid && currency && quote.data?.paidCurrency.currency === currency) {
			// registers a timeout to trigger an another update for when the quote expires
			const expiryTime = getExpiryTime(quote.data, timerSafeGap);

			if (expiryTime > 0) {
				const timeout = setTimeout(() => {
					callUpdateAction(updateAction, uuid, currency);
				}, expiryTime);

				return () => clearTimeout(timeout);
			}
		}
	}, [updateAction, uuid, currency, quote.data]);
}
