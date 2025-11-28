export function getCountdown(date: number) {
	return Math.max(date - Date.now(), 0);
}

export function getDisplayAmount({
	amount = 0,
	currency = "",
}: {
	amount: string | number;
	currency: string | null;
}) {
	return `${amount} ${currency}`;
}

/**
 * Format a wallet address like "XxXxx...XxXxx"
 */
export function formatWalletAddress(
	address: string = "",
	visible: number = 5,
	separator = "...",
): string {
	if (!address || address.length <= visible * 2 + separator.length) {
		return address;
	}
	const start = address.slice(0, visible);
	const end = address.slice(-visible);
	return `${start}${separator}${end}`;
}
