const webhook = process.env.hook;
const requestify = require('requestify');

exports.sendMessage = function(message){
	requestify.post(webhook, message);
};