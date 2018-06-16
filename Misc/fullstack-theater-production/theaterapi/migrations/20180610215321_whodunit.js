
exports.up = function(knex, Promise) {
  return knex.schema.createTable('whodunit', (table) => {
    table.increments()
    table.string('murderer').notNullable().defaultTo('')
    table.string('room').notNullable().defaultTo('')
    table.string('weapon').notNullable().defaultTo('')
    table.boolean('didit').notNullable().defaultTo(false)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('whodunit')
}
