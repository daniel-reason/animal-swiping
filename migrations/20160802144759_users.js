exports.up = function (knex, Promise) {
  return knex.schema.createTable('dogs', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('age')
    table.string('breed')
    table.string('size')
    table.string('picture')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('dogs')
}
