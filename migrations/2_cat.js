/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cat", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("gender").notNullable();
    table.string("age").notNullable();
    table.string("description", [2000]).notNullable();
    table.string("image").notNullable();
    table.integer("shelter_id").unsigned().notNullable();
    table
      .foreign("shelter_id")
      .references("id")
      .inTable("shelter")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cat");
};
