import ConfirmQuote from "@/components/confirm-quote";
import { getPayInQuoteForRoute, type PageProps } from "../route-data";

export default async function Page(pageProps: PageProps) {
	const data = await getPayInQuoteForRoute("confirmed", pageProps);

	return <ConfirmQuote {...data} />;
}
