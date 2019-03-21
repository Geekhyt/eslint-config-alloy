module.exports = {
    rules: {
        /**
         * 禁止将一个函数声明重新赋值，如：
         * @category Possible Errors
         * function foo() {}
         * foo = bar
         */
        'no-func-assign': 'error'
    }
};
