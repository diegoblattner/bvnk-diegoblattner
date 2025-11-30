import type { ReactNode } from "react";
import { tp } from "../../typography";
import { Skeleton } from "../skeleton";

type PriceProps = Readonly<{
	value: ReactNode;
	currency: ReactNode;
}>;

function Price({ value, currency }: PriceProps) {
	return (
		<span className="inline-block h-10">
			<span className={tp.titleXL}>{value}</span>
			&nbsp;
			<span className={tp.titleSM}>{currency}</span>
		</span>
	);
}

function PriceSkeleton() {
	return (
		<span className="inline-block h-10">
			<Skeleton className="inline-block w-[15ch] h-8 translate-y-1" />
		</span>
	);
}

Price.Skeleton = PriceSkeleton;
export { Price };
