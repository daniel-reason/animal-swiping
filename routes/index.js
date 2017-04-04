const bodyParser = require('body-parser')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const express = require('express')
const passport = require('passport')
const users = require('../lib/users')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))

const db = require('../db')

router.get('/login', (req, res) => {
  res.render('login', { flash: req.flash('error') })
})

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
)

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/login')
})

router.get('/',
  ensureLoggedIn(),
  (req, res) => {
    res.render('index')
  }
)

router.get('/register', (req, res) => {
  res.render('register', { flash: req.flash('error') })
})

router.post('/register',
  register,
  registerFail
)

function register (req, res, next) {
  users.exists(req.body.username)
    .then(exists => {
      if (exists) {
        req.flash('error', 'User already exists, sorry.')
        return res.redirect('/register')
      }

      // req.login() can be used to automatically log the user in after registering
      users.create(req.body.username, req.body.password)
        .then(() => res.redirect('/login'))
        .catch((err) => console.log(err))
    })
    .catch(() => next())
}

function registerFail (req, res) {
  req.flash('error', "Couldn't add user.")
  res.redirect('/register')
}

//Beginning of original code


module.exports = {
  allDogs: allDogs,
  match: match,
  router: router
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
