var message = "";
var messageIndex = 0 ;
var t = null;
var getData = "";
function showMessage(data){
    if(t!=null){
        clearTimeout(t);
    }
    message += getData.substr(messageIndex, 1);
    messageIndex++;
    $(".message-div").html("<pre>"+message+"|</pre>");
    if(messageIndex < getData.length){
        t = setTimeout("showMessage()", 300);
    }else{
        $(".message-div").html("<pre>"+message+"</pre>");
        console.log("文字显示完成！");
    }
}

$(document).ready(function(){
    
    $.get('/static/data/message.txt',{},function(data){
        getData = data;
        t = setTimeout("showMessage()", 20);
    });    
    
});
