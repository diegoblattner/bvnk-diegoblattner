import { ExclamationIcon, Panel } from "ui-kit";
import { getPayInQuoteForRoute, type PageProps } from "@/app/common";

export default async function ExpiredPage(pageProps: PageProps) {
	await getPayInQuoteForRoute("expired", pageProps);
	return (
		<Panel
			className="sm:py-[68px] sm:px-[90px]"
			preheading={
				<div className="mx-auto">
					<ExclamationIcon />
				</div>
			}
			heading="Payment details expired"
			description="The payment details for your transaction have expired."
		/>
	);
}
