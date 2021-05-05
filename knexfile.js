// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      database: 'sampledb',
      user:     'root',
      password: 'dev'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/db/seeds`
    }
  }
};
