const express = require('express')
const flash = require('connect-flash')
const hbs = require('express-handlebars')
const LocalStrategy = require('passport-local')
const passport = require('passport')
const path = require('path')

const auth = require('./lib/auth')
const users = require('./lib/users')
const session = require('./lib/session')

const indexRoutes = require('./routes')


// var path = require('path')
// var express = require('express')
var bodyParser = require('body-parser')
// var hbs = require('express-handlebars')

var index = require('./routes/index')

var server = express()

passport.use(new LocalStrategy(auth.verify))
passport.serializeUser(users.serialize)
passport.deserializeUser(users.deserialize)


// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static('public'))

server.use(session)
server.use(flash())
server.use(passport.initialize())
server.use(passport.session())
server.use('/', indexRoutes)
// Routes

server.get('/dogs', index.allDogs)
server.get('/find-a-dog', index.match)

// server.get('profile/:id'*******)

module.exports = server
