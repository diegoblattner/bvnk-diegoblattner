"use client";
import { useState } from "react";
import { Cta, Panel, Price, Select, tp } from "ui-kit";
import { currencyOptions } from "@/app/constants";
import type { PayInQuote } from "@/types";
import { QuoteDetails } from "./quote-details";
import { useAcceptQuote } from "./use-accept-quote";
import { useRefreshQuoteOnExpire, useUpdateQuote } from "./use-update-quote";

export default function PaymentQuote({
	uuid,
	reference,
	merchantDisplayName,
	displayCurrency,
}: Readonly<PayInQuote>) {
	const [currency, setCurrency] = useState("");
	const [quote, updateAction, updateIsPending] = useUpdateQuote(uuid, currency);
	useRefreshQuoteOnExpire(quote, uuid, currency, updateAction);

	const [, acceptAction, acceptIsPending] = useAcceptQuote(uuid);
	const ctaDisabled = updateIsPending || acceptIsPending || !quote.data;

	return (
		<Panel
			heading={merchantDisplayName}
			subheading={
				<Price
					value={displayCurrency.amount}
					currency={displayCurrency.currency ?? ""}
				/>
			}
			description={
				<div>
					For reference number:{" "}
					<span className={`${tp.bodyBolder} text-foreground`}>
						{reference}
					</span>
				</div>
			}
		>
			{/** biome-ignore lint/correctness/useUniqueElementIds: unique id */}
			<Select
				id="paywith"
				name="paywith"
				label="Pay with"
				value={currency}
				onChange={setCurrency}
			>
				<Select.Option value="" disabled>
					Select currency
				</Select.Option>
				{currencyOptions.map((opt) => (
					<Select.Option key={opt.value} value={opt.value}>
						{opt.label}
					</Select.Option>
				))}
			</Select>
			{currency !== "" && (
				<>
					<QuoteDetails isFetching={updateIsPending} newQuote={quote.data} />
					<Cta type="button" disabled={ctaDisabled} onClick={acceptAction}>
						Confirm
					</Cta>
				</>
			)}
		</Panel>
	);
}
