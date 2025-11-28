"use client";
import { formatTime } from "../../lib/format-time";
import { useTimer } from "./use-timer";

type TimerProps = Readonly<{
	/**
	 * used to reset the timer, even if the ms prop stays the same
	 */
	id: string;
	ms: number;
	onTimeEllapsed?: () => void;
}>;

export function Timer({ id, ms, onTimeEllapsed }: TimerProps) {
	const time = useTimer(id, ms, onTimeEllapsed);

	return (
		<div
			className="text-nowrap whitespace-nowrap tabular-nums"
			suppressHydrationWarning
		>
			{formatTime(time)}
		</div>
	);
}
