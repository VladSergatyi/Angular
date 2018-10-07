const User        = require('./../config/mongoose.js');
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
};
