require.config({
    paths:{
        "text":"public/requireJS/text",
        "i18n":"public/requireJS/i18n",
        "css": "public/requireJS/css"
    }
})

require(['lib/plugin/output.js','pbook/views/homeView','css!main.css'],
    function (output,homeView) {
    homeView.render("#app");
    $(".content").append(
        '<div class="input-group">' +
        '    <input type="text" class="form-control" id="input" placeholder="Recipient\'s username" aria-describedby="basic-addon2">' +
        '    <span class="input-group-addon" id="basic-addon2">OK</span>' +
        '</div>' );
    $("#basic-addon2").click(function () {
        $.ajax({
            method:'post',
            url:'../user/all',
            async:true,
            data:{},
            dataType:'json',
            success:function (result) {
                output.output(JSON.stringify(result.list),150,'.content');
            }
        })

        //var str = $("#input").val();

    })
});