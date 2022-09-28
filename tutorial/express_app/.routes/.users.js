var express = require('express');
const User = require('./.users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const user_resource = new User({
    name: 'Silver Paper',
    email: 'silver@paper.com'
  })

user_resource.save((error) => {
    if(error)
        console.log(error);
    
    res.send({
        success: true,
        code: 200,
        msg: "User added!"
    })
  })

User.find({}, 'name email', function (error, users) {
    if(error) {console.error(error);}
    res.send({
        users: users
    })
})

User.findById(1, 'name email', function (error, user) {
    if (error) {console.error(error);}
    res.send(user)
})

module.exports = router;
