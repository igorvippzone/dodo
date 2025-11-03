import type {
	Linter, 
} from "eslint";

export const reactRules: Linter.RulesRecord = {
	// Next.js
	"@next/next/no-img-element": "off",
  
	// Сортировка пропсов
	"react/jsx-sort-props": [
		"error", {
			callbacksLast: true,
			shorthandFirst: true,
			shorthandLast: false,
			ignoreCase: true,
			noSortAlphabetically: false,
			reservedFirst: true,
			multiline: "last",
		},
	],
  
	// Отступы JSX
	"react/jsx-indent": [
		"error", "tab",
	],
	"react/jsx-indent-props": [
		"error", "tab",
	],
  
	// Перенос пропсов
	"react/jsx-first-prop-new-line": [
		"error", "multiline-multiprop",
	],
	"react/jsx-max-props-per-line": [
		"error", {
			maximum: {
				single: 2,
				multi: 1,
			},
		},
	],
  
	// Расположение скобок
	"react/jsx-closing-bracket-location": [
		"error", {
			selfClosing: "tag-aligned",
			nonEmpty: "tag-aligned",
		},
	],
  
	// Новые строки в JSX
	"react/jsx-newline": [
		"error", {
			prevent: false,
			allowMultilines: false,
		},
	],
  
	// Пробелы в тегах
	"react/jsx-tag-spacing": [
		"error", {
			closingSlash: "never",
			beforeSelfClosing: "always",
			afterOpening: "never",
			beforeClosing: "never",
		},
	],
  
	// Фигурные скобки
	"react/jsx-curly-spacing": [
		"error", "never", {
			allowMultiline: true, 
		},
	],
  
	"react/jsx-curly-newline": [
		"error", {
			multiline: "consistent",
			singleline: "consistent",
		},
	],
};
