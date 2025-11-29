import type { ReactNode } from "react";
import { ExclamationIcon } from "../icons";
import { Panel } from "../panel";

type ErrorPanelProps = Readonly<{
	heading: ReactNode;
	description: ReactNode;
}>;

export function ErrorPanel({ heading, description }: ErrorPanelProps) {
	return (
		<Panel
			className="sm:py-[68px] sm:px-[90px]"
			preheading={
				<div className="mx-auto">
					<ExclamationIcon />
				</div>
			}
			heading={heading}
			description={description}
		/>
	);
}
