
#My App Name
demo API with basic REST API

## rest-api-auth
List of basic routes:

Route  | HTTP | Description
---------------------------
/api/hello?name={name}  | GET | print hello, {name} !


Route         | HTTP   | Description
--------------|--------|---------------------------------------
api/signup    | POST   | Sign Up
api/signin    | POST   | Sign In
api/users     | GET    | Get all users info
api/users/:id | GET    | Get user info decoded By Admin & User
api/users     | POST   | Insert user by admin
api/users/:id | DELETE | Delete by admin
api/users/:id | PUT    | update By Admin & User


##instalasi tools & database
With only npm:

npm install
npm start


##Problem
Error: listen EADDRINUSE :::3000   ==> Fixing routes change to port 4000






<!-- class siang
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


    }) -->
