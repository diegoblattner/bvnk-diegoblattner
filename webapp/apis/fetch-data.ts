import type { ApiResult, ErrorItem } from "@/types";

function handleError(e: unknown) {
	console.error(e);
	if ((e as ErrorItem).requestId) {
		return { error: e as ErrorItem };
	}
	return { error: { requestId: "unkown" } };
}

export async function fetchData<T>(
	...args: Parameters<typeof fetch>
): Promise<ApiResult<T>> {
	let error: unknown;
	try {
		const response = await fetch(...args);
		const data: T = await response.json();
		if (response.ok) {
			return { data };
		}
		error = data;
	} catch (e) {
		error = e;
	}
	return handleError(error);
}
