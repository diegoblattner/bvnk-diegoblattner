import type { ReactNode } from "react";
import { ExclamationIcon } from "../icons";
import { Panel } from "../panel";
import { Skeleton } from "../skeleton";

type ErrorPanelProps = Readonly<{
	heading: ReactNode;
	description: ReactNode;
}>;

function ErrorPanel({ heading, description }: ErrorPanelProps) {
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

function ErrorSkeleton() {
	return (
		<Panel
			className="sm:py-[68px] sm:px-[90px]"
			preheading={
				<div className="mx-auto">
					<Skeleton className="w-12 h-12 rounded-full!" scaleClx="" />
				</div>
			}
			heading={<Skeleton className="w-[60%]" />}
			description={<Skeleton className="w-[80%]" />}
		/>
	);
}

ErrorPanel.Skeleton = ErrorSkeleton;
export { ErrorPanel };
