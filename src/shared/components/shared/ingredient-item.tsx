import React from "react";
import {
	CircleCheck, 
} from "lucide-react";
import Image from "next/image";

import {
	cn, 
} from "@/shared/lib/utils";

interface Props {
	active?: boolean
	className?: string
	imageUrl: string
	name: string
	onClick?: VoidFunction
	price: number
}

export const IngredientItem: React.FC<Props> = ({
	active, className, imageUrl, name, onClick, price, 
}) => (
	<div
		className={cn(
			`
      relative flex w-32 cursor-pointer flex-col items-center rounded-md
      bg-white p-1 text-center shadow-md
    `,
			{
				"grayscale-50": !active,
			},
			className,
		)} 
		onClick={onClick}
	>
		{active && <CircleCheck className="text-primary absolute top-2 right-2" />}

		<Image
			alt={name}
			height={110}
			src={imageUrl}
			width={110}
		/>

		<span className="mb-1 text-xs">{name}</span>

		<span className="font-bold">{price} ₽</span>
	</div>
);
