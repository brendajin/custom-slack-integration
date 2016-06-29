const webhook = process.env.hook;
const message = {
    text: 'hello SF HTML 5'
};
const requestify = require('requestify');

exports.sendMessage = function(req){
	requestify.post(webhook, message);
};