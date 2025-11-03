import type {
	Linter, 
} from "eslint";

export const importRules: Linter.RulesRecord = {
	"import/order": [
		"error",
		{
			groups: [
				"builtin",
				"external",
				"internal",
				[
					"parent", "sibling",
				],
				"index",
				"object",
				"type",
			],
			pathGroups: [
				{
					pattern: "react",
					group: "external",
					position: "before",
				},
				{
					pattern: "next/**",
					group: "external",
					position: "after",
				},
				{
					pattern: "@/**",
					group: "internal",
				},
				{
					pattern: "~/**",
					group: "internal",
				},
				{
					pattern: "@/components/**",
					group: "internal",
					position: "after",
				},
				{
					pattern: "@/lib/**",
					group: "internal",
					position: "after",
				},
				{
					pattern: "@/utils/**",
					group: "internal",
					position: "after",
				},
				{
					pattern: "@/types/**",
					group: "internal",
					position: "after",
				},
			],
			pathGroupsExcludedImportTypes: [
				"react", "type",
			],
			"newlines-between": "always", // Исправлено: дефис вместо camelCase
			alphabetize: {
				order: "asc",
				caseInsensitive: true,
			},
			distinctGroup: false,
		},
	],
  
	"import/first": "error",
	"import/newline-after-import": "error",
	"import/no-duplicates": "error",
};