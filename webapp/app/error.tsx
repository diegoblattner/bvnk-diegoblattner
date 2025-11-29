"use client";
import { ErrorPanel } from "ui-kit";

export default function ErrorPage({
	error,
	reset,
}: Readonly<{
	error: Error & { digest?: string };
	reset: () => void;
}>) {
	return (
		<ErrorPanel
			heading="Oops"
			description={
				<div className="flex flex-col gap-3">
					<div>An error happened...</div>
					<button
						type="button"
						className="focus-ring text-primary-500"
						onClick={reset}
					>
						Retry
					</button>
				</div>
			}
		/>
	);
}
