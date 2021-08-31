// Update with your config settings.

const config = require('config')

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:"localhost",
      database: config.get('databasename'), //Your database name 
      user:     config.get('user'),   // username of database
      password:  config.get('password')   },  //password of database 
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
