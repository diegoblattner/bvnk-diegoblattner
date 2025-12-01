import type { ReactNode } from "react";
import { Details, Skeleton, Timer } from "ui-kit";
import type { PayInQuote } from "@/types";
import { getExpiryTime } from "./use-update-quote";

type QuoteDetailsProps = Readonly<{
	newQuote: PayInQuote | undefined;
	isFetching: boolean;
}>;

type DisplayValueProps = Readonly<{
	children: ReactNode;
	isFetching: boolean;
	showSkeleton: boolean;
}>;

function DisplayValue({
	isFetching,
	showSkeleton,
	children,
}: DisplayValueProps) {
	return (
		<div
			className={
				isFetching
					? "text-gray animate-pulse [animation-duration:1s]"
					: undefined
			}
		>
			{isFetching && showSkeleton ? (
				<Skeleton className="w-[12ch]" />
			) : (
				children
			)}
		</div>
	);
}

export function QuoteDetails({ newQuote, isFetching }: QuoteDetailsProps) {
	return (
		<Details>
			<Details.Row
				label="Amount due"
				value={
					<DisplayValue
						isFetching={isFetching}
						showSkeleton={isFetching && !newQuote?.paidCurrency}
					>
						{newQuote?.paidCurrency?.amount ?? ""}{" "}
						{newQuote?.paidCurrency?.currency ?? ""}
					</DisplayValue>
				}
			/>
			<Details.Row
				label="Quoted price expires in"
				value={
					<DisplayValue
						isFetching={isFetching}
						showSkeleton={isFetching && !newQuote?.acceptanceExpiryDate}
					>
						<Timer id={newQuote?.uuid ?? ""} ms={getExpiryTime(newQuote)} />
					</DisplayValue>
				}
			/>
		</Details>
	);
}
