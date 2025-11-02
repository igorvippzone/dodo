"use client";

import React from "react";
import {	useRouter } from "next/navigation";

import {	Dialog,  DialogContent } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import { ProductWithRelations } from "@/shared/types";

import { ChooseProductForm } from "../choose-product-form";

interface Props {
	className?: string
	product: ProductWithRelations
}

export const ChooseProductModal: React.FC<Props> = ({
	className, product, 
}) => {
	const router = useRouter();
	const isPizzaForm = Boolean(product.items[0].pizzaType);
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			
			<DialogContent className={cn(
				"min-h-[550px] w-full max-w-[1060px] overflow-hidden bg-white p-0", className,
			)}
			>
				{/* <DialogTitle>{product.name}</DialogTitle> */}

				<ChooseProductForm
					imageUrl={product.imageUrl}
					ingredients={product.ingredients}
					isPizzaForm={isPizzaForm}
					items={product.items}
					name={product.name}
				/>
			</DialogContent>
		</Dialog>
	);
};
