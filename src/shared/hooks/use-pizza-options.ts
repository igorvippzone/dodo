import { useEffect, useMemo, useState } from "react";
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

	const availableSizes = useMemo(() => getAvailablePizzaSizes(type, items), [items, type]); 
	const isAvailableSize = useMemo(() => availableSizes?.find((item) => Number(item.value) === size && !item.disabled), [availableSizes, size]);
	const availableSize = useMemo(() => availableSizes?.find((item) => !item.disabled), [availableSizes]);

	useEffect(() => {
	
		if (!isAvailableSize && availableSize){
			setSize(Number(availableSize.value) as PizzaSize);
		}
	}, [availableSize, isAvailableSize, type]);

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