import { Suspense } from 'react'

import { Container, Filters, Title, TopBar } from '@/components/shared'
import { ProductsGroupList } from '@/components/shared/products-group-list'

export default function Home() {
	return (
		<>
			<Suspense fallback={<div>Loading filters...</div>}>
				<Container className='mt-10'>
					<Title
						className='font-extrabold'
						size='lg'
						text="Все пиццы"
					/>
				</Container>
				<TopBar />
				<Container className='mt-10 pb-14'>
					<div className='flex gap-[80px]'>
						<div className='w-[250px]'>
							<Filters />
						</div>
						<div className='flex-1'>
							<div className='flex flex-col gap-16'>
								список товаров
								<ProductsGroupList
									categoryId={1}
									title='Пиццы'
									items={[
										{
											id: 11,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 12,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 13,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 14,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 15,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 16,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 17,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										},
									]}
								/>
								<ProductsGroupList
									categoryId={2}
									title='Комбо'
									items={[
										{
											id: 21,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 31,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 41,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 51,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 61,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 71,
											name: 'Пицца',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										}, {
											id: 771,
											name: 'хот дог',
											imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg',
											price: 555,
											items: [{ price: 555 }]
										},
									]}
								/>
								{/* <ProductsGroupList title="Пиццы" items={[1,2,3,4,5]} />
<ProductsGroupList title="Пиццы" items={[1,2,3,4,5]} /> */}
							</div>
						</div>
					</div>

				</Container>
			</Suspense>
		</>

	)
}
