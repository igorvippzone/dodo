import { ingredients } from './ingredients'

export const products = [
	{
		name: 'Пепперони фреш',
		imageUrl:
			'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
		categoryId: '1',
		ingredients: {
			connect: ingredients.slice(0, 5),
		},
	},
	{
		name: 'Сырная',
		imageUrl:
			'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
		categoryId: '1',
		ingredients: {
			connect: ingredients.slice(5, 10),
		},
	},
	{
		name: 'Чоризо фреш',
		imageUrl:
			'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
		categoryId: '1',
		ingredients: {
			connect: ingredients.slice(10, 11),
		},
	},
	{
		name: 'Омлет с ветчиной и грибами',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
		categoryId: '2',
	},
	{
		name: 'Омлет с пепперони',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp',
		categoryId: '2',
	},
	{
		name: 'Кофе Латте',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
		categoryId: '2',
	},
	{
		name: 'Дэнвич ветчина и сыр',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
		categoryId: '3',
	},
	{
		name: 'Куриные наггетсы',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
		categoryId: "3",
	},
	{
		name: 'Картофель из печи с соусом 🌱',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
		categoryId: '3',
	},
	{
		name: 'Додстер',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
		categoryId: '3',
	},
	{
		name: 'Острый Додстер 🌶️🌶️',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
		categoryId: '3',
	},
	{
		name: 'Банановый молочный коктейль',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
		categoryId: '4',
	},
	{
		name: 'Карамельное яблоко молочный коктейль',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
		categoryId: '4',
	},
	{
		name: 'Молочный коктейль с печеньем Орео',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
		categoryId: '4',
	},
	{
		name: 'Классический молочный коктейль 👶',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
		categoryId: '4',
	},
	{
		name: 'Ирландский Капучино',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
		categoryId: '5',
	},
	{
		name: 'Кофе Карамельный капучино',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
		categoryId: '5',
	},
	{
		name: 'Кофе Кокосовый латте',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
		categoryId: '5',
	},
	{
		name: 'Кофе Американо',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
		categoryId: '5',
	},
	{
		name: 'Кофе Латте',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
		categoryId: '5',
	},
].map((p, i) => ({ ...p, id: i + 1 + '' }))