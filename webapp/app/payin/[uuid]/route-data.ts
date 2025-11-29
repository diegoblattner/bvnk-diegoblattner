"use server";
import { notFound, redirect } from "next/navigation";
import { getPayInQuote } from "@/apis/pay";

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

	if (data.status === "EXPIRED" && currentRoute !== "expired") {
		return redirect(`/payin/${uuid}/expired`);
	}

	if (
		data.status === "PENDING" &&
		data.quoteStatus === "TEMPLATE" &&
		currentRoute !== "get"
	) {
		return redirect(`/payin/${uuid}`);
	}

	if (
		data.status === "PENDING" &&
		data.quoteStatus === "ACCEPTED" &&
		currentRoute !== "confirm"
	) {
		return redirect(`/payin/${uuid}/confirm`);
	}

	return data;
}
