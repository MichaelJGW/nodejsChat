
$(document).ready(function() {
	autoRefresh();
});

var autoRefresh = function(){
	setTimeout(function(){
		ajaxMsg();
		autoRefresh();
	},3000);
}

var ajaxMsg = function(msg){
	$.ajax({
        url: 'http://127.0.0.1:1337/?msg='+msg,
        dataType: "jsonp",
        jsonpCallback: "_testcb",
        cache: false,
        timeout: 3000,
        success: function(data) {
            
            obj = JSON.parse(data);
            console.log(obj.message);
            var html = "";
            for(var loop = 0; loop<obj.message.length; loop++){
            	html += obj.message[loop] + "<br>";
        	}
        	$("#msgBoard").html(html);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('error ' + textStatus + " " + errorThrown);
        }
    });
}
var sendMsg = function(){
	ajaxMsg($("#input").val());
}