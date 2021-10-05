module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'standard'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 0
	}
}
