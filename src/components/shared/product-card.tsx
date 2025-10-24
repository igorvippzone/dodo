import React from 'react'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Title } from '@/components/shared/title'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

type Props = {
	className?: string
	id: number
	name: string
	price: number
	imageUrl: string
}

export const ProductCard: React.FC<Props> = ({ className, id, name, price }) => {
	return (
		<div className={cn('', className)}>
			<Link href={`/product/${id}`}>
				<div className='flex justify-center p-6 bg-secondary rounded-b-lg h-[260px]'>
					<Image
						alt={name}
						height={215}
						src={"./globe.svg"}
						width={215}
					/>
				</div>
				<Title
					className='mb-1 mt-3 font-bold'
					size='sm'
					text={name}
				/>
				<p className='text-sm text-gray-400'>
					Наш текст
				</p>
				<div className='flex justify-between items-center mt-4'>
					<span className='rext-[20px]'>
						от <b>{price} руб</b>
					</span>
					<Button className='text-base font-bold' variant="secondary">
						<Plus className='mr-1' size={20} />
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	)
}
