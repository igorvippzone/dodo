'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React from 'react'

type Props = {
	className?: string
}
const categories = [
	{ id: 1, name: "Пиццы", slug: "pizza" },
	{ id: 2, name: "Комбо", slug: "combo" },
	{ id: 3, name: "Закуски", slug: "snacks" },
	{ id: 4, name: "Коктейли", slug: "cocktails" },
	{ id: 5, name: "Кофе", slug: "coffee" },
	{ id: 6, name: "Напитки", slug: "drinks" },
	{ id: 7, name: "Десерты", slug: "desserts" }
]

// const activeIndex = 0
export const Categories: React.FC<Props> = ({ className }) => {
	const categoryActiveId = useCategoryStore(state => state.activeId)
	return (
		<div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
			{categories.map(({ name, id }) => (
				<a
					key={id}
					href={`/#${name}`}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
					)}>
					<button>{name}</button>
				</a>
			))}
		</div>
	)
}