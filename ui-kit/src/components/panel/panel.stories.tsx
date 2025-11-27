import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cta } from "../cta";
import { Details } from "../details";
import { ExclamationIcon } from "../icons";
import { Price } from "../price";
import { Select } from "../select";
import { Timer } from "../timer";
import { Panel } from "./panel";

const meta = {
	title: "Components/Panel",
	component: Panel,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		heading: "Hello World",
		subheading: <Price value="200" currency="EUR" />,
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
		children: (
			<>
				{/** biome-ignore lint/correctness/useUniqueElementIds: just an example */}
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
				<Cta type="button">Confirm</Cta>
			</>
		),
	},
};

export const WithIcon: Story = {
	args: {
		className: "sm:py-[68px] sm:px-[90px]",
		preheading: (
			<div className="mx-auto">
				<ExclamationIcon />
			</div>
		),
		heading: "Payment details expired",
		description: "The payment details for your transaction have expired.",
	},
};
