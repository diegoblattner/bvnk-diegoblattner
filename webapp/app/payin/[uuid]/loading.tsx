import { Panel, Price, Select, Skeleton } from "ui-kit";

export default function LoadingPage() {
	return (
		<Panel
			heading={<Skeleton className="w-[15ch]" />}
			subheading={<Price.Skeleton />}
			description={<Skeleton className="w-[80%]" />}
		>
			<Select.Skeleton />
		</Panel>
	);
}
