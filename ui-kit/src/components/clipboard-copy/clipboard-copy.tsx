"use client";
import { type ReactNode, Suspense, use, useEffect, useState } from "react";

type ClipboardCopyProps = Readonly<{
	children: ReactNode;
	value: string;
}>;

async function setClipboard(text: string) {
	return await navigator.clipboard.writeText(text);
}

function Feedback({
	promise,
}: Readonly<{ promise: Promise<void> | undefined }>) {
	if (!promise) return undefined;
	use(promise);
	return (
		<Suspense>
			<div
				className={`
          tooltip absolute top-0 -start-1/2 -translate-y-full
        	bg-black text-white rounded px-2 py-1
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

	// biome-ignore lint/correctness/useExhaustiveDependencies: copy is needed in deps
	useEffect(() => {
		const timeout = setTimeout(() => setCopy([]), 3000);
		return () => clearTimeout(timeout);
	}, [copy]);

	return (
		<div className="flex gap-3">
			<div title={value}>{children}</div>
			<div className="relative">
				<button
					type="button"
					className="text-primary-500 hover:text-primary-700 clickable focus-ring transition-scale rounded"
					onClick={() => setCopy([setClipboard(value)])}
				>
					Copy
				</button>
				{copy.map((p) => (
					<Feedback key={getKey()} promise={p} />
				))}
			</div>
		</div>
	);
}
