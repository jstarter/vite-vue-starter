module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'vue', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended' // https://eslint.vuejs.org
    ],
    rules: {
        'prettier/prettier': 'warn',
        'no-unref': 'off',
        'no-undef': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'vue/html-indent': ['warn', 4],
        'vue/multi-word-component-names': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': [ 'warn', {
            html: {
                void: 'always',
                normal: 'never'
            }
        }]
    },
    overrides: []
}
