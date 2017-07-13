const path = require('path');
const express = require('express');
const app = express();
const main = require('./build/main.page.js').page;

app.get('/',function(req,res){
	res.end(main);
})

app.use('/build', express.static(__dirname + '/build'));
app.use('/src', express.static(__dirname + '/src'));

app.listen(3000,'localhost',function(err){
	if(err){
		console.log(err);
		return;
	}
	console.log('Listening at http://localhost:3000');
})