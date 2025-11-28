import { useEffect, useState } from "react";

export function useTimer(id: string, ms: number, onTimeEllapsed?: () => void) {
	const [time, setTime] = useState(ms);

	// biome-ignore lint/correctness/useExhaustiveDependencies: "id" is used to force the timer to reset
	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setTime(Math.max(ms, 0)); // resets the timer

		const interval = setInterval(() => {
			setTime((prev) => {
				const timeLeft = Math.max(prev - 1000, 0);
				if (timeLeft === 0) {
					onTimeEllapsed?.();
					clearInterval(interval);
				}
				return timeLeft;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [id, ms]);

	return time;
}
