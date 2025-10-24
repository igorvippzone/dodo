import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useSet } from 'react-use'

interface PriceRangeProps {
	priceFrom?: number
	priceTo?: number
}

export interface QueryFilters extends PriceRangeProps {
	pizzaTypes: string
	sizes: string
	selectedIngredients: string
}
export interface Filters extends PriceRangeProps {
	pizzaTypes: Set<string>
	sizes: Set<string>
	selectedIngredients: Set<string>
}

export interface ReturnProps extends Filters {
	setPrices: (name: keyof PriceRangeProps, value: number) => void
	setPizzaTypes: (value: string) => void,
	setSizes: (value: string) => void,
	setIngredients: (value: string) => void,
}
export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

	const [ingredients, { toggle: toggleIngredients }] = useSet(new Set<string>(searchParams.get('selectedIngredients')?.split(',') || []))

	const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.get('sizes')?.split(',') || []))

	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes')?.split(',') || []))

	const [{ priceFrom, priceTo }, setPrices] = useState<PriceRangeProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined
	})

	const updatePrice = (name: keyof PriceRangeProps, value: number) => {
		setPrices(prev => ({ ...prev, [name]: value }))
	}

	return {
		sizes,
		pizzaTypes,
		priceFrom,
		priceTo,
		setPrices: updatePrice,
		selectedIngredients: ingredients,
		setPizzaTypes: togglePizzaTypes,
		setSizes: toggleSizes,
		setIngredients: toggleIngredients,
	}
}