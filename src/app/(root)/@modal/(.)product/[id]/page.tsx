import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { ChooseProductModal } from "@/shared/components/shared";
import prisma from "@/shared/lib/prisma";

export default async function ProductModalPage({ params }: {params:  Promise<{id: string}>}) {
	headers();

	const { id } = await params;

	const product = await prisma.product.findFirst({
		where: {
			id,
		},
		include: {
			ingredients: true,
			items: {
				orderBy: {
					createdAt: "desc",
				},
				include: {
					product: {
						include: {
							items: true,
						},
					},
				},
			},
		},
	}); 

	if (!product){
		return notFound();
	}
	return (
		<ChooseProductModal product={product} />
	);
}
