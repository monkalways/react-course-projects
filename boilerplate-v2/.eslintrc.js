module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true
    },
    plugins: [
        "import",
        "react",
        "jest"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended"
    ],
    rules: {
        "no-console": "off",
        "no-unused-vars": "off",
        "no-unsafe-finally": "off",
        "no-unreachable": "off",
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off",
        "react/display-name": "off",
        "curly": [2, "multi-line"],
		"quotes": [2, "single", "avoid-escape"],
		// "react/display-name": 0,
		// "react/jsx-boolean-value": 1,
		// "react/jsx-quotes": 1,
		// "react/jsx-no-undef": 1,
		// "react/jsx-sort-props": 0,
		// "react/jsx-sort-prop-types": 1,
		// "react/jsx-uses-react": 1,
		// "react/jsx-uses-vars": 1,
		// "react/no-did-mount-set-state": 1,
		// "react/no-did-update-set-state": 1,
		// "react/no-multi-comp": 1,
		// "react/no-unknown-property": 1,
		// "react/prop-types": 1,
		// "react/react-in-jsx-scope": 1,
		// "react/self-closing-comp": 1,
		// "react/wrap-multilines": 1,
		// "semi": 2,
		// "strict": 0
    }
}