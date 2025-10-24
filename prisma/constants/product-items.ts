import { Prisma } from '@/generated/prisma'

import { products } from './products'

const randomNumber = (min: number = 190, max: number = 600) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}
const generateProductItem = ({
	productId,
	pizzaType,
	size,
}: {
	productId: string,
	pizzaType?: 1 | 2,
	size?: 20 | 30 | 40,
}) => ({
	productId,
	price: randomNumber(),
	pizzaType,
	size
} as Prisma.ProductItemUncheckedCreateInput)

export const productItems = products.map(({ id }) => {
	if (id === "1") {
		return [
			generateProductItem({ productId: id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: id, pizzaType: 2, size: 40 }),
		]
	} else if (id === "2") {
		return [
			generateProductItem({ productId: id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: id, pizzaType: 1, size: 30 }),
			generateProductItem({ productId: id, pizzaType: 1, size: 40 }),
			generateProductItem({ productId: id, pizzaType: 2, size: 20 }),
			generateProductItem({ productId: id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: id, pizzaType: 2, size: 40 }),
		]
	} else if (id === "3") {
		return [
			generateProductItem({ productId: id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: id, pizzaType: 2, size: 40 }),
		]
	} else {
		return [generateProductItem({ productId: id })]
	}

})
	.flatMap(arr => arr)
	.map((obj, index) => ({ ...obj, id: (index + 1) + '' }))
