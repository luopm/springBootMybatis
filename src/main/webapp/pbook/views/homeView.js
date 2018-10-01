define(['text!../templates/home.html'],function (tem) {
    var view ={
        render : function (el) {
            $(el).html(tem);
        }
    }
    return view;
});