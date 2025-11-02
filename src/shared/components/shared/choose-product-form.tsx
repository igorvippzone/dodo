"use client";

import React from "react";

import { Ingredient, ProductItem } from "@/generated/prisma";
import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { usePizzaOptions } from "@/shared/hooks";
import { getPizzaDetails } from "@/shared/lib";
import { cn } from "@/shared/lib/utils";

import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import { IngredientItem } from "./ingredient-item";
import { ProductImage} from "./product-image";
import { Title } from "./title";

interface Props {
	className?: string
	imageUrl: string
	ingredients: Ingredient[]
	isPizzaForm: boolean
	items: ProductItem[]
	name: string
	onClickAddCart?: VoidFunction
}

export const ChooseProductForm: React.FC<Props> = ({
	className, imageUrl, ingredients,isPizzaForm, items, name, onClickAddCart,
}) => {
	const { size, type, setSize, setType, addIngredient, selectedIngredients, availableSizes} = usePizzaOptions(items);

	const {totalPrice, textDetails} = getPizzaDetails(type, size, items, ingredients, selectedIngredients);

	const handleClickAdd = ()=>{
		onClickAddCart?.();
	};
	
	return (
		<div className={cn(
			"flex flex-1", className,
		)}
		>
			<ProductImage
				enableChoose={isPizzaForm}
				imageUrl={imageUrl}
				name={name}
				size={size}
			/>

			<div className="w-[490px] bg-[#F7F6F5] p-7">
				<Title
					className="mb-1 font-extrabold"
					size="md"
					text={name}
				/>

				<p className="text-gray-400">{textDetails}</p>

				{isPizzaForm && (
					<div className="mt-5 flex flex-col gap-5">
						<GroupVariants
							items={availableSizes}
							value={String(size)}
							onClick={(value) => setSize(Number(value) as PizzaSize)}
						/>	

						<GroupVariants
							items={pizzaTypes}
							value={String(type)}
							onClick={(value) => setType(Number(value) as PizzaType)}
						/>
					</div>
				
				)}

				{Boolean(ingredients.length) && (
					<div className={`
       scrollbar mt-5 h-[420px] overflow-auto rounded-md bg-gray-50 p-5
     `}
					>
						<div className="grid grid-cols-3 gap-3">
							{ingredients.map((ingredient) => (
								<IngredientItem 
									key={ingredient.id}
									active={selectedIngredients.has(ingredient.id)}
									imageUrl={ingredient.imageUrl}
									name={ingredient.name}
									price={ingredient.price}
									onClick={()=> addIngredient(ingredient.id)}
								/>
							))}
						</div>
					</div>
				)}
	
				<Button 
					className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
					onClick={handleClickAdd}
				>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	);
};
