import type { Meta, StoryObj } from "@storybook/react-vite";
import { QRCode } from "./qr-code";

const meta = {
	title: "Components/QRCode",
	component: QRCode,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof QRCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		value: "Hello, world!",
	},
};
