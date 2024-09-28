const pool = require('../db');

// Função para criar um novo usuário no banco de dados
const createUser = async (name, email, password) => {
    const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
    );
    return result.rows[0];
};

// Função para buscar um usuário pelo email (para verificação posterior)
const findUserByEmail = async (email) => {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );
    return result.rows[0];
};


// Função para buscar um usuário por email e senha
const findUserByCredentials = async (email, password) => {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1 AND password = $2',
        [email, password]
    );
    return result.rows[0]; // Retorna o usuário encontrado, ou undefined
};

module.exports = { createUser, findUserByEmail, findUserByCredentials };
