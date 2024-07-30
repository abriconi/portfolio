module.exports = {
  root: true,
  env: { browser: true, es2020: true },

  plugins: ["react", "import", "prettier"],

  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "plugin:prettier/recommended"],

  ignorePatterns: ["dist", ".eslintrc.cjs"],

  parserOptions: { project: ["./tsconfig.json"] },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: "module",
  },

  rules: {
    "no-case-declarations": "off",
    "jsx-quotes": ["error", "prefer-double"],
    quotes: ["error", "double"],
    "max-len": ["error", { code: 140 }],
    "import/order": [
      "error",
      {
        groups: [["builtin", "internal", "external"], ["sibling", "parent"], "index", "object"],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      {
        usePrettierrc: true,
      },
    ],
  },

  overrides: [{
    files: ["*.ts", "*.tsx"],
    "excludedFiles": "*.d.ts",
  }]
};
