var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getDog: getDog,
  getDogs: getDogs
}

function getDogs (testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('dogs').select()
}

function getDog (id, testDb) {
  var db = testDb || connection
  return db('dogs').where('id', id)
}
