import type { ReactNode } from "react";
import { tp } from "../../typography";

type PanelProps = Readonly<{
	className?: string;
	heading?: ReactNode;
	subheading?: ReactNode;
	description?: ReactNode;
	children: ReactNode;
}>;

export function Panel({
	className = "",
	heading,
	subheading,
	description,
	children,
}: PanelProps) {
	return (
		<div
			className={`
				${className} ${tp.body}
				bg-background text-foreground
				mx-auto sm:max-w-[460px]
				h-dvh sm:h-auto
				flex flex-col
				sm:rounded-[10px] p-[25px] gap-[25px]`}
		>
			{heading || subheading ? (
				<div>
					{heading && <h1 className={`${tp.title} text-center`}>{heading}</h1>}
					{subheading && <h2 className="text-center">{subheading}</h2>}
				</div>
			) : null}
			{description && (
				<div className={`${tp.body} text-center`}>{description}</div>
			)}
			{children}
		</div>
	);
}
