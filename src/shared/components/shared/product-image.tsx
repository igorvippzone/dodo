"use client";

import React from "react";
import Image from "next/image";

import { cn } from "@/shared/lib/utils";

interface Props {
	className?: string,
	enableChoose?: boolean
	imageUrl: string,
	name: string
	size: 20 | 30 | 40,
}
const sizeConfig = {
	20: 300,
	30: 400,
	40: 500,
};

export const ProductImage: React.FC<Props> = ({
	className, enableChoose = true, imageUrl, name, size, 
}) => (
	<div className={cn("relative flex w-full flex-1 items-center justify-center", className)}>
		<Image 
			alt={name}
			className={cn("relative top-2 left-2 z-10 transition-all duration-300")}
			height={sizeConfig[size]}
			src={imageUrl}
			width={sizeConfig[size]}
		/>

		{enableChoose && (
			<>
				<div className={`
       absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2
       -translate-y-1/2 rounded-full border-2 border-dashed border-gray-300
     `}
				/>

				<div className={`
       absolute top-1/2 left-1/2 h-[370px] w-[370px] -translate-x-1/2
       -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200
     `}
				/>
			</>
		)}
	</div>
);
