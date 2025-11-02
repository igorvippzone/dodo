import { useState } from "react";
import { useSet } from "react-use";
import { useSearchParams } from "next/navigation";

export interface Filters extends PriceRangeProps {
	pizzaTypes: Set<string>
	selectedIngredients: Set<string>
	sizes: Set<string>
}

export interface QueryFilters extends PriceRangeProps {
	pizzaTypes: string
	selectedIngredients: string
	sizes: string
}
export interface ReturnProps extends Filters {
	setIngredients: (value: string) => void,
	setPizzaTypes: (value: string) => void,
	setPrices: (name: keyof PriceRangeProps, value: number) => void
	setSizes: (value: string) => void,
}

interface PriceRangeProps {
	priceFrom?: number
	priceTo?: number
}
export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

	const [ingredients, {
		toggle: toggleIngredients, 
	}] = useSet(new Set<string>(searchParams.get("selectedIngredients")?.split(",") || []));

	const [sizes, {
		toggle: toggleSizes, 
	}] = useSet(new Set<string>(searchParams.get("sizes")?.split(",") || []));

	const [pizzaTypes, {
		toggle: togglePizzaTypes, 
	}] = useSet(new Set<string>(searchParams.get("pizzaTypes")?.split(",") || []));

	const [{
		priceFrom, priceTo, 
	}, setPrices] = useState<PriceRangeProps>({
		priceFrom: Number(searchParams.get("priceFrom")) || undefined,
		priceTo: Number(searchParams.get("priceTo")) || undefined,
	});

	const updatePrice = (
		name: keyof PriceRangeProps, value: number,
	) => {
		setPrices((prev) => ({ ...prev, [name]: value }));
	};

	return {
		pizzaTypes,
		priceFrom,
		priceTo,
		selectedIngredients: ingredients,
		setIngredients: toggleIngredients,
		setPizzaTypes: togglePizzaTypes,
		setPrices: updatePrice,
		setSizes: toggleSizes,
		sizes,
	};
};