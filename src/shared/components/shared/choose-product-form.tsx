import React from "react";

import { pizzaSizes } from "@/shared/constants/pizza";
import { cn } from "@/shared/lib/utils";

import { ProductImage } from "./product-image";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";

type Props = {
	className?: string
	imageUrl: string
	name: string
	ingredients: any[]
	items?: any[]
	onClickAdd?: VoidFunction
	isPizzaForm: boolean
}

export const ChooseProductForm: React.FC<Props> = ({className, name, imageUrl,isPizzaForm, ingredients, items, onClickAdd}) => {
	const textDetails = "30 см традиционное тесто";
	const totalPrice = 400;
	return (
		<div className={cn("flex flex-1", className)}>
			<ProductImage
				enableChoose={isPizzaForm}
				imageUrl={imageUrl}
				name={name}
				size={30}
			/>

			<div className="w-[490px] bg-[#F7F6F5] p-7">
				<Title
					className="font-extrabold mb-1"
					size="md"
					text={name}
				/>

				<p className="text-gray-400">{textDetails}</p>

				{isPizzaForm && <GroupVariants items={pizzaSizes} />}

				<Button 
					className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
				>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	);
};
