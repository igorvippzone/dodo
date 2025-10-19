"use client"
import { Title } from '@/components/shared/title'
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox'
import { cn } from '@/lib/utils'
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import { Input } from '@/components/ui'

type Item = FilterCheckboxProps

type Props = {
	className?: string
	title: string
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	className,
	title,
	items,
	defaultItems,
	onChange,
	defaultValue,
	limit = 5,
	searchInputPlaceholder = "Поиск...",
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	const list = showAll ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems.slice(0, limit)

	return (
		<div className={cn('mx-auto max-w-[1200px]', className)}>
			<Title text={title} className='mb-5 font-bold' />

			{showAll && <div className='mb-5'>
				<Input
					onChange={onChangeSearchInput}
					value={searchValue}
					placeholder={searchInputPlaceholder}
					className='bg-gray-50 border-none' />
			</div>}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{list.map((item) => (
					<FilterCheckbox
						onCheckedChange={(ids) => console.log(ids)}
						checked={false}
						key={String(item.value)}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
					/>
				))}
			</div>

			{
				items.length > limit && (
					<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
						<button
							className='text-primary mt-3'
							onClick={() => setShowAll(prev => !prev)}
						>
							{showAll ? 'Скрыть' : '+ Показать все'}
						</button>
					</div>
				)}
		</div>
	)
}
