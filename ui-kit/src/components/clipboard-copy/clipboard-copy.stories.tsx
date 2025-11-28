import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClipboardCopy } from "./clipboard-copy";

const meta = {
	title: "Components/Clipboard Copy",
	component: ClipboardCopy,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ClipboardCopy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		value: "rh6X8bZXE49xZhNwVx47K6Q6px7nDhaAdy",
		children: "rh6X8...haAdy",
	},
};
