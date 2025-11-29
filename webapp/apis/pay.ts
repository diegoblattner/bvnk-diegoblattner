"use server";
import type { PayInQuote } from "@/types";
import { fetchData } from "./fetch-data";
import { getHawkAuthorization } from "./hawk-header";
import { getBodyForCreate, getMock } from "./mock";

export async function createPayInQuote() {
	const url = "https://api.sandbox.bvnk.com/api/v1/pay/summary";
	const method = "POST";

	const { data } = await fetchData<PayInQuote>(url, {
		method,
		headers: {
			Authorization: getHawkAuthorization(url, method),
			"Content-Type": "application/json",
		},
		body: getBodyForCreate(),
	});
	return data?.uuid;
}

export async function getPayInQuote(uuid: string, mock?: boolean) {
	if (mock) return { data: getMock() };

	return await fetchData<PayInQuote>(
		`https://api.sandbox.bvnk.com/api/v1/pay/${uuid}/summary`,
	);
}

export async function updatePayQuote(
	uuid: string,
	currency: string,
	payInMethod: "crypto",
	signal?: AbortSignal,
) {
	return await fetchData<PayInQuote>(
		`https://api.sandbox.bvnk.com/api/v1/pay/${uuid}/update/summary`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				currency,
				payInMethod,
			}),
			signal,
		},
	);
}

export async function acceptPayQuote(uuid: string) {
	return await fetchData<{
		successUrl: string;
	}>(`https://api.sandbox.bvnk.com/api/v1/pay/${uuid}/accept/summary`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
	});
}
