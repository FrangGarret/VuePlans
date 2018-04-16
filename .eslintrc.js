// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	'no-unused-vars':0,
    "space-infix-ops": 0,
  	"semi": [0],//语句强制分号结尾
  	"spaced-comment": [0],
  	"semi-spacing": [0],//分号前后空格
  	"space-in-parens": [0, "never"],//小括号里面要不要有空格
  	"space-return-throw-case": 2,//return throw case后面要不要加空格
  	"space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
  	"camelcase": 2,//强制驼峰法命名
  	"space-return-throw-case":0,
  	"no-tabs":0,
  	"indent":0,
  	"key-spacing":0,
  	"no-multiple-empty-lines":0,
  	"quotes":0,
  	"no-new":0,
  	"eol-last":0,
  	"comma-dangle":0,
  	"no-mixed-spaces-and-tabs":0,
  	"space-before-blocks":0,
  	"space-before-function-paren":0,
  	"no-trailing-spaces":0,
  	"keyword-spacing":0,
  	"padded-blocks":0,
  	"comma-spacing":0,
  	"block-spacing":0,
  	"eqeqeq":0,
  	'no-multi-spaces':0,
  	"no-unused-expressions":0
  }
}
