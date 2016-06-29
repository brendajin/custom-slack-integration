const	express = 	require('express'),
	app =		express(),
	bodyParser = 	require('body-parser'),
	port = 		process.env.PORT || 8080,
	slack = 	require('./slack.js');

app.use(bodyParser.json());

app.post('/', function(req, res){
	if (req.get('X-GitHub-Event') == 'watch'){
		slack.sendMessage({
			'text': '<' + req.body.sender.url + '|' + req.body.sender.login + '> ' + req.body.action + ' watching <' + req.body.repository.url + '|' + req.body.repository.name + '>'
		});
	}
	if (req.get('X-GitHub-Event') == 'fork'){
		slack.sendMessage({
			'text': '<' + req.body.sender.url + '|' + req.body.sender.login + '> forked <' + req.body.repository.url + '|' + req.body.repository.name + '>',
		});
	}
	res.sendStatus(200);
});

app.get('/', function(req, res){
	res.send('hello!');
});

app.listen(port, function() {
    console.log('running on http://localhost:' + port);
});