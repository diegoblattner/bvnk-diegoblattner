import type { ElementType } from "react";

type SkeletonProps = Readonly<{
	className?: string;
	scaleClx?: string;
	as?: ElementType;
}>;

export function Skeleton({
	as: Comp = "div",
	className = "",
	scaleClx = "scale-y-90",
}: SkeletonProps) {
	return (
		<Comp
			className={`
        ${className} ${scaleClx}
        scale-x-101 inline-block align-baseline text-transparent
        bg-gray-500/20 rounded motion-safe:animate-pulse [animation-duration:1s]
      `}
		>
			Loading
		</Comp>
	);
}
