module.exports = {
    parser: "babel-eslint",
    plugins: [
        "babel"
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        "strict": 0
    }
}