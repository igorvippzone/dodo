import { Filters } from './use-filters'
import { useRouter } from 'next/navigation'
import qs from 'qs'
import { useEffect } from 'react'

export const useQueryFilters = (filters: Filters) => {
	const router = useRouter()

	useEffect(() => {
		const params = {
			priceFrom: filters.priceFrom,
			priceTo: filters.priceTo,
			pizzaTypes: Array.from(filters.pizzaTypes),
			selectedIngredients: Array.from(filters.selectedIngredients),
			sizes: Array.from(filters.sizes),
		}
		const query = qs.stringify(params, {
			arrayFormat: 'comma'
		})
		router.push(`?${query}`, { scroll: false })
		console.log()

	}, [router, filters])
}