
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(() => {
      // Inserts seed entries
      return knex('roles').insert([
        {name: 'admin'},
        {name: 'manager'},
        {name: 'developer'}
      ]);
    });
};
