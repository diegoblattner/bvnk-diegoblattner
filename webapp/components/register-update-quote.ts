import { updatePayQuote } from "@/apis/pay";
import type { ApiResult, PayInQuote } from "@/types";

/**
 * sage gap to refresh the quote a bit before its expiry time,
 * allowing slower connections to succed more often in refreshing the quote automatically
 */
const timerSafeGap = 500;
export function getExpireTime(quote: PayInQuote | undefined) {
	return Math.max(
		(quote?.acceptanceExpiryDate ?? 0) - Date.now() - timerSafeGap,
		0,
	);
}

type RegisterUpdateQuoteArgs = {
	uuid: string;
	currency: string;
	onFetchStarted: () => void;
	onQuoteFetched: (newQuote: ApiResult<PayInQuote>) => void;
	abort: AbortController;
};

export function registerUpdateQuote({
	uuid,
	currency,
	abort,
	onFetchStarted,
	onQuoteFetched,
}: RegisterUpdateQuoteArgs) {
	if (!uuid || !currency || abort.signal.aborted) return;

	let timeout: ReturnType<typeof setTimeout>;
	abort.signal.addEventListener("abort", () => {
		if (timeout) {
			clearTimeout(timeout);
		}
	});

	onFetchStarted();
	updatePayQuote(uuid, currency, "crypto", abort.signal).then((result) => {
		onQuoteFetched(result);
		// registers a timeout to trigger an another update for when the quote expires
		const expireTime = getExpireTime(result.data);
		if (expireTime > 0) {
			timeout = setTimeout(() => {
				registerUpdateQuote({
					uuid,
					currency,
					abort,
					onFetchStarted,
					onQuoteFetched,
				});
			}, expireTime);
		}
	});
}
