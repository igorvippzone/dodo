'use client'

import { ProductCard } from '@/components/shared/product-card'
import { Title } from '@/components/shared/title'
import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React, { useEffect } from 'react'
import { useIntersection } from 'react-use'

type Props = {
	className?: string
	title: string
	items: any[]
	listClassName?: string
	categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({ className, title, items, listClassName, categoryId }) => {
	const intersectionRef = React.useRef<HTMLDivElement>(null!)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4
	})

	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, title, setActiveCategoryId])

	return (
		<div className={cn('', className)} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />
			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{
					items.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							name={product.name}
							price={product.items[0].price}
							imageUrl={product.imageUrl}
						/>
					))
				}

			</div>
		</div>
	)
}
