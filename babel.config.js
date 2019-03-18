module.exports = {
    presets: [
        '@babel/env',
        '@vue/babel-preset-jsx',
        ['@babel/typescript', {
            isTSX: true,
            jsxPragma: 'h',
            allExtensions: true
        }],
    ]
}