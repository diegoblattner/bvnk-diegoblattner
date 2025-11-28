import type { Meta, StoryObj } from "@storybook/react-vite";
import { QRCode } from "../qr-code";
import { Details } from "./details";

const meta = {
	title: "Components/Details",
	component: Details,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: (
			<>
				<Details.Row label="Amount due" value="0.00410775 BTC" />
				<Details.Row label="BTC address" value="rh6X8bZ...haAdy">
					<QRCode value="rh6X8bZXE49xZhNwVx47K6Q6px7nDhaAdy" />
				</Details.Row>
				<Details.Row label="Quoted price expires in" value="00:00:11" />
			</>
		),
	},
};
