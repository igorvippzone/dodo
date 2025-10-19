import { Input } from '@/components/ui'
import { FilterCheckbox } from './filter-checkbox'
import { Title } from './title'
import { cn } from '@/lib/utils'
import React from 'react'
import { RangeSlider } from '@/components/shared/range-slider'
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'

type Props = {
	className?: string
}
const test = [
	{ text: "Сырный соус1", value: '1' },
	{ text: "Сырный соус2", value: '2' },
	{ text: "Сырный соус22", value: '3' },
	{ text: "Сырный соус11", value: '4' },
	{ text: "Сырный соус3", value: '5' },
	{ text: "Сырный соус4", value: '6' },
	{ text: "Сырный соус5", value: '7' },
	{ text: "Сырный соус6", value: '8' },
	{ text: "Сырный соус71", value: '9' },
	{ text: "Сырный соус82", value: '99' },
	{ text: "Сырный соус95", value: '599' },
	{ text: "Сырный соус0", value: '699' }
]
export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<Title text='Фильтрация' className='mb-5 font-bold' />
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='11' />
				<FilterCheckbox text='Новинки' value='12' />
			</div>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до</p>
				<div className='flex gap-3 mb-5'>
					<Input type='number' placeholder='0' min={0} max={30000} defaultValue={0} />
					<Input type='number' placeholder='2000' min={100} max={2000} />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			<CheckboxFiltersGroup className='mt-5' title={'Ингредиенты'} limit={6} items={test}
				defaultItems={test}
			/>
		</div>
	)
}