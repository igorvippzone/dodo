'use client'

import { Input } from '@/components/ui'
import { Title } from './title'
import { cn } from '@/lib/utils'
import React from 'react'
import { RangeSlider } from '@/components/shared/range-slider'
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'
import { useQueryFilters, useFilters, useIngredients } from '@/hooks'

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
			<Title text='Фильтрация' className='mb-5 font-bold' />
			<CheckboxFiltersGroup
				name='pizzaType'
				className='mb-5'
				title={'Тип теста'}
				items={[
					{ value: '1', label: "Тонкое" },
					{ value: '2', label: "Традиционное" },
				]}
				onClickCheckbox={filters.setPizzaTypes}
				selectedValues={filters.pizzaTypes}
			/>

			<CheckboxFiltersGroup
				name='size'
				className='mb-5'
				title={'Размеры'}
				items={[
					{ value: '20', label: "20 см" },
					{ value: '30', label: "30 см" },
					{ value: '40', label: "40 см" },
				]}
				onClickCheckbox={filters.setSizes}
				selectedValues={filters.sizes}
			/>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						min={min}
						max={max}
						value={String(filters.priceFrom || min)}
						onChange={e => filters.setPrices('priceFrom', Number(e.target.value))}
					/>
					<Input
						type='number'
						min={min}
						max={max}
						value={String(filters.priceTo || max)}
						onChange={e => filters.setPrices('priceTo', Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={min}
					max={max}
					step={10}
					value={[filters.priceFrom || min, filters.priceTo || max]}
					onValueChange={updatePrices}
				/>
			</div>

			<CheckboxFiltersGroup
				className='mt-5'
				title={'Ингредиенты'}
				limit={6}
				items={items}
				loading={loading}
				onClickCheckbox={filters.setIngredients}
				selectedValues={filters.selectedIngredients}
				name='ingredient'
			/>
		</div>
	)
}