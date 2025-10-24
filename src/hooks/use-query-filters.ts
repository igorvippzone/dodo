import qs from 'qs'
import { useDebounce } from 'react-use'
import { useRouter } from 'next/navigation'

import { Filters } from './use-filters'

export const useQueryFilters = (filters: Filters) => {
	const router = useRouter()

	useDebounce(() => {
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

	}, 500, [filters.pizzaTypes, filters.priceFrom, filters.priceTo, filters.selectedIngredients, filters.sizes, router])
}