import { useCallback, useState } from "react";
import { acceptPayQuote } from "@/apis/pay";

export function useAcceptQuote(uuid: string) {
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	const accept = useCallback(() => {
		setIsFetching(true);
		acceptPayQuote(uuid)
			.then((res) => {
				if (res.data) {
					globalThis.location.href = `/payin/${uuid}/confirm`;
				} else {
					// handle error...
					setError("Failed to accept quote");
				}
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, [uuid]);

	return {
		isFetching,
		accept,
		error,
	};
}
