var	express = 	require('express'),
	app =		express(),
	port = 		process.env.PORT || 8080;


app.post('/', function(req, res){
	//  todo: add logic here
});

app.get('/', function(req, res){
	res.send('hello!');
});

app.listen(port, function() {
    console.log('running on http://localhost:' + port);
});