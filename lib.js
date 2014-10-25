
 module.exports = {
 	encryptValue : 10,
 	encrypt : function(msg,value){
 		if(value === undefined){
 			value = this.encryptValue;
 		}
 		var msgArr = msg.split("");
 		for(var loop = 0; loop < msgArr.length; loop++){
 			msgArr[loop] = String.fromCharCode(msgArr[loop].charCodeAt() + value);
 		}
 		msg = msgArr.join("");
 		return msg
 	},
 	decrypt : function(msg){
 		return this.encrypt(msg, this.encryptValue*-1);
 	},
 	file : {
 		read : function(fileName,callback){
 			fs = require('fs')
			fs.readFile('./' + fileName, 'utf8', function (err,data) {
			  if (err) {
			    return console.log(err);
			  }
			  callback(data);
			});
 		},
 		write : function(fileName,content){
 			var fs = require('fs');
			fs.writeFile(fileName, content, function(err) {
			    if(err) {
			        console.log(err);
			    } else {
			        console.log("The file was saved!");
			    }
			}); 
 		}	
 	}
}