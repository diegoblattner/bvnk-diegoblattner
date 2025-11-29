import { useEffect, useState } from "react";
import type { ApiResult, PayInQuote } from "@/types";
import { registerUpdateQuote } from "./register-update-quote";

export function useUpdateQuote(uuid: string, currency: string) {
	const [{ data }, setNewQuote] = useState<ApiResult<PayInQuote>>({});
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		registerUpdateQuote({
			uuid,
			currency,
			abort: controller,
			onFetchStarted: () => setIsFetching(true),
			onQuoteFetched: (result) => {
				// quote expired
				if (result.error?.code === "MER-PAY-2017") {
					globalThis.location.href = `/payin/${uuid}/expired`;
					return;
				}
				if (!controller.signal.aborted) {
					setNewQuote(result);
					setIsFetching(false);
				}
			},
		});
		return () => {
			controller.abort();
		};
	}, [uuid, currency]);

	return { isFetching, data };
}
