import { ExclamationIcon, Panel } from "ui-kit";

export default function NotFoundPage() {
	return (
		<Panel
			className="sm:py-[68px] sm:px-[90px]"
			preheading={
				<div className="mx-auto">
					<ExclamationIcon />
				</div>
			}
			heading="Not found"
			description="The requested page was not found."
		/>
	);
}
