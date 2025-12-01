import { ClipboardCopy, Details, Panel, QRCode } from "ui-kit";
import { formatWalletAddress, getDisplayAmount } from "@/lib";
import type { PayInQuote } from "@/types";
import QuoteTimer from "./quote-timer";

export default function ConfirmQuote({
	uuid,
	paidCurrency,
	address,
	expiryDate,
}: Readonly<PayInQuote>) {
	return (
		<Panel
			heading={`Pay with ${paidCurrency.currency}`}
			description={`To complete this payment send the amount due to the ${paidCurrency.currency} address provided below.`}
		>
			<Details>
				<Details.Row
					label="Amount due"
					value={
						<ClipboardCopy value={paidCurrency.amount.toString()}>
							{getDisplayAmount(paidCurrency)}
						</ClipboardCopy>
					}
				/>
				<Details.Row
					label={`${paidCurrency.currency} address`}
					value={
						<ClipboardCopy value={address?.address ?? ""}>
							{formatWalletAddress(address?.address)}
						</ClipboardCopy>
					}
				>
					{address?.address && <QRCode value={address?.address} />}
				</Details.Row>
				<Details.Row
					label="Time left to pay"
					value={<QuoteTimer uuid={uuid} expiryDate={expiryDate} />}
				/>
			</Details>
		</Panel>
	);
}
