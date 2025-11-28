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

type ScheduleUpdateQuoteargs = {
	quote: PayInQuote | undefined;
	uuid: string;
	currency: string;
	onFetchStarted: () => void;
	onQuoteFetched: (newQuote: ApiResult<PayInQuote>) => void;
	abort: AbortController;
};

export function scheduleUpdateQuote({
	quote,
	uuid,
	currency,
	onFetchStarted,
	onQuoteFetched,
	abort,
}: ScheduleUpdateQuoteargs) {
	if (!uuid || !currency) return;

	const expireTime = getExpireTime(quote);
	const timeout = setTimeout(() => {
		onFetchStarted();
		updatePayQuote(uuid, currency, "crypto", abort.signal).then(onQuoteFetched);
	}, expireTime);
	abort.signal.addEventListener("abort", () => clearTimeout(timeout));
	return () => clearTimeout(timeout);
}
