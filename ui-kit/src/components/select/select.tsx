import type { ReactNode } from "react";
import { tp } from "../../typography";
import { Skeleton } from "../skeleton/skeleton";

type SelectProps = Readonly<{
	children: ReactNode;
	id: string;
	name: string;
	value: string;
	label: ReactNode;
	onChange: (value: string) => void;
}>;

function Select({ id, label, name, value, onChange, children }: SelectProps) {
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={id} className={tp.fieldLabel}>
				{label}
			</label>
			<select
				id={id}
				name={name}
				value={value}
				onChange={(ev) => onChange(ev.target.value)}
				className={`
          ${tp.fieldSelect}
          border border-line rounded h-14 p-4 bg-background text-foreground focus-ring
        `}
			>
				{children}
			</select>
		</div>
	);
}

type OptionProps = Readonly<{
	value: string;
	children: ReactNode;
	disabled?: boolean;
}>;

function Option({ value, children, disabled }: OptionProps) {
	return (
		<option value={value} disabled={disabled}>
			{children}
		</option>
	);
}

function SelectSkeleton() {
	return (
		<div className="flex flex-col gap-1">
			<Skeleton as="label" className={`${tp.fieldLabel} w-[15ch]`} />
			<Skeleton as="select" className="h-14 w-full" scaleClx="" />
		</div>
	);
}

Select.Option = Option;
Select.Skeleton = SelectSkeleton;
export { Select };
