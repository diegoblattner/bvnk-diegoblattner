import { tp } from "../../typography";

type PriceProps = Readonly<{
	value: string | number;
	currency: string;
}>;

export function Price({ value, currency }: PriceProps) {
	return (
		<span>
			<span className={tp.titleXL}>{value}</span>
			&nbsp;
			<span className={tp.titleSM}>{currency}</span>
		</span>
	);
}
