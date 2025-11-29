import ConfirmQuote from "@/components/confirm-quote";
import { getPayInQuoteForRoute, type PageProps } from "../route-data";

export default async function Page(pageProps: PageProps) {
	const data = await getPayInQuoteForRoute("confirm", pageProps);

	return <ConfirmQuote {...data} />;
}
