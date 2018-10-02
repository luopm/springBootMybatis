define(['text!../templates/home.html','lib/plugin/output.js','css!../style/homeStyle.css'],
    function (tem,output) {
    var view ={
        render : function (el) {
            $(el).append(tem);
            this.init();
        },
        init : function () {
            var that = this;
            $("#home .modal-body").append(
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
                        output.output(JSON.stringify(result.list),150,'.input-group');
                    }
                })
            })
        }
    }

    return view;
});