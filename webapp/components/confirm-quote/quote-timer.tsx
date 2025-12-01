"use client";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { Timer } from "ui-kit";
import { getCountdown } from "@/lib";
import type { PayInQuote } from "@/types";

type QuoteTimerProps = Readonly<Pick<PayInQuote, "uuid" | "expiryDate">>;

export default function QuoteTimer({ uuid, expiryDate }: QuoteTimerProps) {
	const countdown = useMemo(() => getCountdown(expiryDate), [expiryDate]);
	const { push } = useRouter();

	const redirectToExpired = useCallback(() => {
		push(`/payin/${uuid}/expired`);
	}, [uuid, push]);

	return (
		<Timer
			id={uuid}
			ms={getCountdown(expiryDate)}
			// redirects to the expired page when the timer countdown finishes
			onTimeEllapsed={countdown > 0 ? redirectToExpired : undefined}
		/>
	);
}
