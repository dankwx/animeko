const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'animeco',
  password: 'root',
  port: 5432, // Porta padrão do PostgreSQL
});

module.exports = pool;
