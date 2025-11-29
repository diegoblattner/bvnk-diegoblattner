"use client";
import { ClipboardCopy, Details, Panel, QRCode, Timer } from "ui-kit";
import { formatWalletAddress, getCountdown, getDisplayAmount } from "@/lib";
import type { PayInQuote } from "@/types";

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
						<ClipboardCopy value={getDisplayAmount(paidCurrency)}>
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
					value={
						<Timer
							id={uuid}
							ms={getCountdown(expiryDate)}
							// forces a page reload when the timer countdown finishes,
							// if the quote is expired, the location will be redirected to the expired page
							onTimeEllapsed={() => globalThis.location.reload()}
						/>
					}
				/>
			</Details>
		</Panel>
	);
}
