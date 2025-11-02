// "use client";

import { notFound } from "next/navigation";

import { Container, GroupVariants, Title } from "@/shared/components/shared";
import { ProductImage } from "@/shared/components/shared/product-image";
import prisma from "@/shared/lib/prisma";

// export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
export default async function ProductPage() {

	// const { id } = useParams<{ id: string }>()
	const product = await prisma.product.findFirst({
		where: {
			id: "1",
		},
	});

	if(!product) {
		return notFound();
	}

	return (
		<Container className="flex flex-col my-10">
			<div className="flex flex-1">
				<ProductImage
					className=""
					imageUrl={product.imageUrl}
					name={product.name}
					size={20}
				/>

				<div className="w-[490px] bg-[#faf2f2] p-7">
					<Title
						className="font-extrabold mb-1"
						size="md"
						text={product.name}
					/>

					<p className="text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore sequi mollitia soluta sint fuga amet consequuntur itaque alias, nam sed deserunt, provident incidunt aperiam ea at voluptates quis numquam?
					</p>

					<GroupVariants items={[{value: "1", disabled: true, name:"name 1"}, {value: "2", name:"name 2"},{value: "3", name:"name 3"}]} value="1"/>
				</div>
			</div>

		</Container>

	);
}
