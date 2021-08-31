
exports.up = function(knex) {

    return knex.schema.createTable('user1',table=>{
        table.string('id').primary().notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('type').notNullable();
        table.string('password').notNullable();
        table.string('status').notNullable();
        table.string('number').notNullable();
        table.boolean('isverified').notNullable();
        table.boolean('isadmin').notNullable();
        table.string('documents').notNullable();
        table.timestamps(true,true);
    
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user1')
  
};
