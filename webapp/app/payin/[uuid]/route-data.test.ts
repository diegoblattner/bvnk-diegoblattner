import { notFound, redirect } from "next/navigation";
import { getPayInQuote } from "@/apis/pay";
import { acceptedQuote, expiredQuote, pendingQuote } from "@/mocks/pay-quote";
import { getPayInQuoteForRoute, type PageProps } from "./route-data";

jest.mock("next/navigation");
jest.mock("@/apis/pay");

const uuid = "1234";
const params: PageProps = {
	params: Promise.resolve({ uuid }),
	searchParams: Promise.resolve({ mock: undefined }),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockedFn = (fn: (...args: any[]) => any) => fn as unknown as jest.Mock;

const callMethod = async (
	pageProps: PageProps,
	assertions: {
		get: (result: unknown) => void;
		confirm: (result: unknown) => void;
		expired: (result: unknown) => void;
	},
) => {
	for (const key of Object.keys(assertions)) {
		const result = await getPayInQuoteForRoute(
			key as keyof typeof assertions,
			pageProps,
		);
		assertions[key as keyof typeof assertions](result);
	}
};

test("Routing - not found pay quote", async () => {
	mockedFn(getPayInQuote).mockResolvedValue({
		error: { requestId: "1234" },
	});
	await getPayInQuoteForRoute("get", params);
	expect(notFound).toHaveBeenCalled();
});

test("Routing - EXPIRED status", async () => {
	mockedFn(getPayInQuote).mockResolvedValue({ data: expiredQuote });
	await callMethod(params, {
		get: () => {
			expect(redirect).toHaveBeenCalledWith(`/payin/${uuid}/expired`);
			mockedFn(redirect).mockClear();
		},
		confirm: () => {
			expect(redirect).toHaveBeenCalledWith(`/payin/${uuid}/expired`);
			mockedFn(redirect).mockClear();
		},
		expired: (result) => {
			expect(result).toEqual(expiredQuote);
		},
	});
});

test("Routing - PENDING status", async () => {
	mockedFn(getPayInQuote).mockResolvedValue({ data: pendingQuote });
	await callMethod(params, {
		get: (result) => {
			expect(result).toEqual(pendingQuote);
		},
		confirm: () => {
			expect(redirect).toHaveBeenCalledWith(`/payin/${uuid}`);
			mockedFn(redirect).mockClear();
		},
		expired: () => {
			expect(redirect).toHaveBeenCalledWith(`/payin/${uuid}`);
			mockedFn(redirect).mockClear();
		},
	});
});

test("Routing - ACCEPTED status", async () => {
	mockedFn(getPayInQuote).mockResolvedValue({ data: acceptedQuote });
	await callMethod(params, {
		get: () => {
			expect(redirect).toHaveBeenCalledWith(`/payin/${uuid}/confirm`);
			mockedFn(redirect).mockClear();
		},
		confirm: (result) => {
			expect(result).toEqual(acceptedQuote);
		},
		expired: () => {
			expect(redirect).toHaveBeenCalledWith(`/payin/${uuid}/confirm`);
			mockedFn(redirect).mockClear();
		},
	});
});
