export const ingredients = [
	{
		name: 'Сырный бортик',
		price: 179,
	},
	{
		name: 'Сливочная моцарелла',
		price: 79,
	},
	{
		name: 'Сыры чеддер и пармезан',
		price: 79,
	},
	{
		name: 'Острый перец халапеньо',
		price: 59,
	},
	{
		name: 'Нежный цыпленок',
		price: 79,
	},
	{
		name: 'Шампиньоны',
		price: 59,
	},
	{
		name: 'Ветчина',
		price: 79,
	},
	{
		name: 'Пикантная пепперони',
		price: 79,
	},
	{
		name: 'Острая чоризо',
		price: 79,
	},
	{
		name: 'Маринованные огурчики',
		price: 59,
	},
	{
		name: 'Свежие томаты',
		price: 59,
	},
	{
		name: 'Красный лук',
		price: 59,
	},
	{
		name: 'Сочные ананасы',
		price: 59,
	},
	{
		name: 'Итальянские травы',
		price: 39,
	},
	{
		name: 'Сладкий перец',
		price: 59,
	},
	{
		name: 'Кубики брынзы',
		price: 79,
	},
	{
		name: 'Митболы',
		price: 79,

	},
].map((obj, index) => ({ id: index + 1 + "", imageUrl: `./ingredients/${index + 1}.png`, ...obj }))
