const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user',{useNewUrlParser: true })
let User = mongoose.model('User', {
  login:  String,
  password: String
})
let admin = new User({
  login: 'admin',
  password: '123456'
})
let Note = mongoose.model('note', {
  title: String,
  context: String
})
module.exports = { User, Note };
