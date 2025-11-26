/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
"use client";
import { Details, Panel, Price, Select, Timer } from "ui-kit";

export default function Home() {
	return (
		<Panel
			heading="Hello World"
			subheading={<Price value="200" currency="EUR" />}
			description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
		>
			<Select
				id="paywith"
				name="paywith"
				label="Pay with"
				value=""
				onChange={() => {}}
			>
				<Select.Option value="">Select currency</Select.Option>
				<Select.Option value="BTC">Bitcoin</Select.Option>
				<Select.Option value="ETH">Ethereum</Select.Option>
				<Select.Option value="LTC">Litecoin</Select.Option>
			</Select>
			<Details>
				<Details.Row label="Amount due" value="0.00410775 BTC" />
				<Details.Row
					label="Quoted price expires in"
					value={<Timer id="1" ms={60000} />}
				/>
			</Details>
		</Panel>
	);
}
