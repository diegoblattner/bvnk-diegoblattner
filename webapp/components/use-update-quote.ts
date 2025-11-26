import { useEffect, useState } from "react";
import { updatePayQuote } from "@/apis/pay";
import type { ApiResult, PayInQuote } from "@/types";
import { useHandleQuoteExpired } from "./use-handle-quote-expired";
import { useRefreshQuote } from "./use-refresh-quote";

export function useUpdateQuote(uuid: string, currency: string) {
	const [{ data, error }, setNewQuote] = useState<ApiResult<PayInQuote>>({});
	const [isFetching, setIsFetching] = useState(false);
	const refresh = useRefreshQuote(data);
	useHandleQuoteExpired(uuid, error);

	// biome-ignore lint/correctness/useExhaustiveDependencies: "refresh" forces the update quote to retrigger
	useEffect(() => {
		let safeSet = (fn: () => void) => fn();

		if (currency) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setIsFetching(true);
			updatePayQuote(uuid, currency)
				.then((result) => safeSet(() => setNewQuote(result)))
				.finally(() => safeSet(() => setIsFetching(false)));
		} else {
			setNewQuote({});
			setIsFetching(false);
		}

		return () => {
			safeSet = () => {};
		};
	}, [uuid, currency, refresh]);

	return { isFetching, data };
}
