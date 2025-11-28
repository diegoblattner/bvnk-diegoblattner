import type { ReactNode } from "react";
import { tp } from "../../typography";

type DetailsProps = Readonly<{
	children: ReactNode;
}>;

function Details({ children }: DetailsProps) {
	return (
		<div className="flex flex-col divide-y divide-line border-y border-line">
			{children}
		</div>
	);
}

type RowProps = Readonly<{
	label: ReactNode;
	value: ReactNode;
	children?: ReactNode;
}>;

function Row({ label, value, children }: RowProps) {
	return (
		<div className="flex flex-col">
			<div className="flex justify-between gap-4 py-3">
				<div className={`${tp.body} text-gray`}>{label}</div>
				<div className={tp.bodyBolder}>{value}</div>
			</div>
			{children && <div className="pb-3">{children}</div>}
		</div>
	);
}

Details.Row = Row;
export { Details };
