var express = require('express')

var db = require('../db')

module.exports = {
  get: get,
  main: main
}

function main (req, res) {
  res.sendfile('views/main.html')
}


function get (req, res) {
  db.getDogs()
    .then(function (dogs) {
      res.render('index', { dogs: dogs })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
