var bcrypt = require('bcrypt');
const saltRounds = 10;



module.exports = {
  hash : (req, res, next)=>{
    let regex = /\w{6, 25}/
      if (regex.test(req.body.passsword)){
          next()
      } else {
        res.send(`please use more than 6 character`)
      }
    }
}

// module.exports = {
//   hash : (password)=>{
//     let regex = /\w{6, 25}/
//       if (regex.test(passsword)){
//         var hash = bcrypt.hash(passsword, saltRounds).then(function(hash) {
//
//         })
//       } else {
//       }
//     }
// }
