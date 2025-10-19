import { Checkbox } from '../ui'
import React from 'react'

export interface FilterCheckboxProps {
	text: string
	value: string
	endAdornment?: React.ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
}
export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked
}) => {
	const id = `checkbox-${String(value)}`
	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className='rounded-[8px] w-6 h-6'
				id={id}
			/>
			<label htmlFor={id} className='loading-none cursor-pointer flex-1'>
				{text}
			</label>
			{endAdornment}
		</div>
	)
}