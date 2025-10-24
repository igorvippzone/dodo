import { dirname } from "path"
import { fileURLToPath } from "url"

import { FlatCompat } from "@eslint/eslintrc"
import reactPlugin from "eslint-plugin-react" // Плагин для React правил
import unusedImports from "eslint-plugin-unused-imports" // Плагин для удаления неиспользуемых импортов

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"), // Базовые настройки Next.js
	{
		plugins: {
			"unused-imports": unusedImports, // Плагин для автоматического удаления неиспользуемых импортов
			"react": reactPlugin, // Плагин с правилами для React
		},
		rules: {
			"@next/next/no-img-element": "off", // Отключает предупреждение об использовании <img> вместо Next.js Image

			// Правило сортировки атрибутов в JSX
			"react/jsx-sort-props": ["error", {
				callbacksLast: true, // Колбэки (onClick, onChange) в конце
				shorthandFirst: true, // Сокращенные пропсы в начале
				shorthandLast: false, // Не помещать сокращенные пропсы в конец
				ignoreCase: true, // Игнорировать регистр при сортировке
				noSortAlphabetically: false, // Сортировать по алфавиту
				reservedFirst: true, // React-специфичные пропсы (key, ref) в начале
				multiline: "last", // Многострочные пропсы в конце
			}],

			"indent": ["error", "tab"], // Использовать табы для отступов вместо пробелов

			// Правила для отступов в JSX
			"react/jsx-indent": ["error", "tab"], // Табы для отступов JSX элементов
			"react/jsx-indent-props": ["error", "tab"], // Табы для отступов атрибутов JSX

			// Перенос первого атрибута на новую строку при multiline
			"react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],

			// Ограничение количества атрибутов на строку
			"react/jsx-max-props-per-line": ["error", {
				"maximum": {
					"single": 2,    // Максимум 2 атрибута в одной строке
					"multi": 1      // При переносе - по одному атрибуту на строку
				}
			}],

			// Расположение закрывающей скобки
			"react/jsx-closing-bracket-location": ["error", {
				"selfClosing": "tag-aligned",  // Закрывающая скобка выравнивается по тегу для self-closing
				"nonEmpty": "tag-aligned"      // Закрывающая скобка выравнивается по тегу для не-self-closing
			}],

			// Удаление множественных пустых строк
			"no-multiple-empty-lines": ["error", {
				"max": 1,       // Максимум 1 пустая строка подряд
				"maxEOF": 1,    // Максимум 1 пустая строка в конце файла
				"maxBOF": 0     // Не должно быть пустых строк в начале файла
			}],

			// Запрет пустых строк между атрибутами JSX
			"react/jsx-newline": ["error", {
				"prevent": true, // Запрещает пустые строки между атрибутами
				"allowMultilines": false, // Запрещает пустые строки даже в многострочных атрибутах
			}],

			// Правила переноса для многострочных JSX выражений
			"react/jsx-wrap-multilines": ["error", {
				"declaration": "parens-new-line", // Перенос для объявлений
				"assignment": "parens-new-line", // Перенос для присваиваний
				"return": "parens-new-line", // Перенос для return
				"arrow": "parens-new-line", // Перенос для стрелочных функций
				"condition": "parens-new-line", // Перенос для условий
				"logical": "parens-new-line", // Перенос для логических выражений
				"prop": "parens-new-line" // Перенос для пропсов
			}],

			// Продвинутая сортировка импортов
			"import/order": [
				"error",
				{
					"groups": [
						"builtin",    // Встроенные модули Node.js
						"external",   // Внешние пакеты (react, lodash, etc)
						"internal",   // Внутренние алиасы (@/, ~/, etc)
						["parent", "sibling"], // Относительные импорты из родительских и соседних директорий
						"index",      // index файлы
						"object",     // Импорты объектов
						"type"        // Импорты типов
					],
					"pathGroups": [
						{
							"pattern": "react",
							"group": "external",
							"position": "before" // React перед другими external импортами
						},
						{
							"pattern": "next/**",
							"group": "external",
							"position": "after" // Next.js после других external импортов
						},
						{
							"pattern": "@/**",
							"group": "internal" // Алиас @/ как internal
						},
						{
							"pattern": "~/**",
							"group": "internal" // Алиас ~/ как internal
						},
						{
							"pattern": "@/components/**",
							"group": "internal",
							"position": "after" // components после других internal
						},
						{
							"pattern": "@/lib/**",
							"group": "internal",
							"position": "after" // lib после других internal
						},
						{
							"pattern": "@/utils/**",
							"group": "internal",
							"position": "after" // utils после других internal
						},
						{
							"pattern": "@/types/**",
							"group": "internal",
							"position": "after" // types после других internal
						}
					],
					"pathGroupsExcludedImportTypes": ["react", "type"], // Исключения для pathGroups
					"newlines-between": "always", // Всегда добавлять пустые строки между группами
					"alphabetize": {
						"order": "asc", // Сортировка по возрастанию
						"caseInsensitive": true // Без учета регистра
					},
					"distinctGroup": false // Не разделять группы
				}
			],

			// Дополнительные правила для импортов
			"import/first": "error", // Импорты должны быть в начале файла
			"import/newline-after-import": "error", // Пустая строка после импортов
			"import/no-duplicates": "error", // Запрет дублирующихся импортов

			// Отключаем стандартные правила неиспользуемых переменных
			"no-unused-vars": "off", // Отключаем встроенное правило
			"@typescript-eslint/no-unused-vars": "off", // Отключаем TypeScript правило

			// Включаем правила из unused-imports для автоматического удаления
			"unused-imports/no-unused-imports": "error", // Ошибка для неиспользуемых импортов
			"unused-imports/no-unused-vars": [
				"warn", // Предупреждение для неиспользуемых переменных
				{
					"vars": "all", // Проверять все переменные
					"varsIgnorePattern": "^_", // Игнорировать переменные начинающиеся с _
					"args": "after-used", // Проверять аргументы после использования
					"argsIgnorePattern": "^_" // Игнорировать аргументы начинающиеся с _
				}
			]
		},
	},
	{
		ignores: [
			"node_modules/**", // Игнорировать node_modules
			".next/**", // Игнорировать папку .next
			"out/**", // Игнорировать папку out
			"build/**", // Игнорировать папку build
			"next-env.d.ts", // Игнорировать next-env.d.ts
			"src/generated/**", // Игнорировать сгенерированные файлы
		],
	},
]

export default eslintConfig