import { ProductItem } from "@/generated/prisma";

import { Variant } from "../components/shared/group-variants";
import { pizzaSizes, PizzaType } from "../constants/pizza";
/**
 * 
 * @param type 
 * @param items 
 * @returns Variant[]
 */

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
	const availablePizzas = items.filter((item) => item.pizzaType === type);
	return pizzaSizes.map((item) => ({
		disabled: !availablePizzas.some((pizza)=> pizza.size === Number(item.value)),
		name: item.name,
		value: item.value,
	}));
};