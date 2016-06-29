const webhook = process.env.hook;
const message = {
    text: 'word'
};
const requestify = require('requestify');

exports.sendMessage = function(req){
	requestify.post(webhook, message);
};