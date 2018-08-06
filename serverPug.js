

var express = require('express');
var app = express();
 
//set view engine
app.set("view engine","pug")
//set view directory
app.set("views","views")
 
app.get('/', function (req, res) {
    res.render('saple');  // render 樣版，執行編繹。
});
 
var server = app.listen(3000, function () {
    console.log('Node server is running..');
});