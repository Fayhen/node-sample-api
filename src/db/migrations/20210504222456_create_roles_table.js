
exports.up = (knex) => {
  return knex.schema.createTable('roles', (table) => {
    table.increments('id').primary()
    table.string('name', 10).unique().notNullable()
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('roles')
};
