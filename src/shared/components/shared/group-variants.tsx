"use client";

import React from "react";

import { cn } from "@/shared/lib/utils";

type Variant = {
	name: string
	value: string
	disabled?: boolean
}

type Props = {
	items: readonly Variant[]
	onClick?: (value: Variant["value"]) => void
	selectedValue?: Variant["value"]
	className?: string
}

export const GroupVariants: React.FC<Props> = ({ className, items, selectedValue,  onClick}) => {
	return (
		<div className={cn("flex justify-between bg-[#F3F3F3] rounded-3xl p-1 select-none", className)}>
			{
				items.map(item => (
					<button
						key={item.value}
						disabled={item.disabled}
						className={cn("flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1  rounded-3xl transition-all duration-400 text-sm", 
							{
								"bg-white shadow": selectedValue === item.value ,
								"text-gray-500 opacity-50 pointer-events-none cursor-not-allowed": item.disabled,
							})}

						onClick={()=>onClick?.(item.value)}
					>
						{item.name}
					</button>
				))
			}
		</div>
	);
};
