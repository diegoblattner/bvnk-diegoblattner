"use client";
import { useState } from "react";
import { Cta, Panel, Price, Select, tp } from "ui-kit";
import { currencyOptions } from "@/app/constants";
import type { PayInQuote } from "@/types";
import { QuoteDetails } from "./quote-details";
import { useUpdateQuote } from "./use-update-quote";

export default function PaymentQuote({
	uuid,
	reference,
	merchantDisplayName,
	displayCurrency,
}: Readonly<PayInQuote>) {
	const [currency, setCurrency] = useState("");
	const { isFetching, data } = useUpdateQuote(uuid, currency);

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
					<span className={`${tp.bodyBolder} text-black`}>{reference}</span>
				</div>
			}
		>
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
					<QuoteDetails isFetching={isFetching} newQuote={data} />
					<Cta type="button">Confirm</Cta>
				</>
			)}
		</Panel>
	);
}
