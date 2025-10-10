import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'semi': ['error', 'always'], // Enforce semi colons
      'quotes': ['error', 'double',{ "allowTemplateLiterals": true }], // Enforce double quotes
      '@typescript-eslint/no-unused-vars': 'warn', // Warn if unused vars
      '@typescript-eslint/no-explicit-any': 'warn', // Warn any
      'indent': ['error', 4], // Enforce 4 space tabs
      'eol-last': ['error', 'always'], // Ensure the file ends with a newline
      'comma-dangle': ['error', 'never'], // Disallow trailing commas
      'max-len': ['warn', { 'code': 80 }] // Warn if a line is too long
    }
  },
])
