import React from "react";

import { Category } from "@/generated/prisma";
import { Categories, Container, SortPopup } from "@/shared/components/shared";
import { cn } from "@/shared/lib/utils";

type Props = {
	className?: string
	categories: Category[]
}

export const TopBar: React.FC<Props> = ({ className, categories }) => (
	<div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
		<Container className="flex items-center justify-between">
			<Categories items={categories} />

			<SortPopup />
		</Container>
	</div>
);