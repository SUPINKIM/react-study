module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    globals: {
        JSX: true
    },
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'import', '@emotion'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true }
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'type',
                    'parent',
                    'sibling',
                    'index',
                    'unknown'
                ],
                pathGroups: [
                    {
                        pattern: 'react*',
                        group: 'external',
                        position: 'before'
                    }
                ],
                pathGroupsExcludedImportTypes: ['react']
            }
        ],
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'max-depth': ['error', 4],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
                maxEOF: 0
            }
        ],
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects: true,
                objectsInObjects: true
            }
        ],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 2
                },
                ObjectPattern: {
                    multiline: true,
                    minProperties: 3
                },
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 5
                },
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3
                }
            }
        ],
        'object-property-newline': 'error',
        multiline: 'off',
        'quote-props': ['error', 'consistent-as-needed', { keywords: true }]
    },
    settings: {
        'import/resolver': {
            typescript: {}
        }
    }
};
