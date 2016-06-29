const	webhook = 	process.env.hook,
	requestify =	require('requestify');

exports.sendMessage = function(message){
	requestify.post(webhook, message);
};