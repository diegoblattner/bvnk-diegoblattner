import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorPanel } from "./error-panel";

const meta = {
	title: "Components/ErrorPanel",
	component: ErrorPanel,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ErrorPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		heading: "Oops",
		description: "Something went wrong...",
	},
};
