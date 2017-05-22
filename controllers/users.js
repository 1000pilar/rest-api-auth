// var express = require('express')
var models = require('../models')
var jwt = require('jsonwebtoken')
var passwordHash = require('password-hash')
var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  // getAllUser : (req, res)=>{
  //   models.User.findAll()
  //   .then ((users)=>{
  //     res.send(users)
  //   })
  // },
  //
  // findUser : (req, res)=>{
  //   models.User.findById(req.params.id)
  //   .then ((user)=>{
  //     res.send(user)
  //   })
  // },
  //
  // insertUser : (req, res)=>{
  //   models.User.create({
  //     name: req.body.name,
  //     username: req.body.username,
  //     password: req.body.password,
  //     role: req.body.role
  //   })
  //   .then ((user)=>{
  //     res.send(user)
  //   })
  // },
  //
  // deleteUser: (req, res)=>{
  //   models.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then ((msg)=>res.send({msg: `You have deleted id ${req.params.id}`}))
  // },
  //
  // updateUser: (req, res)=>{
  //   let user = {
  //     name: req.body.name,
  //     username: req.body.username,
  //     password: req.body.password
  //   }
  //   models.User.update(user, {
  //     where:{
  //       id: req.params.id
  //     }
  //   })
  //   .then(()=>{
  //     res.send(`Data id ${req.params.id} Has been changed`)
  //   })
  // },

  signUp: (req, res)=>{
    var password = passwordHash.generate(req.body.password)
    // var passsword = bcrypt.hashSync(req.body.passsword, saltRounds)
    models.User.create({
      name: req.body.name,
      username: req.body.username,
      password: password,
      role: req.body.role
    })
    .then ((user)=>{
      res.send(user)
    })
  },

  signIn: (req, res)=>{
    models.User.findOne({
      where :{
        username: req.body.username
      }
    })
    .then ((user)=>{
      // console.log(user);
      var password = passwordHash.verify(req.body.password, user.password)
      // var password = bcrypt.compareSync(req.body.password, user.password);
      // console.log(password);
      if (password) {
          var token = jwt.sign({username : user.username, role: user.role}, 'krisis_only_need_to_handle_with_calm')
          res.send(token)
      } else {
        res.send({msg: `Wrong password please try again`})
      }
    })
    .catch (()=>{
      res.send({msg: `Username doesn't exist`})
    })
  },

  getAllUserInfo: (req, res)=>{
    models.User.findAll()
    .then((users)=>{
      res.send(users)
    })
  },

  getAuthor: (req, res)=>{
    models.User.findById(req.params.id)
    .then ((user)=>{
      res.send(user)
    })
  },

  insertUserByAdmin: (req, res)=>{
    var password = passwordHash.generate(req.body.password)
    models.User.create({
      name: req.body.name,
      username: req.body.username,
      password: password,
      role: req.body.role
    })
    .then ((user)=>{
      res.send(user)
    })
  },

  deleteByAdmin: (req, res)=>{
    models.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then ((msg)=>res.send({msg: `You have deleted id ${req.params.id}`}))
  },

  updateAuthor: (req, res)=>{
    let user = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password
    }
    models.User.update(user, {
      where:{
        id: req.params.id
      }
    })
    .then(()=>{
      res.send(`Data id ${req.params.id} Has been changed`)
    })
  }

}
