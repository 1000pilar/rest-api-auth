// var express = require('express')
var models = require('../models')

module.exports = {
  getAllUser : (req, res)=>{
    models.User.findAll()
    .then ((users)=>{
      res.send(users)
    })
  },

  findUser : (req, res)=>{
    models.User.findById(req.params.id)
    .then ((user)=>{
      res.send(user)
    })
  },

  insertUser : (req, res)=>{
    models.User.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password
    })
    .then ((user)=>{
      res.send(user)
    })
  },

  deleteUser: (req, res)=>{
    models.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then ((msg)=>res.send({msg: `You have deleted id ${req.params.id}`}))
  },

  updateUser: (req, res)=>{
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
      res.send(`has been change to `+ req.body.name )
    })
  }


}
