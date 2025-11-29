import PaymentQuote from "@/components/payment-quote";
import { getPayInQuoteForRoute, type PageProps } from "./route-data";

export default async function Page(pageProps: PageProps) {
	const data = await getPayInQuoteForRoute("get", pageProps);

	return <PaymentQuote {...data} />;
}
