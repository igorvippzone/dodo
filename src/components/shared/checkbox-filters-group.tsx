"use client"

import { Title } from '@/components/shared/title'
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox'
import { cn } from '@/lib/utils'
import React, { ChangeEvent, useState } from 'react'
import { Input, Skeleton } from '@/components/ui'

type Item = FilterCheckboxProps

type Props = {
	className?: string
	title: string
	items: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	loading?: boolean
	selectedValues?: Set<string>
	name?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	className,
	title,
	items,
	limit = 5,
	searchInputPlaceholder = "Поиск...",
	loading = false,
	onClickCheckbox,
	selectedValues,
	name
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	if (loading) {
		return <div className={cn('mx-auto', className)}>
			<Title text={title} className='mb-5 font-bold' />
			<div className='flex flex-col gap-4 pr-2 mb-3 '>
				{...new Array(limit).fill(0).map((_, index) => (
					<div key={index} className="flex items-center gap-2">
						<Skeleton className="h-6 w-6 rounded-[8px] shrink-0" />
						<Skeleton className="h-4 w-full rounded-[8px]" />
					</div>
				))}
			</div>
			<Skeleton className="h-6 w-28 rounded-[8px]" />
		</div>
	}

	const list = showAll ? items.filter(item => item.label.toLowerCase().includes(searchValue.toLowerCase())) : items.slice(0, limit)

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
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						checked={selectedValues?.has(item.value)}
						key={String(item.value)}
						label={item.label}
						value={item.value}
						endAdornment={item.endAdornment}
						name={name}
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
