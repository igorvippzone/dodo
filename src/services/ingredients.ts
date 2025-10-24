import { Ingredient } from '@/generated/prisma'
import { axiosInstance } from '@/services/axios-instance'

import { ApiRoutes } from './constants'

export const getAll = async (): Promise<Ingredient[]> => {
	const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)

	return data
}