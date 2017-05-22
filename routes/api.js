var express = require('express')
// var models = require('../models')
var router = express.Router()
var userController = require('../controllers/users')



router.get('/', (req, res, next)=>{
  res.send('Yess it\'s Connected' )
})


// router.get('/users', userController.getAllUser)
// router.get('/users/:id', userController.findUser)
// router.post('/users', userController.insertUser)
// router.delete('/users/:id', userController.deleteUser)
// router.put('/users/:id', userController.updateUser)
router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)
router.get('/users', userController.getAllUserInfo)
router.get('/users/:id', userController.getAuthor)
router.post('/users/:token', userController.insertUserByAdmin)
router.delete('/users/:id', userController.deleteByAdmin)
router.put('/users/:id', userController.updateAuthor)




module.exports = router
