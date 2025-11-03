import {
	dirname, 
} from "path";
import {
	fileURLToPath, 
} from "url";

import {
	FlatCompat, 
} from "@eslint/eslintrc";
import typescriptParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";

// Импортируем все правила через баррель
import {
	baseRules, typescriptRules, reactRules, importRules, 
} from "./eslint-rules/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname, 
});

const eslintConfig = [
	// Базовые настройки Next.js
	...compat.extends("next/core-web-vitals", "next/typescript"),
  
	// TypeScript конфигурация
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: {
					jsx: true, 
				},
				project: "./tsconfig.json",
			},
		},
	},
  
	// Основные правила
	{
		plugins: {
			"unused-imports": unusedImports,
			"react": reactPlugin,
		},
		rules: {
			...baseRules,
			...typescriptRules,
			...reactRules,
			...importRules,
		},
	},
  
	// Игнорируемые файлы
	{
		ignores: [
			"node_modules/**",
			".next/**",
			"out/**",
			"build/**",
			"next-env.d.ts",
			"src/generated/**",
		],
	},
];

export default eslintConfig;