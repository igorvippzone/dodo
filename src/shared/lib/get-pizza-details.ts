import { Ingredient, ProductItem } from "@/generated/prisma";

import { calcTotalPizzaPrice } from "./calc-total-pizza-prices";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";

interface ReturnProps {
	textDetails: string
	totalPrice: number
}
export const getPizzaDetails = (	type: PizzaType,size:PizzaSize,items: ProductItem[], ingredients: Ingredient[], selectedIngredients: Set<string>): ReturnProps => {

	const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
	const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;

	return {
		totalPrice,
		textDetails,
	};
};