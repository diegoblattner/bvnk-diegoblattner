import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel } from "../panel";
import { Price } from "../price";
import { Select } from "../select";
import { Skeleton } from "./skeleton";

const meta = {
	title: "Components/Skeleton",
	component: Skeleton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};

export const Square: Story = {
	args: {
		className: "w-[200px] h-[200px]",
	},
};

export const PayInQuote: Story = {
	render: () => (
		<Panel
			heading={<Skeleton />}
			subheading={<Price.Skeleton />}
			description={<Skeleton className="w-[35ch]" />}
		>
			<Select.Skeleton />
		</Panel>
	),
};
