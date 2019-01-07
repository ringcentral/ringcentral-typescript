const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'react-app',
        'ringcentral',
        'plugin:prettier/recommended', // must be belowe ringcentral to override react prefs
        'prettier/react', // must be belowe ringcentral to override react prefs
        'plugin:@typescript-eslint/recommended', // must be below react-app & ringcentral to enable proper parser
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                bracketSpacing: false,
                parser: 'typescript',
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
            },
        ],
        '@typescript-eslint/indent': 'off', // prettier takes care of it
    },
    env: {
        browser: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        //FIXME Remove when https://github.com/benmosher/eslint-plugin-import/issues/1256 is fixed
        'import/resolver': {
            node: {
                extensions: allExtensions,
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': tsExtensions,
        },
        'import/extensions': allExtensions,
    },
};
