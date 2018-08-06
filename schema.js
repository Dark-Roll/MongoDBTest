var Schema = mongoose.Schema
var UserSchema = new Schema(
  {
    name:      { type: String },
    login:     { type: String, unique: true },
    email:     { type: String, unique: true },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
  }
)

// 新增實例
var user_1 = new user({ 
    name: 'babto',
    email:'babto@qq.com',
    phone:'18666666666'
 });
console.log(user_1.name); // 'babto'




var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ num:Number, name: String, size: String });        
        schema.methods.findSimilarSizes = function(cb){
            return this.model('MyModel').find({size:this.size},cb);
        }
        var MyModel = mongoose.model('MyModel', schema);
        var doc1 = new MyModel({ name:'doc1', size: 'small' });
        var doc2 = new MyModel({ name:'doc2', size: 'small' });
        var doc3 = new MyModel({ name:'doc3', size: 'big' });
        doc1.save();
        doc2.save();
        doc3.save();
        setTimeout(function(){
            doc1.findSimilarSizes(function(err,docs){
                docs.forEach(function(item,index,arr){
                    //doc1
                    //doc2
                     console.log(item.name)        
                })
            })  
        },0)  
    }
});

//  export ?