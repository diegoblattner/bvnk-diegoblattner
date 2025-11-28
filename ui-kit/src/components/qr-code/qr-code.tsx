import ReactQRCode from "react-qr-code";
import { tp } from "../../typography";

type QrCodeProps = Readonly<{
	value: string;
}>;

export function QRCode({ value }: QrCodeProps) {
	return (
		<div className="flex flex-col gap-3">
			<ReactQRCode
				className="bg-white p-3 mx-auto rounded"
				value={value}
				title={`QR code for: ${value}`}
			/>
			<div className={`${tp.qrcode} text-gray text-center`}>{value}</div>
		</div>
	);
}
