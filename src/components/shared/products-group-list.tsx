"use client";

import React, { useEffect } from "react";
import { Product } from "@prisma/client";
import { useIntersection } from "react-use";

import { ProductCard } from "@/components/shared/product-card";
import { Title } from "@/components/shared/title";
import { Ingredient, ProductItem } from "@/generated/prisma";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Item extends Product {
	ingredients?: Ingredient[]
	items?: ProductItem[]
}

type Props = {
	className?: string
	title: string
	items: Item[]
	listClassName?: string
	categoryId: string
}

export const ProductsGroupList: React.FC<Props> = ({ className, title, items, listClassName, categoryId }) => {
	const intersectionRef = React.useRef<HTMLDivElement>(null!);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});

	const setActiveCategoryId = useCategoryStore(state => state.setActiveId);

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [categoryId, intersection?.isIntersecting, title, setActiveCategoryId]);

	return (
		<div
			ref={intersectionRef}
			className={cn("", className)}
			id={title}
		>
			<Title
				className="font-extrabold mb-5"
				size="lg"
				text={title}
			/>
			<div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
				{
					items.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							imageUrl={product.imageUrl}
							name={product.name}
							price={product.items?.at(0)?.price || 0}
						/>
					))
				}

			</div>
		</div>
	);
};
