"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Dialog,  DialogContent, DialogTitle } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import { ProductWithRelations } from "@/shared/types";

import { ChooseProductForm } from "../choose-product-form";

type Props = {
	className?: string
	product: ProductWithRelations
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
	const router = useRouter();
	const isPizzaForm = Boolean(product.items[0].pizzaType);
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			
			<DialogContent className={cn("p-0 max-w-[1060px] min-h-[500px] bg-white w-full overflow-hidden", className)}>
				<DialogTitle>{product.name}</DialogTitle>

				<ChooseProductForm
					imageUrl={product.imageUrl}
					ingredients={[]}
					isPizzaForm={isPizzaForm}
					name={product.name}
				/>
			</DialogContent>
		</Dialog>
	);
};
