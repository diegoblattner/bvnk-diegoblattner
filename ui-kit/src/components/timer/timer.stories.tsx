import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Timer } from "./timer";

const meta = {
	title: "Components/Timer",
	component: Timer,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		onTimeEllapsed: fn(),
	},
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		id: "1",
		ms: 60 * 1000,
	},
};
