import { calcTotalPizzaPrice, ICalcTotalPizzaPrice } from "./calc-total-pizza-prices";
import { mapPizzaType } from "../constants/pizza";

interface ReturnProps {
	textDetails: string
	totalPrice: number
}

export const getPizzaDetails = ({	
	type, 
	size, 
	items, 
	ingredients, 
	selectedIngredients,
}: ICalcTotalPizzaPrice): ReturnProps => {
	const totalPrice = calcTotalPizzaPrice({ type, size, items, ingredients, selectedIngredients });
	const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;

	return {
		totalPrice,
		textDetails,
	};
};