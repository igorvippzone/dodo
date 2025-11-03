import { Ingredient, ProductItem } from "@/generated/prisma";

import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * Функция для подсчета общей стоимости пиццы
 * 
 * @example calcTotalPizzaPrice({type: 1, size: 20, items, ingredients, selectedIngredients})
 * 
 * @param type - тип теста выбранной пиццы
 * @param size - размер выбранной пиццы
 * @param items - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 * 
 * @returns `number` общая стоимость
 */

export interface ICalcTotalPizzaPrice {
	type: PizzaType,
	size:PizzaSize,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<string>,
}

export const calcTotalPizzaPrice = ({	
	type,
	size,
	items,
	ingredients,
	selectedIngredients, 
}: ICalcTotalPizzaPrice) => {
	const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;

	const totalIngredientsPrice = ingredients
		.filter((ingredient) => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0);

	return pizzaPrice + totalIngredientsPrice;
};