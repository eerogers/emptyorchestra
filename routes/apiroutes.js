var Router = require('express').Router()
var db = require('../models')
const path = require("path");

//get user info by stored username
Router.get('/users/:username', function (req, res) {
    // req.params.id
    db.User.find( {name: req.params.name })
      .then(r => {
        res.json(r)
      })
      .catch(e => {
        console.log(e)
      })
  })
Router.post('/users', function (req, res) {
    // req.body
    db.User.create({
      userId: req.body.userId,
      name: req.body.name,
      groupArray: req.body.groupArray,
      songArray: req.body.songArray
    })
      .then(r => {
        res.json(r)
      })
      .catch(e => {
        console.log(e)
      })
  })
  

Router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  })
  
  module.exports = Router