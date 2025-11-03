import type {
	Linter, 
} from "eslint";

export const baseRules: Linter.RulesRecord = {
	// Консоль
	"no-console": [
		"warn", {
			allow: [
				"warn", "error",
			], 
		},
	],
	"no-restricted-syntax": [
		"warn",
		{
			selector: "CallExpression[callee.object.name='console'][callee.property.name=/^(log|debug|info|trace)$/]",
			message: "Unexpected console statement. Use console.warn or console.error instead.",
		},
	],
  
	// Кавычки
	"quotes": [
		"error", "double", {
			avoidEscape: true,
			allowTemplateLiterals: true,
		},
	],
	"jsx-quotes": [
		"error", "prefer-double",
	],
  
	// Запятые
	"comma-dangle": [
		"error", {
			arrays: "always-multiline",
			objects: "always-multiline",
			imports: "always-multiline",
			exports: "always-multiline",
			functions: "always-multiline",
		},
	],
  
	// Точки с запятой
	"semi": [
		"error", "always",
	],
  
	// Отступы
	"indent": [
		"error", "tab", {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			FunctionDeclaration: {
				parameters: 1,
				body: 1,
			},
			FunctionExpression: {
				parameters: 1,
				body: 1,
			},
			CallExpression: {
				arguments: 1, 
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			ignoreComments: false,
		},
	],
  
	// Пустые строки
	"no-multiple-empty-lines": [
		"error", {
			max: 1,
			maxEOF: 1,
			maxBOF: 0,
		},
	],
  
	// Базовые правила для пробелов (работают и с TypeScript)
	"keyword-spacing": [
		"error", {
			before: true,
			after: true,
		},
	],
	"space-infix-ops": "error", // Пробелы вокруг операторов
	"comma-spacing": [
		"error", { // Пробелы после запятых
			before: false,
			after: true,
		},
	],
  
	// Параметры функций - ПЕРЕНАСЫ И ВЫРАВНИВАНИЕ
	"function-paren-newline": [
		"error", "multiline",
	],
	"function-call-argument-newline": [
		"error", "consistent",
	],
	"object-curly-spacing": [
		"error", "always",
	], // Пробелы внутри фигурных скобок
	"array-bracket-spacing": [
		"error", "never",
	], // Без пробелов внутри квадратных скобок
};