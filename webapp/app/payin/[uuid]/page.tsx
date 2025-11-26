import { notFound, redirect } from "next/navigation";
import { getPayInQuote } from "@/apis/pay";
import PaymentQuote from "@/components/payment-quote";

type PageProps = {
	params: Promise<{ uuid: string }>;
	searchParams: Promise<{ mock?: string }>;
};

export default async function Page({ params, searchParams }: PageProps) {
	const { uuid } = await params;
	const { mock } = await searchParams;
	const { data } = await getPayInQuote(uuid, mock === "1");

	if (!data) {
		return notFound();
	}

	if (data.status === "EXPIRED") {
		return redirect(`/payin/${uuid}/expired`);
	}

	if (data.status === "ACCEPTED") {
		return redirect(`/payin/${uuid}/confirm`);
	}

	return <PaymentQuote {...data} />;
}
