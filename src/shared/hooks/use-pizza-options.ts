import { useEffect, useState } from "react";
import { useSet } from "react-use";

import { ProductItem } from "@/generated/prisma";

import { Variant } from "../components/shared/group-variants";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { getAvailablePizzaSizes } from "../lib";

interface ReturnProps {
	size: PizzaSize,
	type: PizzaType,
	setSize: (size: PizzaSize) => void
	setType: (type: PizzaType) => void
	selectedIngredients: Set<string>
	addIngredient: (id: string) => void
	availableSizes: Variant[]
}

/**
 * 
 * @param items `ProductItem[]` 
 * @returns `ReturnProps`
 */

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
	const [size, setSize] = useState<PizzaSize>(20);
	const [type, setType] = useState<PizzaType>(1);
	const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<string>([]));

	const availableSizes = getAvailablePizzaSizes(type, items);

	useEffect(()=>{
		const isAvailableSize = availableSizes?.find((item) => Number(item.value) === size && !item.disabled);
		const availableSize = availableSizes?.find((item) => !item.disabled);

		if(!isAvailableSize && availableSize){
			setSize(Number(availableSize.value) as PizzaSize);
		}
	}, [type]	);

	return ({
		size,
		type,
		setSize,
		setType,
		addIngredient,
		selectedIngredients,
		availableSizes,
	});
};