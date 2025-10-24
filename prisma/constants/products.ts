import { ingredients } from './ingredients'

export const products = [
	{
		name: 'Пепперони фреш',
		categoryId: '1',
		ingredients: {
			connect: ingredients.slice(0, 5),
		},
	},
	{
		name: 'Сырная',
		categoryId: '1',
		ingredients: {
			connect: ingredients.slice(5, 10),
		},
	},
	{
		name: 'Чоризо фреш',
		categoryId: '1',
		ingredients: {
			connect: ingredients.slice(10, 11),
		},
	},
	{
		name: 'Омлет с ветчиной и грибами',
		categoryId: '2',
	},
	{
		name: 'Омлет с пепперони',
		categoryId: '2',
	},
	{
		name: 'Кофе Латте',
		categoryId: '2',
	},
	{
		name: 'Дэнвич ветчина и сыр',
		categoryId: '3',
	},
	{
		name: 'Куриные наггетсы',
		categoryId: "3",
	},
	{
		name: 'Картофель из печи с соусом 🌱',
		categoryId: '3',
	},
	{
		name: 'Додстер',
		categoryId: '3',
	},
	{
		name: 'Острый Додстер 🌶️🌶️',
		categoryId: '3',
	},
	{
		name: 'Банановый молочный коктейль',
		categoryId: '4',
	},
	{
		name: 'Карамельное яблоко молочный коктейль',
		categoryId: '4',
	},
	{
		name: 'Молочный коктейль с печеньем Орео',
		categoryId: '4',
	},
	{
		name: 'Классический молочный коктейль 👶',
		categoryId: '4',
	},
	{
		name: 'Ирландский Капучино',
		categoryId: '5',
	},
	{
		name: 'Кофе Карамельный капучино',
		categoryId: '5',
	},
	{
		name: 'Кофе Кокосовый латте',
		categoryId: '5',
	},
	{
		name: 'Кофе Американо',
		categoryId: '5',
	},
	{
		name: 'Кофе Латте',
		categoryId: '5',
	},
].map((p, i) => ({ ...p, id: i + 1 + '', imageUrl: `./products/${i + 1}.webp` }))