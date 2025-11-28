import { getPayInQuoteForRoute, type PageProps } from "@/app/common";
import PaymentQuote from "@/components/payment-quote";

export default async function Page(pageProps: PageProps) {
	const data = await getPayInQuoteForRoute("get", pageProps);

	return <PaymentQuote {...data} />;
}
