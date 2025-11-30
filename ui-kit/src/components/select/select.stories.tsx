import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { fn } from "storybook/test";
import { Select } from "./select";

const meta = {
	title: "Components/Select",
	component: Select,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		id: "paywith",
		name: "paywith",
		label: "Pay with",
		value: "",
		onChange: fn(),
		children: (
			<>
				<Select.Option value="">Select currency</Select.Option>
				<Select.Option value="BTC">Bitcoin</Select.Option>
				<Select.Option value="ETH">Ethereum</Select.Option>
				<Select.Option value="LTC">Litecoin</Select.Option>
			</>
		),
	},
	decorators: [
		(Story, { args }) => {
			const [value, setValue] = useState(args.value);
			return (
				<div className="w-[30ch]">
					<Story
						args={{
							...args,
							value,
							onChange: (v) => {
								args.onChange(v);
								setValue(v);
							},
						}}
					/>
				</div>
			);
		},
	],
};

export const Skeleton: Story = {
	args: Primary.args,
	render() {
		return (
			<div className="w-[30ch]">
				<Select.Skeleton />
			</div>
		);
	},
};
