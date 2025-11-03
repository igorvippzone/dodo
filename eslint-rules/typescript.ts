import type {
	Linter, 
} from "eslint";

export const typescriptRules: Linter.RulesRecord = {
	// TypeScript правила - ТОЛЬКО проверки типов, без форматирования
	"@typescript-eslint/no-unused-vars": "off",
	"@typescript-eslint/no-explicit-any": "warn",
	"@typescript-eslint/explicit-function-return-type": "off",
	"@typescript-eslint/explicit-module-boundary-types": "off",
	"@typescript-eslint/no-empty-function": "warn",
	"@typescript-eslint/no-empty-interface": "warn",
  
	// УДАЛИТЬ все эти правила - они больше не существуют:
	// "@typescript-eslint/type-annotation-spacing"
	// "@typescript-eslint/comma-spacing" 
	// "@typescript-eslint/keyword-spacing"
	// "@typescript-eslint/space-infix-ops"

	// Неиспользуемые переменные (обрабатываем через unused-imports)
	"no-unused-vars": "off",
	"unused-imports/no-unused-imports": "error",
	"unused-imports/no-unused-vars": [
		"warn",
		{
			vars: "all",
			varsIgnorePattern: "^_",
			args: "after-used",
			argsIgnorePattern: "^_",
		},
	],

	//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	// РАБОЧИЕ ПРАВИЛА ДЛЯ ФОРМАТИРОВАНИЯ ФУНКЦИЙ:
  
	// 1. Максимальное количество параметров - заставляет разбивать на новые строки
	"max-params": ["error", 3], // Ошибка если больше 3 параметров в строке
  
	// 2. Пробелы в функциях
	"space-before-function-paren": ["error", {
		anonymous: "never",    // function () {}
		named: "never",        // function foo() {}
		asyncArrow: "always",   // async () => {}
	}],
  
	// 3. Стрелочные функции
	"arrow-parens": ["error", "always"], // Всегда скобки вокруг параметров
	"arrow-spacing": "error",            // Пробелы вокруг стрелки =>
	"arrow-body-style": ["error", "as-needed"], // Тело стрелочной функции когда нужно
  
	// 4. Пробелы вокруг параметров
	"space-in-parens": ["error", "never"], // Нет пробелов внутри скобок
  
	// 5. Запятые в параметрах
	"comma-spacing": ["error", { 
		before: false, 
		after: true, 
	}],

	// 6. Перенос параметров функций
	"function-paren-newline": ["error", "multiline"],
	"function-call-argument-newline": ["error", "consistent"],
};