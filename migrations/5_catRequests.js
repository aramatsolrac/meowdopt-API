/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("catRequests", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("status").notNullable().defaultTo("Received");
    table.integer("cat_id").unsigned().notNullable();
    table
      .foreign("cat_id")
      .references("id")
      .inTable("cat")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("user")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("catRequests");
};
