"use client";

import React, {	useEffect } from "react";
import { useIntersection } from "react-use";

import { Product } from "@/generated/prisma";
import { cn } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/category";

import { ProductCard } from "./product-card";
import { Title } from "./title";

interface Props {
	categoryId: string
	className?: string
	items: Product[]
	listClassName?: string
	title: string
}

export const ProductsGroupList: React.FC<Props> = ({
	categoryId, className, items, listClassName, title, 
}) => {
	const intersectionRef = React.useRef<HTMLDivElement>(null!);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

	const isIntersecting = intersection?.isIntersecting;

	useEffect(() => {
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
				className="mb-5 font-extrabold"
				size="lg"
				text={title}
			/>

			<div
				ref={intersectionRef}
				className={cn("grid grid-cols-3 gap-[50px]", listClassName)}
			>
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
