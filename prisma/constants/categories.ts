import { Prisma } from '@/generated/prisma'

export const categories: Prisma.CategoryCreateManyInput[] = [
	{ name: 'Пиццы', id: '1' },
	{ name: 'Завтрак', id: '2' },
	{ name: 'Закуски', id: '3' },
	{ name: 'Коктейли', id: '4' },
	{ name: 'Напитки', id: '5' },
]