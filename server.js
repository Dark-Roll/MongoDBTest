// var http = require('http');
var express = require('express')
var app = express()
// var server = http.createServer(app);




var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/est', function (res) {
    if (res) {
        console.log('连接 success');
        var schema = new mongoose.Schema({ num: Number, name: String, size: String });
        // schema.methods.findSimilarSizes = function (cb) {
        //     return this.model('MyModel').find({ size: this.size }, cb);
        // }
        var MyModel = mongoose.model('MyModel', schema);
        var doc1 = new MyModel({ name: 'doc1', size: 'small' }); 
        var doc2 = new MyModel({ name: 'doc2', size: 'small' });
        var doc3 = new MyModel({ name: 'doc3', size: 'big' });
        doc1.save();
        doc1.save(function (err, doc) {
            //{ __v: 0, size: 'small', _id: 5970daba61162662b45a24a1 }
            console.log(doc);
        })
        doc2.save();
        doc3.save();
        // setTimeout(function () {
        //     doc1.findSimilarSizes(function (err, docs) {
        //         docs.forEach(function (item, index, arr) {
        //             //doc1
        //             //doc2
        //             console.log(item.name)
        //         })
        //     })
        // }, 0)
    } else {
        console.log('连接 fail ');
        var schema = new mongoose.Schema({ num: Number, name: String, size: String });
        var MyModel = mongoose.model('MyModel', schema);
        var doc1 = new MyModel({ name: 'doc1', size: 'small' });

        mongoose.spending.insert(doc1)
        // doc1.save();

        console.log(doc1);
        doc1.save(function (err, doc) {
            //{ __v: 0, size: 'small', _id: 5970daba61162662b45a24a1 }
            console.log(doc);
        })

    }
});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });



// app.use(express.cookieParser())
app.get('/', function (req, res) {
    console.log('req.cookies')
    res.send('hello')
})

app.listen('4000')



// server.listen(8080, '127.0.0.1', function () {
//     console.log('HTTP伺服器在 http://127.0.0.1:8080/ 上運行');
// });

