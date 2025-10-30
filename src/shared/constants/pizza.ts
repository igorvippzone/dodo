export const mapPizzaSize = {
	20: "Маленькая",
	30: "Средняя",
	40: "Большая",
} as const;

export const mapPizzaType = {
	1: "традиционное",
	2: "тонкое",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([name, value]) => ({
	name,
	value,
}));