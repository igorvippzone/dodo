import { Ingredient } from '@/generated/prisma'
import { Api } from '@/services/api-client'
import { useEffect, useState } from 'react'

interface ReturnProps {
	ingredients: Ingredient[]
	loading: boolean
}

export const useIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true)
				const data = await Api.ingredients.getAll()
				setIngredients(data)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		fetchIngredients()
	}, [])

	return { ingredients, loading }
}