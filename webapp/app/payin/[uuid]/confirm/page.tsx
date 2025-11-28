import { getPayInQuoteForRoute, type PageProps } from "@/app/common";
import ConfirmQuote from "@/components/confirm-quote";

export default async function Page(pageProps: PageProps) {
	const data = await getPayInQuoteForRoute("confirmed", pageProps);

	return <ConfirmQuote {...data} />;
}
