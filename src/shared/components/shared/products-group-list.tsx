"use client";

import React, { useEffect } from "react";
import { Product } from "@prisma/client";
import { useIntersection } from "react-use";

import { cn } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/category";

import { ProductCard } from "./product-card";
import { Title } from "./title";

type Props = {
	className?: string
	title: string
	items: Product[]
	listClassName?: string
	categoryId: string
}

export const ProductsGroupList: React.FC<Props> = ({ className, title, items, listClassName, categoryId }) => {
	const intersectionRef = React.useRef<HTMLDivElement>(null!);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId);

	const isIntersecting = intersection?.isIntersecting;

	useEffect(() => {
		console.log({items});
		if (isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [categoryId, isIntersecting, title, setActiveCategoryId]);

	return (
		<div
			className={cn("", className)}
			id={title}
		>
			<Title
				className="font-extrabold mb-5"
				size="lg"
				text={title}
			/>

			<div ref={intersectionRef} className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
				{
					items.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							imageUrl={product.imageUrl}
							name={product.name}
							price={product.items?.at(0)?.price || 0}
							skeleton={product.id === "1"}
						/>
					))
				}
			</div>
		</div>
	);
};
