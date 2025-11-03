"use client";

import React from "react";

import { cn } from "@/shared/lib/utils";

export interface Variant {
	disabled?: boolean
	name: string
	value: string
}

interface Props {
	className?: string
	items: readonly Variant[]
	onClick?: (value: Variant["value"]) => void
	value?: Variant["value"]
}

export const GroupVariants: React.FC<Props> = ({
	className, items, onClick,  value,
}) => (
	<div className={cn("flex justify-between rounded-3xl bg-[#F3F3F3] p-1 select-none", className)}>
		{
			items.map((item) => (
				<button
					key={item.value}
					disabled={item.disabled}
					className={cn(
						`flex h-[30px] flex-1 cursor-pointer items-center justify-center rounded-3xl px-5 text-sm transition-all duration-400`,
						{
							"bg-white shadow": value === item.value,
							"pointer-events-none cursor-not-allowed text-gray-500 opacity-50": item.disabled,
						},
					)}
					onClick={() => onClick?.(item.value)}
				>
					{item.name}
				</button>
			))
		}
	</div>
);
