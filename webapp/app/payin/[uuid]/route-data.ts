"use server";
import { notFound, redirect } from "next/navigation";
import { getPayInQuote } from "@/apis/pay";
import { getCountdown } from "@/lib";

type Route = "get" | "confirm" | "expired";

export type PageProps = {
	params: Promise<{ uuid: string }>;
	searchParams: Promise<{ mock?: string }>;
};

export async function getPayInQuoteForRoute(
	currentRoute: Route,
	{ params, searchParams }: PageProps,
) {
	const { uuid } = await params;
	const { mock } = await searchParams;
	const { data } = await getPayInQuote(uuid, mock === "1");

	if (!data) {
		return notFound();
	}

	const remainingTime = getCountdown(data.expiryDate);

	if (data.status === "EXPIRED" || remainingTime <= 0) {
		if (currentRoute === "expired") {
			return data;
		} else {
			return redirect(`/payin/${uuid}/expired`);
		}
	}

	if (data.quoteStatus === "ACCEPTED") {
		if (currentRoute === "confirm") {
			return data;
		} else {
			return redirect(`/payin/${uuid}/confirm`);
		}
	}

	if (currentRoute === "get") {
		return data;
	} else {
		return redirect(`/payin/${uuid}`);
	}
}
