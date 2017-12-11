const express = require('express');
const router = express.Router();

const User = require('../../models/user/user');

//Retrieve data
router.get('/user', (req, res, next)=>{
  User.find(function(err, user){
    res.json(user);
  });
});

//Add data
router.post('/user', (req, res, next)=>{
  let newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    user_name: req.body.user_name,
    password:req.body.password
  });

  newUser.save((err, user)=>{
    if(err){
      res.json({msg: 'Failed to save User Data'});
    }
    else{
      res.json({msg: 'User Data saved'});
    }
  });
});


module.exports = router;
