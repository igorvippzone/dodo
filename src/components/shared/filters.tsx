'use client'

import React, { Suspense } from 'react'

import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'
import { RangeSlider } from '@/components/shared/range-slider'
import { Input } from '@/components/ui'
import { useFilters, useIngredients, useQueryFilters } from '@/hooks'
import { cn } from '@/lib/utils'

import { Title } from './title'

type Props = {
	className?: string
}
const min = 0
const max = 1000

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading } = useIngredients()
	const filters = useFilters()
	useQueryFilters(filters)

	const updatePrices = ([priceFrom, priceTo]: number[]) => {
		filters.setPrices('priceFrom', priceFrom)
		filters.setPrices('priceTo', priceTo)
	}

	const items = ingredients.map(({ id, name }) => ({ value: id, label: name }))

	return (
		<div className={cn('', className)}>
			<Suspense fallback={<div>Loading filters...</div>}>

				<Title className='mb-5 font-bold' text='Фильтрация' />
				<CheckboxFiltersGroup

					className='mb-5'
					name='pizzaType'
					selectedValues={filters.pizzaTypes}
					title={'Тип теста'}
					items={[
						{ value: '1', label: "Тонкое" },
						{ value: '2', label: "Традиционное" },
					]}
					onClickCheckbox={filters.setPizzaTypes}
				/>
				<CheckboxFiltersGroup
					className='mb-5'
					name='size'
					selectedValues={filters.sizes}
					title={'Размеры'}
					items={[
						{ value: '20', label: "20 см" },
						{ value: '30', label: "30 см" },
						{ value: '40', label: "40 см" },
					]}
					onClickCheckbox={filters.setSizes}
				/>
				<div
					key='1'
					className='mt-5 border-y border-y-neutral-100 py-6 pb-7'
					id='1'
				>
					<p className='font-bold mb-3'>Цена от и до</p>
					<div className='flex gap-3 mb-5'>
						<Input
							max={max}
							min={min}
							type='number'
							value={String(filters.priceFrom || min)}
							onChange={e => filters.setPrices('priceFrom', Number(e.target.value))}
						/>
						<Input
							max={max}
							min={min}
							type='number'
							value={String(filters.priceTo || max)}
							onChange={e => filters.setPrices('priceTo', Number(e.target.value))}
						/>
					</div>
					<RangeSlider
						max={max}
						min={min}
						step={10}
						value={[filters.priceFrom || min, filters.priceTo || max]}
						onValueChange={updatePrices}
					/>
				</div>
				<CheckboxFiltersGroup
					className='mt-5'
					items={items}
					limit={6}
					loading={loading}
					name='ingredient'
					selectedValues={filters.selectedIngredients}
					title={'Ингредиенты'}
					onClickCheckbox={filters.setIngredients}
				/>
			</Suspense>
		</div>
	)
}