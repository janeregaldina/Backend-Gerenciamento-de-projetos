const express = require('express');
const { registerUser, loginUser } = require('./controllers/userController');

const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

app.use(express.json());

// Rota de cadastro de usuário
app.post('/register', registerUser);

// Rota de login de usuário
app.post('/login', loginUser);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
