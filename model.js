UserSchema.pre('save', function (next) {
    // do something...
})

UserSchema.statics = {

    getUserByLogin: function (login, callback) {
        this.findOne({ login: login })
            .exec(callback)
    }

}



userSchema.methods.info = function () {
    console.log('My name is ' + this.name);
}
var user = mongoose.model('user', userSchema);

// 
var user_2 = new user({
    name: 'james',
    email: 'james@qq.com',
    phone: '188888888888'
});
user_2.info(); // "My name is james"



user_2.save(function (err, docs) {
    if (err) return console.error(err);
    docs.info();// "My name is james"
});

user_2.find({ 'phone': '188888888888' }, function (err, docs) {
    if (err) return console.error(err); //顯示異常
    console.log(docs);
})


mongoose.model('User', UserSchema)