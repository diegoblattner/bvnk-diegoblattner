import { type ReactNode, Suspense, use, useState } from "react";

type ClipboardCopyProps = Readonly<{
	children: ReactNode;
	value: string;
}>;

async function setClipboard(text: string) {
	const clipboardItem = new ClipboardItem({
		"text/plain": text,
	});
	return await navigator.clipboard.write([clipboardItem]);
}

function Feedback({
	promise,
}: Readonly<{ promise: Promise<void> | undefined }>) {
	if (!promise) return undefined;
	use(promise);
	return (
		<Suspense fallback="">
			<div
				className={`
          tooltip absolute top-0 -start-1/2 -translate-y-full
        bg-black text-white rounded appearance-none px-2 py-1
          cursor-default
        `}
			>
				Copied!
			</div>
		</Suspense>
	);
}

const getKey = () => Date.now();

export function ClipboardCopy({ children, value }: ClipboardCopyProps) {
	const [copy, setCopy] = useState<Promise<void>[]>([]);
	return (
		<div className="flex gap-3">
			<div title={value}>{children}</div>
			<button
				type="button"
				className="text-primary-500 hover:text-primary-700 cursor-pointer relative"
				onClick={() => setCopy([setClipboard(value)])}
			>
				Copy
				{copy.map((p) => (
					<Feedback key={getKey()} promise={p} />
				))}
			</button>
		</div>
	);
}
