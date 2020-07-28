/*eslint-env node*/

module.exports = {
    'env': {
        'browser': true,
        'es2020': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:gridsome/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 11,
        'sourceType': 'module'
    },
    'plugins': [
        'vue',
        'gridsome'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'gridsome/format-query-block': [
            'warn',
            {
                'overridePrettierOption': {
                    'tabWidth': 4,
                    'vueIndentScriptAndStyle': true
                }
            }
        ]
    }
};
