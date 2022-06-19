module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true
    },
    'extends': [
        'plugin:react/recommended',
        'prettier'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'prettier'
    ],
    'rules': {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'camelcase': 'error',
        'spaced-comment': 'error',
        'quotes': ['error', 'single'],
        'no-duplicate-imports': 'error',
        'semi' : ['error', 'always'],
        'no-console': 1,
        'no-empty': [2, { 'allowEmptyCatch': true }],
        'prefer-const': 1,
        'require-await': 2,
        'no-await-in-loop': 2,
        'no-unused-vars': ['warn'],
    },
    'settings': {
        'import/resolver': { 
          'typescript': {},
          'node': {
            'extensions': ['.ts', '.tsx'],
            'moduleDirectory': ['src', 'node_modules']
          }
        }
    }
};
