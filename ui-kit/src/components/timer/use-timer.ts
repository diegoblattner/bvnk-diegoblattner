import { useEffect, useState } from "react";

type RegisterTimerArgs = {
	ms: number;
	onTick: (newTime: number) => void;
	onTimeEllapsed?: () => void;
};
function registerTimer({ ms, onTick, onTimeEllapsed }: RegisterTimerArgs) {
	let time = Math.max(ms, 0);

	const interval = setInterval(() => {
		time = Math.max(time - 1000, 0);

		onTick(time);
		if (time <= 0) {
			clearInterval(interval);
			onTimeEllapsed?.();
		}
	}, 1000);

	return () => clearInterval(interval);
}

export function useTimer(id: string, ms: number, onTimeEllapsed?: () => void) {
	const [time, setTime] = useState(Math.max(ms, 0));

	// biome-ignore lint/correctness/useExhaustiveDependencies: "id" is used to force the timer to reset
	useEffect(() => {
		const clearTimer = registerTimer({
			ms,
			onTick: setTime,
			onTimeEllapsed,
		});
		return () => {
			clearTimer();
		};
	}, [id, ms, onTimeEllapsed]);

	return time;
}
