module.exports = {
	root: true,
	"env": {
		"browser": true,
		"node": true,
		"es6": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"plugins": [
		"react",
		"import"
	],
	"rules": {
		"indent": "off",
		"eslintquotes": "off",
		"no-unused-vars": "off",
		"array-callback-return": "off"
	}
};
