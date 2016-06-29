const	express = 	require('express'),
	app =		express(),
	port = 		process.env.PORT || 8080,
	slack = 	require('./slack.js');


app.post('/', function(req, res){
	slack.sendMessage(req);
	res.sendStatus(200);
});

app.get('/', function(req, res){
	res.send('hello!');
});

app.listen(port, function() {
    console.log('running on http://localhost:' + port);
});