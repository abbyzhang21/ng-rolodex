
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('contacts', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('link').notNullable();
            table.string('address').notNullable();
            table.string('mobile').notNullable();
            table.string('email').notNullable();
            table.string('instagram').notNullable();
            table.timestamps(true, true)
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('contacts'),
    ])
};
