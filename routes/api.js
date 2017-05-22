var express = require('express')
// var models = require('../models')
var router = express.Router()
var userController = require('../controllers/users')
var jwtDecode = require('../helpers/jwt_ver')



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
router.get('/users', jwtDecode.decodedAdmin, userController.getAllUserInfo)
router.get('/users/:id', jwtDecode.decodedAdminUser, userController.getAuthor)
router.post('/users/:token', jwtDecode.decodedAdmin, userController.insertUserByAdmin)
router.delete('/users/:id', jwtDecode.decodedAdmin, userController.deleteByAdmin)
router.put('/users/:id', jwtDecode.decodedAdminUser, userController.updateAuthor)




module.exports = router
