import { Suspense } from "react";

import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import prisma from "@/lib/prisma";

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					items: true,
					ingredients: true,
				},
			},
		},
	});

	const filterCategories = categories.filter(category => category.products.length > 0);

	return (
		<>
			<Suspense fallback={<div>Loading filters...</div>}>
				<Container className="mt-10">
					<Title
						className="font-extrabold"
						size="lg"
						text="Все пиццы"
					/>
				</Container>
				<TopBar categories={filterCategories} />
				<Container className="mt-10 pb-14">
					<div className="flex gap-[80px]">
						<div className="w-[250px]">
							<Filters />
						</div>
						<div className="flex-1">
							<div className="flex flex-col gap-16">
								список товаров
								{filterCategories.map((category) => (
									<ProductsGroupList
										key={category.id}
										categoryId={category.id}
										items={category.products}
										title={category.name}
									/>
								),
								)}
							</div>
						</div>
					</div>

				</Container>
			</Suspense>
		</>

	);
}
