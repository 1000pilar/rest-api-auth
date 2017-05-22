var models = require('../models')
var jwt = require('jsonwebtoken')
var passwordHash = require('password-hash')


module.exports = {
  decodedAdmin : (req, res, next)=>{
    var token = jwt.verify(req.headers.token, 'krisis_only_need_to_handle_with_calm');
    // console.log(token.role);
    if (token.role.toLowerCase() === "admin"){
      next()
    } else {
      res.send(`You'r not authorize to access the data`)
    }
  },
  decodedAdminUser: (req, res, next)=>{
    var token = jwt.verify(req.header.token, 'krisis_only_need_to_handle_with_calm');
    if(token.role.toLowerCase() === 'admin' || token.role.toLowerCase() === 'user'){
      next()
    } else {
      res.send(`You'r not authorize to access the data`)
    }
  }
}
