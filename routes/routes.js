const express = require('express');
const router = express.Router();

const Client = require('../models/client');

//Retrieve data
router.get('/client', (req, res, next)=>{
  Client.find(function(err, client){
    res.json(client);
  });
});

//Add data
router.post('/client', (req, res, next)=>{
  let newClient = new Client({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone
  });

  newClient.save((err, client)=>{
    if(err){
      res.json({msg: 'Failed to save Client Data'});
    }
    else{
      res.json({msg: 'Client Data saved'});
    }
  });
});

//Delete data
router.delete('/client/:id', (req, res, next)=>{
  Client.remove({_id: req.params.id}, function(err, result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  });
});

//Update Data

module.exports = router;
