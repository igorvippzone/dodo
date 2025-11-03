import React from "react";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Title } from "@/shared/components/shared/title";
import { Button, Skeleton } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";

type Props = {
	  className?: string;
    skeleton?: boolean;
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

export const ProductCard: React.FC<Props> = ({ className, id, name, price, imageUrl, skeleton = false }: Props) => {
	if (skeleton){
		return (
			<div  className={cn("", className)}>
				<Skeleton className="h-[260px] w-full p-6"	/>

				<Title
					className="mb-1 mt-3"
					size="sm"
					skeleton={true}
					text=""
				/>

				<Skeleton className="h-3.5"	/>

				<div className="flex justify-between items-center mt-4 h-10">
					<Skeleton className="h-full w-full"	/>

					<Skeleton className="h-full w-full"	/>
				</div>
			</div>
		);
	} else {
		return (
			<div className={cn("", className)}>
				<Link href={`/product/${id}`}>
					<div className="flex justify-center p-6 bg-secondary rounded-b-lg h-[260px]">
						<Image
							alt={name!}
							className="object-contain"
							height={215}
							src={imageUrl!}
							width={215}
						/>
					</div>

					<Title
						className="mb-1 mt-3 font-bold"
						size="sm"
						text={name}
					/>

					<p className="text-sm text-gray-400">
						Наш текст
					</p>

					<div className="flex justify-between items-center mt-4">
						<span className="text-[20px]">
							от <b>{price} руб</b>
						</span>

						<Button className="text-base font-bold" variant="secondary">
							<Plus className="mr-1" size={20} />
							Добавить
						</Button>
					</div>
				</Link>
			</div>
		);
	}
	
};
