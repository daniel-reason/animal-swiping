var express = require('express')

var db = require('../db')

module.exports = {
  allDogs: allDogs,
  main: main,
  add: add
}

function main (req, res) {
  res.sendfile('views/main.html')
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

// function getDog (req, res) {
//
// }

function add (req, res) {
  res.sendfile('views/add-animal.html')
}
