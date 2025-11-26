import { useEffect } from "react";
import type { ErrorItem } from "@/types";

export function useHandleQuoteExpired(
	uuid: string,
	err: ErrorItem | undefined,
) {
	useEffect(() => {
		// quote expired
		if (err?.code === "MER-PAY-2017") {
			globalThis.location.href = `/payin/${uuid}/expired`;
		}
	}, [uuid, err]);
}
