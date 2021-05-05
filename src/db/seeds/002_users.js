
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'admin',
          firstname: 'foo',
          lastname: 'bar',
          email: 'admin@company.com',
          role_id: 1
        },
        {
          username: 'johnny',
          firstname: 'John',
          lastname: 'Doe',
          email: 'johnnydoe@company.com',
          role_id: 2
        },
        {
          username: 'jane',
          firstname: 'Jannet',
          lastname: 'Doe',
          email: 'jane_d@company.com',
          role_id: 2
        },{
          username: 'hannah',
          firstname: 'Hannah',
          lastname: 'Hill',
          email: 'hhill@email.com',
          role_id: 3
        },{
          username: 'claire',
          firstname: 'Clarice',
          lastname: 'Arent',
          email: 'claire_arent@company.com',
          role_id: 3
        },
        {
          username: 'robbie',
          firstname: 'Arron',
          lastname: 'Robinson',
          email: 'rob@company.com',
          role_id: 3
        },
      ]);
    });
};
