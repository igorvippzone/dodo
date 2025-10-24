import React from 'react'

import { Checkbox } from '../ui'

export interface FilterCheckboxProps {
	label: string
	value: string
	endAdornment?: React.ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
	name?: string
}
export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
	label,
	value,
	endAdornment,
	onCheckedChange,
	checked,
	name
}) => {
	const id = `checkbox-${String(name)}-${String(value)}`

	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				checked={checked}
				className='rounded-[8px] w-6 h-6'
				id={id}
				value={value}
				onCheckedChange={onCheckedChange}
			/>
			<label className='loading-none cursor-pointer flex-1' htmlFor={id}>
				{label}
			</label>
			{endAdornment}
		</div>
	)
}