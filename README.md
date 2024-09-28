# User Authentication Backend

Este é um projeto simples de autenticação de usuários, utilizando **Node.js**, **Express** e **PostgreSQL**. Ele permite o cadastro e login de usuários.

## Requisitos

Antes de iniciar o projeto, você precisa ter as seguintes ferramentas instaladas:

- **Node.js** (v14 ou superior)
- **PostgreSQL** (v12 ou superior)
- **Git**
- **IntelliJ IDEA** (ou qualquer outra IDE de sua preferência)

## Passos para iniciar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/user-auth-backend.git
cd user-auth-backend
``` 

### 2. Instalar as dependências

Dentro do diretório do projeto, execute o seguinte comando para instalar as dependências:

```bash
npm install
```

### 3. Configurar o Banco de Dados

Certifique-se de que você tem o PostgreSQL rodando localmente. Em seguida, siga os passos abaixo para criar o banco de dados e a tabela de usuários.

#### 3.1. Criar o Banco de Dados

No terminal do PostgreSQL ou em uma interface gráfica como pgAdmin, crie um novo banco de dados chamado user_auth:

```sql
CREATE DATABASE user_auth;
```
#### 3.2. Criar a Tabela de Usuários

Dentro do banco de dados user_auth, execute o seguinte comando SQL para criar a tabela users:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```
### 4. Configurar a Conexão com o Banco de Dados

Edite o arquivo db.js com as credenciais do seu banco de dados PostgreSQL. Ele deve ter um formato semelhante a este:

```javascript
const pool = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'user_auth',
  password: 'sua_senha',
  port: 5432,
});
```
Substitua 'seu_usuario', 'sua_senha' e outros parâmetros com as configurações corretas do seu ambiente.

### 5. Rodar o servidor

Agora você está pronto para rodar o servidor. No diretório raiz do projeto, execute o seguinte comando:

```bach
node server.js
```
O servidor será iniciado em http://localhost:3000.

### 6. Endpoints da API

POST /register: Para registrar um novo usuário.

Exemplo de corpo da requisição:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```
POST /login: Para logar um usuário existente.

Exemplo de corpo da requisição:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```