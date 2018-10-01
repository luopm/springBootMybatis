/**
 * @method
 * @param {String} str 输出字符串,{Number} time 输出延时,{String} selector 选择器
 * @returns 
 * @desc 根据选择器延时输出字符串
 */
define(function () {
    var output = {
        output:function (str,time,selector) {
            $(selector +" .toolOutputContent").remove();
            var div ='<div class="toolOutputContent"><span class="toolOutputBlink" id="toolOutputJsBlink">|</span></div>';
            $(selector).append(div);
            function wr(s){
                var color = 'color' + Math.round( Math.random()*23 );
                var str = '<span class="toolOutputWord '+color+'">'+s+'</span>';
                $('#toolOutputJsBlink').before(str);
            }
            var i = 0,len= str.length;
            function func(){
                setTimeout(function(){
                    if(i<len){
                        if(str[i] == ' ' )wr('&nbsp');
                        else if(str[i]=='\\' && str[i+1]=='n'){
                            wr('<br/>');
                            i++;
                        }
                        else wr(str[i]);
                        i++;
                        func();
                    }
                },time)
            }
            func();
        }
    };
    return output;
})
// function output(str,time,selector) {
// 	$(selector +" .toolOutputContent").remove();
// 	var div ='<div class="toolOutputContent"><span class="toolOutputBlink" id="toolOutputJsBlink">|</span></div>';
// 	$(selector).append(div);
//     function wr(s){
//         var color = 'color' + Math.round( Math.random()*23 );
//         var str = '<span class="toolOutputWord '+color+'">'+s+'</span>';
//         $('#toolOutputJsBlink').before(str);
//     }
//     var i = 0,len= str.length;
//     function func(){
//         setTimeout(function(){
//             if(i<len){
//                 if(str[i] == ' ' )wr('&nbsp');
//                 else if(str[i]=='\\' && str[i+1]=='n'){
//                     wr('<br/>');
//                     i++;
//                 }
//                 else wr(str[i]);
//                 i++;
//                 func();
//             }
//         },time)
//     }
//     func();
// }