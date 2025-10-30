"use client";

import React from "react";
import Image from "next/image";

import { cn } from "@/shared/lib/utils";

type Props = {
	className?: string,
	imageUrl: string,
	size: 20 | 30 | 40,
	name: string
	enableChoose?: boolean
}
const sizeConfig = {
	20: 300,
	30: 400,
	40: 500,
};

export const ProductImage: React.FC<Props> = ({ className, imageUrl, name, size, enableChoose = true }) => {

	return (
		<div className={cn("flex items-center justify-center flex-1 relative w-full", className)}>
			<Image 
				alt={name}
				className={cn("relative left-2 top-2 transition-all z-10 duration-300")}
				height={sizeConfig[size]}
				src={imageUrl}
				width={sizeConfig[size]}
			/>

			{enableChoose && (
				<>
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-300 w-[450px] h-[450px]" />

					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[370px] h-[370px]" />
				</>
			)}
		</div>
	);
};
