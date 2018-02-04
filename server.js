require('dotenv').config();
var PORT = process.PORT;

var express = require('express');
var app = express();

app.listen(PORT,function(){
    console.log('server is up and running on port 3000');
});

app.get('/',function(request,response){
    response.send('Hello World!!!');
});