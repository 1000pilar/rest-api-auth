# rest-api-auth

#instalasi tools database
express
sequelize
sequelize-cli
postgres

#Problem
Error: listen EADDRINUSE :::3000   ==> Fixing routes change to port 4000






class siang
authentication: validasi keaslian => hashing agar password tidak dalam bentuk plain
authorization: validasi {kewenangan} json webtoken
install defendencies jwt
var token = jwt.sign({username: 'poppy', role: 'finance', profile_pic: sir.jpg}, 'krisis')

router.get('/login', (req, res)=>{
  if(req.body.username == 'poppy', && req.body.password == 'poppy'){
    var token = jwt.sign({username: 'poppy', role: 'finance', profile_pic: sir.jpg}, 'krisis')//jangan masukan password ke jwt sign
    res.send(token)
  }
  })

  router.get('/login', (req, res)=>{
    var token = req.body.token

    if(token){

    }


    })
