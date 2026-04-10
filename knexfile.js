// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const connections = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "root",
      database: "meowadopt",
      charset: "utf8",
    },
  },
  production: {
    client: "mysql2",
    connection: process.env.JAWSDB_URL,
  },
};

module.exports =
  process.env.NODE_ENV === "production"
    ? connections.production
    : connections.development;
