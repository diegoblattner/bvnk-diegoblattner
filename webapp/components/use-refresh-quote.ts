import { useEffect, useState } from "react";
import type { PayInQuote } from "@/types";

/**
 * sage gap to refresh the quote a bit before its expiry time,
 * allowing slower connections to succed more often in refreshing the quote automatically
 */
const timerSafeGap = 1000;
export function getExpireTime(quote: PayInQuote | undefined) {
	return Math.max(
		(quote?.acceptanceExpiryDate ?? 0) - Date.now() - timerSafeGap,
		0,
	);
}

export function useRefreshQuote(quote: PayInQuote | undefined) {
	const [expired, setExpired] = useState(0);

	useEffect(() => {
		if (quote) {
			const expireTime = getExpireTime(quote);
			if (expireTime <= 0) return;
			const timeout = setTimeout(() => {
				setExpired(Date.now()); // any value, just to trigger an update
			}, expireTime);
			return () => clearTimeout(timeout);
		}
	}, [quote]);

	return expired;
}
