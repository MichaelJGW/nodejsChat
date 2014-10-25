
var http = require('http');
var lib = require('./lib.js');
var chatData = {
	"message": ["Hello world!","Hi There"]
}
lib.file.read("chatLog.js",function(data){
	chatData = JSON.parse(data);
});
http.createServer(function (req, res) {
	var msg = req.url.split("msg=")[1].split("&")[0];
	if(msg != "undefined"){
		msg = msg.split("%20").join(" ");
		msg = msg.split("%27").join("'");
		chatData.message.push(msg);
		lib.file.write("chatLog.js",JSON.stringify(chatData));
		if(chatData.message.length > 22){
			chatData.message.shift();
		}
		console.log("adding msg");
	}
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('_testcb(\''+JSON.stringify(chatData)+'\')');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
