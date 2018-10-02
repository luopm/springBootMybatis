require.config({
    paths:{
        "text":"public/requireJS/text",
        "i18n":"public/requireJS/i18n",
        "css": "public/requireJS/css"
    }
})

require(['pbook/views/homeView','css!main.css'],
    function (homeView) {
    homeView.render("#app");
        // homeView.render("#app");
});