'use client'

import { useClickAway, useDebounce } from 'react-use'
import { Input } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import { FC, useRef, useState } from 'react'
import Link from 'next/link'
import { Api } from '@/services/api-client'
import { Product } from '@prisma/client'

type Props = {
	className?: string
}

export const SearchInput: FC<Props> = ({ className }) => {
	const [focused, setFocused] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const [products, setProducts] = useState<Product[]>([])
	const ref = useRef(null)

	useClickAway(ref, () => {
		setFocused(false)
	})

	useDebounce(
		async () => {
			try {
				const response = await Api.products.search(searchQuery)
				setProducts(response)
			} catch (error) {
				console.log(error)
			}
		},
		300
		, [searchQuery])

	const onClickItem = () => {
		setFocused(false)
		setSearchQuery('')
		setProducts([])
	}
	return (
		<>
			{focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />}

			<div ref={ref} className={cn('flex rounded-2xl flex-1 items-center justify-between relative h-11 z-30', className)}>
				<Search size={20} className="absolute top-1/2 translate-y-[-50%] left-3 text-gray-400" />
				<Input
					className='rounded-2xl outline-none focus-within:outline-none w-full bg-gray-100 pl-11'
					placeholder='Найти пиццу...'
					type='text'
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>

				{products.length > 0 && <div className={cn(
					'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
					focused && 'visible opacity-100 top-12'
				)}>
					{products.map(product => (
						<Link
							onClick={onClickItem}
							key={product.id}
							className='flex items-center gap-3 px-3 py-2 hover:bg-primary/10' href={`/product/${product.id}`}>
							<img
								className='rounded-sm h-8 w-8'
								src={product.imageUrl} width={32} height={32} alt={product.name} />
							<span >
								{product.name}
							</span>
						</Link>
					))}
				</div>}
			</div>
		</>
	)
}
