import type { ReactNode } from "react";
import { tp } from "../../typography";

type CtaProps = Readonly<{
	children: ReactNode;
	type: "button" | "submit";
	disabled?: boolean;
	onClick?: () => void;
}>;

export function Cta({ type, children, disabled, onClick }: CtaProps) {
	return (
		<button
			type={type}
			className={`
        ${tp.cta} text-center
        h-10 gap-2 py-2 px-4 rounded
        bg-primary-500 text-white cursor-pointer hover:bg-primary-700
				focus-ring scale-[99%] hover:scale-100 active:scale-[98%]
        transition-[background-color,scale]
				disabled:cursor-default disabled:bg-gray disabled:hover:bg-gray disabled:hover:scale-[99%]
      `}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
