import React from 'react'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/shared'
import { SearchInput } from '@/components/shared/search-input'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				{/* левая часть */}
				<Link href="/">
					<div className='flex items-center gap-4'>
						<Image
							alt="Logo"
							height={35}
							src='/logo.png'
							width={35}
						/>
						<div>
							<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
							<p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
						</div>
					</div>
				</Link>
				{/* центральная часть */}
				<div className='mx-10 flex-1'>
					<SearchInput />
				</div>
				{/* правая часть */}
				<div className='flex items-center gap-3'>
					<Button className='flex items-center gap-1' variant="outline">
						<User size={16} />
						Войти
					</Button>
					<div>
						<Button className='group relative'>
							<b>520 P</b>
							<span className='h-full w-[1px] bg-white/30 mx-3' />
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingCart
									className='relative'
									size={16}
									strokeWidth={2}
								/>
								<b>3</b>
							</div>
							<ArrowRight className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' size={20} />
						</Button>
					</div>
				</div>
			</Container>
		</div>
	)
}
