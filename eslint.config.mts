import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist/**",
      "lib/**",
      "coverage/**",
      "docs/**",
      "node_modules/**",
      ".yarn/**",
      "scripts/**",
      "test/**",
      "**/*.min.js",
      "**/*.d.ts",
      "eslint.config.mts",
      "tsup.config.ts",
      "engine-requirements.js",
      "jsdoc.js"
    ]
  },

  {
    files: ["src/**/*.{ts,js,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021
      },
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname
      }
    }
  },

  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    rules: {
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/prefer-optional-chain": "off",
      "@typescript-eslint/await-thenable": "off",
      "@typescript-eslint/no-explicit-any": "off",

      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ]
    }
  }
);
