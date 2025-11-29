import { Details, Timer } from "ui-kit";
import type { PayInQuote } from "@/types";
import { getExpireTime } from "./register-update-quote";

type QuoteDetailsProps = Readonly<{
	newQuote: PayInQuote | undefined;
	isFetching: boolean;
}>;

export function QuoteDetails({ newQuote, isFetching }: QuoteDetailsProps) {
	return (
		<Details>
			<Details.Row
				label="Amount due"
				value={
					<div className={isFetching ? "text-gray animate-pulse" : undefined}>
						{isFetching && !newQuote?.paidCurrency ? (
							"Loading..."
						) : (
							<>
								{newQuote?.paidCurrency?.amount ?? ""}{" "}
								{newQuote?.paidCurrency?.currency ?? ""}
							</>
						)}
					</div>
				}
			/>
			<Details.Row
				label="Quoted price expires in"
				value={
					<div className={isFetching ? "text-gray animate-pulse" : undefined}>
						{isFetching && !newQuote?.paidCurrency ? (
							"Loading..."
						) : (
							<Timer id={newQuote?.uuid ?? ""} ms={getExpireTime(newQuote)} />
						)}
					</div>
				}
			/>
		</Details>
	);
}
