import type { Meta, StoryObj } from "@storybook/react-vite";

import { Price } from "./price";

const meta = {
	title: "Components/Price",
	component: Price,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		value: "200",
		currency: "EUR",
	},
};
