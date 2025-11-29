import { ErrorPanel } from "ui-kit";

export default function NotFoundPage() {
	return (
		<ErrorPanel
			heading="Not found"
			description="The requested page was not found."
		/>
	);
}
