import { useEffect, useState } from "react";
import type { ApiResult, PayInQuote } from "@/types";
import { scheduleUpdateQuote } from "./use-refresh-quote";

export function useUpdateQuote(uuid: string, currency: string) {
	const [{ data }, setNewQuote] = useState<ApiResult<PayInQuote>>({});
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		scheduleUpdateQuote({
			quote: data,
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
	}, [data, uuid, currency]);

	return { isFetching, data };
}
