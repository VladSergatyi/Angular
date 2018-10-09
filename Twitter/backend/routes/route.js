const { User, Note }= require('./../config/mongoose.js');
const validatorjs = require('validatorjs');
module.exports = app => {
  app.post('/api/login', (req, res) => {
    const { login, password } = req.body;
    let Validate = new validatorjs(
      {
        login: login,
        password: password
      },
      {
        login:    'required|min:3',
        password: 'required|min:6'
      })
      Validate.passes(() => {
        User.findOne({login:login, password: password})
        .exec((err, result) => {
          if (result){
              console.log(result);
              res.json({
                login:req.body.login,
                password: req.body.password
              })
          } else {
            res.json({
              errors: 'User not found'
            })  }
        })
      })
      Validate.fails(() => {
        console.log('Failed');
        res.json({
          errors: 'Login - min 3 char Password - min 6 char'
        })
      })
  })
  app.post('/api/findNote', (req, res) => {
    Note.find().exec((err, resultNote) => {
      if(err) next(err)
      res.json(resultNote.reverse())
    })
  })
  app.post('/api/note', (req, res) => {
    const { title, context } = req.body;
    let newNews = new Note({
      title:   title,
      context: context
    })
    Note.find().exec((err, result) => {
      if(err) next(err)
      console.log(result);
    })
    res.json({
       title:  newNews.title,
       context:newNews.context
    })
  })
  app.post('/api/signUp', (req, res) => {
    const { login, password, cPassword } = req.body;
    if(password == cPassword) {
      User.find({login: login}).exec((err, result) => {
        if(err) next(err)
        if(result.length == 0){
          let newUser = new User({
            login: login,
            password: password
          })
        } else {
          res.json({
            errors: 'This user is registered.'
          })
        }
      })
    } else {
      res.json({
          errors: 'Passwords do not match'
      })
    }
  })
};
