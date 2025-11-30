import { Details, Panel, QRCode, Skeleton } from "ui-kit";

export default function LoadingPage() {
	return (
		<Panel
			heading={<Skeleton className="w-[15ch]" />}
			description={
				<>
					<Skeleton className="w-[80%]" />
					<Skeleton className="w-[60%]" />
				</>
			}
		>
			<Details>
				<Details.Row
					label={<Skeleton className="w-[15ch]" />}
					value={<Skeleton className="w-[15ch]" />}
				/>
				<Details.Row
					label={<Skeleton className="w-[15ch]" />}
					value={<Skeleton className="w-[15ch]" />}
				>
					<QRCode.Skeleton />
				</Details.Row>
				<Details.Row
					label={<Skeleton className="w-[15ch]" />}
					value={<Skeleton className="w-[15ch]" />}
				/>
			</Details>
		</Panel>
	);
}
