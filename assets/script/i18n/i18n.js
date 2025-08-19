const Polyglot = require('polyglot');
let lang = cc.sys.language;
if (lang !== 'zh') {
    lang = 'en';
}

console.log('[i18n] System language:', cc.sys.language, 'Using language:', lang);

// 使用静态require避免动态加载问题
let data = lang === 'zh' ? require('zh') : require('en');

console.log('[i18n] Loaded data keys:', Object.keys(data).length, 'Has UIMain_PIDText:', !!data['UIMain_PIDText']);

// let polyglot = null;
let polyglot = new Polyglot({phrases: data, allowMissing: true});


module.exports = {
    /**
     * This method allow you to switch language during runtime, language argument should be the same as your data file name
     * such as when language is 'zh', it will load your 'zh.js' data source.
     * @method init
     * @param language - the language specific data file name, such as 'zh' to load 'zh.js'
     */
    init (language) {
        lang = language;
        data = language === 'zh' ? require('zh') : require('en');
        console.log('[i18n] Language switched to:', language, 'Data keys:', Object.keys(data).length);
        polyglot.replace(data);
    },
    /**
     * this method takes a text key as input, and return the localized string
     * Please read https://github.com/airbnb/polyglot.js for details
     * @method t
     * @return {String} localized string
     * @example
     *
     * var myText = i18n.t('MY_TEXT_KEY');
     *
     * // if your data source is defined as
     * // {"hello_name": "Hello, %{name}"}
     * // you can use the following to interpolate the text
     * var greetingText = i18n.t('hello_name', {name: 'nantas'}); // Hello, nantas
     */
    t (key, opt) {
        const result = polyglot.t(key, opt);
        if (result === key && key === 'UIMain_PIDText') {
            console.log('[i18n] Translation failed for key:', key, 'Available keys:', Object.keys(data).slice(0, 10));
        }
        return result;
    }
};
