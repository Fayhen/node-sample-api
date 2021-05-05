
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username', 50).unique().notNullable()
    table.string('firstname', 50).notNullable()
    table.string('lastname', 50).notNullable()
    table.string('email', 50).unique().notNullable()
    
    table
      .integer('role_id')
      .unsigned()
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE')
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('users')
};
