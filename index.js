
//  ??
// var model = require('express')

var User = mongoose.model('User')

User.getUserByLogin(login, function(err, user) {
  // here we have a user...
})