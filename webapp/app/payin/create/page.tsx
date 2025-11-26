import { redirect } from "next/navigation";
import { createPayInQuote } from "@/apis/pay";

export default async function Page() {
	const uuid = await createPayInQuote();

	if (uuid) {
		return redirect(`/payin/${uuid}`);
	}

	return (
		<div className="p-4">
			Failed to create a quote, refresh the page to try again...
		</div>
	);
}
