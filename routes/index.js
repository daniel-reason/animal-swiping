var express = require('express')

var db = require('../db')

module.exports = {
  allDogs: allDogs,
  match: match
}


function allDogs (req, res) {
  db.getDogs()
    .then(function (dogs) {
      res.render('index', { dogs: dogs })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function match (req, res) {
  var selectDog = 10000 + Math.floor((Math.random() * 5) + 1)
  db.getDog(selectDog)
    .then(function (dogs) {
      res.render('index', { dogs: dogs })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
