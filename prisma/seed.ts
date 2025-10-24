import chalk from 'chalk'
import cliProgress from "cli-progress"

import { PrismaClient } from "@/generated/prisma"

import { carts, categories, ingredients, productItems, products, users } from './constants'

const multibar = new cliProgress.MultiBar({
	format: '{step} | {bar} | {percentage}%',
	barsize: 30,

	formatBar: (progress, options) => {
		const barsize = options.barsize || 25
		const completeChars = Math.floor(progress * barsize)
		const incompleteChars = barsize - completeChars

		const completeBar = chalk.green('█').repeat(completeChars)
		const incompleteBar = chalk.gray('░').repeat(incompleteChars)

		return completeBar + incompleteBar
	},

	hideCursor: true
}, cliProgress.Presets.shades_classic)

const prisma = new PrismaClient()

const cleanDatabase = async () => {
	await prisma.$transaction([
		prisma.cartItem.deleteMany(),
		prisma.cart.deleteMany(),

		prisma.productItem.deleteMany(),
		prisma.ingredient.deleteMany(),
		prisma.user.deleteMany(),
		prisma.product.deleteMany(),
		prisma.category.deleteMany(),
	])
}

const creatingProducts = async () => {
	const productCreations = products.map(product =>
		prisma.product.create({
			data: product
		})
	)

	await prisma.$transaction(productCreations)
}

const createUsers = async () => {
	await prisma.user.createMany({
		data: users
	})
}

const createCategories = async () => {
	await prisma.category.createMany({
		data: categories
	})
}

const createIngredients = async () => {
	await prisma.ingredient.createMany({
		data: ingredients
	})
}

const createProductItems = async () => {
	await prisma.productItem.createMany({
		data: productItems
	})
}

const createCarts = async () => {
	const cartsCreations = carts.map(cart =>
		prisma.cart.create({
			data: cart
		})
	)

	await prisma.$transaction(cartsCreations)

	await prisma.cartItem.create({
		data: {
			productItemId: '1',
			cartId: "1",
			quantity: 2,
			ingredients: {
				connect: [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
			}
		}
	})
}

export async function main() {
	try {
		const length = 30
		const character = " "
		const steps = [
			{ name: `Cleaning database`.padStart(length, character), task: cleanDatabase },
			{ name: 'Creating users'.padStart(length, character), task: createUsers },
			{ name: 'Creating categories'.padStart(length, character), task: createCategories },
			{ name: 'Creating ingredients'.padStart(length, character), task: createIngredients },
			{ name: 'Creating products'.padStart(length, character), task: creatingProducts },
			{ name: 'Creating product-items'.padStart(length, character), task: createProductItems },
			{ name: 'Creating carts'.padStart(length, character), task: createCarts },
		]

		const bars = steps.map(step =>
			multibar.create(100, 0, { step: step.name })
		)

		for (let i = 0; i < steps.length; i++) {
			bars[i].update(30)
			await steps[i].task()
			bars[i].update(100)
			await new Promise(resolve => setTimeout(resolve, 300))
		}
		multibar.stop()
		console.log('✅ All seed tasks completed!')

	} catch (error) {
		console.error(error)
	}
}

main()