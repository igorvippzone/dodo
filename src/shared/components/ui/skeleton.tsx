import { cn } from "@/shared/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn("bg-amber-700 animate-pulse rounded-md", className)}
			data-slot="skeleton"
			{...props}
		/>
	);
}

export { Skeleton };
