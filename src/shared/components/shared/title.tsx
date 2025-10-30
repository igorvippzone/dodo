import React from "react";

import { cn } from "@/shared/lib/utils";
import { MakeOptionalWhen } from "@/shared/types";

import { Skeleton } from "../ui";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
type Props1 = MakeOptionalWhen<
{	
	size?: TitleSize
	className?: string
	text: string
	skeleton?: boolean
},
	"skeleton",
	"text"
>

type Props ={	
	className?: string
	skeleton?: boolean
	text: string
	size?: TitleSize
}

export const Title: React.FC<Props> = ({ text, size = "sm", skeleton = false, className }: Props) => {
	const mapTagBySize = {
		xs: "h5",
		sm: "h4",
		md: "h3",
		lg: "h2",
		xl: "h1",
		"2xl": "h1",
	} as const;

	const mapClassNameBySize = {
		xs: "16px",
		sm: "22px",
		md: "26px",
		lg: "32px",
		xl: "40px",
		"2xl": "48px",
	} as const;

	if(skeleton){
		return <Skeleton className={cn(`h-[${mapClassNameBySize[size]}]`, "w-full", className)} />;
	}

	return React.createElement(
		mapTagBySize[size],
		{ className: cn(`text-[${mapClassNameBySize[size]}]`, className) },
		text,
	);
};