import js from "@eslint/js";

export default [
  js.configs.recommended, // start with ESLint's recommended rules

  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },

    rules: {
      semi: ["error", "always"],      // require semicolons
      "no-unused-vars": "warn",       // warn on unused variables
      "no-undef": "error",            // disallow undefined variables
      "no-console": "off",            // allow console logs for testing
    },
  },
];
