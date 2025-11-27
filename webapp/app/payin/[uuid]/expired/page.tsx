import { ExclamationIcon, Panel } from "ui-kit";

export default function ExpiredPage() {
	return (
		<Panel
			className="sm:py-[68px] sm:px-[90px]"
			preheading={
				<div className="mx-auto">
					<ExclamationIcon />
				</div>
			}
			heading="Payment details expired"
			description="The payment details for your transaction have expired."
		/>
	);
}
