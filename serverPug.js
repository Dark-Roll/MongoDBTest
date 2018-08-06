// var http = require('http'); // 1 - Import Node.js core module
// // var data=jade.renderFile('./MyViews/sample.jade');
 
// var server = http.createServer(function (req, res) {   // 2 - creating server
 
//     if (req.url == '/') { //check the URL of the current request
//         // set response header
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         // set response content
//         res.write(data);
//         res.end();
//     }else
//         res.end('Invalid Request!');
// });
 
// server.listen(3000); //3 - listen for any incoming requests 
// console.log('Node.js web server at port 3000 is running..')




var mongodata=require('./model/monlistdata');
var express = require('express');
var app = express();
 
//set view engine
app.set("view engine","pug")
//set view directory
app.set("views","views")
 
mongodata.personList(function(recordset){
    
    app.get('/', function (req, res) {
        res.render('sample',{personList:recordset});  // render 樣版，執行編繹。
        // render person will pop up error
    });
})
 
app.listen(3000, function () {
    console.log('Node server is running..');
});