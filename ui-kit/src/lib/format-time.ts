function pad(n: number) {
	return n.toString().padStart(2, "0");
}

export function formatTime(ms: number): string {
	const totalSeconds = Math.floor(ms / 1000);

	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
