/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // Creating one or more tables
  return knex.schema.createTable("shelter", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("address").notNullable();
    table.string("city").notNullable();
    table.string("email").notNullable();
  });
  // could chain multiple create table commands like so
  // return knex.schema.createTable("table1", function() { ... }).createTable("table2", function() {...})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // Deleting one or more tables
  return knex.schema.dropTable("shelter");
};
