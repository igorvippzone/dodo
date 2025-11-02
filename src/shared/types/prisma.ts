import { Ingredient, Product, ProductItem } from "@/generated/prisma";

export type ProductWithRelations= Product & {items: ProductItem[]; ingredients: Ingredient[]}