import React from "react";

import { Categories, Container, SortPopup } from "@/components/shared";
import { Category } from "@/generated/prisma";
import { cn } from "@/lib/utils";

type Props = {
	className?: string
	categories: Category[]
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
	return (
		<div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
			<Container className="flex items-center justify-between">
				<Categories items={categories} />

				<SortPopup />
			</Container>
		</div>
	);
};