import { Title } from '@/components/shared/title'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
	className?: string
	id: number
	name: string
	price: number
	imageUrl: string
}

export const ProductCard: React.FC<Props> = ({ className, imageUrl, id, name, price }) => {
	return (
		<div className={cn('', className)}>
			<Link href={`/product/${id}`}>
				<div className='flex justify-center p-6 bg-secondary rounded-b-lg h-[260px]'>
					<Image src={"./globe.svg"} alt={name} width={215} height={215} />
				</div>

				<Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
				<p className='text-sm text-gray-400'>
					Наш текст
				</p>

				<div className='flex justify-between items-center mt-4'>
					<span className='rext-[20px]'>
						от <b>{price} руб</b>
					</span>
					<Button variant="secondary" className='text-base font-bold'>
						<Plus size={20} className='mr-1' />
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	)
}
