export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      semi: ["error", "always"],  // require semicolons
      "no-unused-vars": "warn",   // warn on unused variables
      "no-undef": "error",        // error on undefined variables
    },
  },
];
