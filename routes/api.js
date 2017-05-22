var express = require('express')
// var models = require('../models')
var router = express.Router()
var userController = require('../controllers/users')



router.get('/', (req, res, next)=>{
  res.send('Yess it\'s Connected' )
})


router.get('/users', userController.getAllUser)
router.get('/users/:id', userController.findUser)
router.post('/users', userController.insertUser)
router.delete('/users/:id', userController.deleteUser)
router.put('/users/:id', userController.updateUser)

module.exports = router
