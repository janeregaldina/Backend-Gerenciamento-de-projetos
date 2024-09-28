const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // usuário PostgreSQL
    host: 'localhost',
    database: 'user_auth', // nome do banco criado
    password: 'root', // senha do PostgreSQL
    port: 5432,
});

module.exports = pool;