import { Categories, Container, Filters, SortPopup, Title, TopBar } from '@/components/shared'
import { ProductCard } from '@/components/shared/product-card'
import { ProductsGroupList } from '@/components/shared/products-group-list'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text="Все пиццы" size='lg' className='font-extrabold' />
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
              <ProductsGroupList title='Пиццы' items={[
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
              ]} categoryId={1} />

              <ProductsGroupList title='Комбо' items={[
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
              ]} categoryId={2} />

              {/* <ProductsGroupList title="Пиццы" items={[1,2,3,4,5]} />
<ProductsGroupList title="Пиццы" items={[1,2,3,4,5]} /> */}
            </div>
          </div>
        </div>



      </Container>

    </>

  )
}
