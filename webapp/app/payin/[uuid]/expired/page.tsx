import { ErrorPanel } from "ui-kit";
import { getPayInQuoteForRoute, type PageProps } from "../route-data";

export default async function ExpiredPage(pageProps: PageProps) {
	await getPayInQuoteForRoute("expired", pageProps);
	return (
		<ErrorPanel
			heading="Payment details expired"
			description="The payment details for your transaction have expired."
		/>
	);
}
