import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        test: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": ["warn"],
    },
  },
];
