import ReactQRCode from "react-qr-code";
import { tp } from "../../typography";
import { Skeleton } from "../skeleton";

type QrCodeProps = Readonly<{
	value: string;
}>;

function QRCode({ value }: QrCodeProps) {
	return (
		<div className="flex flex-col gap-3">
			<ReactQRCode
				className="bg-white p-3 mx-auto rounded"
				value={value}
				title={`QR code for: ${value}`}
			/>
			<div className={`${tp.qrcode} text-gray text-center break-all`}>
				{value}
			</div>
		</div>
	);
}

function QRCodeSkeleton() {
	return (
		<div className="flex flex-col gap-3 items-center">
			<Skeleton className="w-[256px] h-[256px]" scaleClx="" />
			<Skeleton className={`${tp.qrcode} w-[80%]`} />
		</div>
	);
}

QRCode.Skeleton = QRCodeSkeleton;
export { QRCode };
