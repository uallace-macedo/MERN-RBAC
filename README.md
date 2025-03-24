# 🚀 Projeto de Estudo - Backend com Node.js e Express

Este é um projeto de estudo desenvolvido para aprender sobre **Role-Based Access Control (RBAC)**, utilizando **Node.js**, **Express** e **MongoDB**. O objetivo principal é implementar um sistema de **cargos de usuários** e **permissões** em uma API RESTful.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: 🌍 Ambiente de execução JavaScript do lado do servidor.
- **Express**: ⚡ Framework para construção de APIs em Node.js.
- **bcryptjs**: 🔐 Biblioteca para criptografar senhas.
- **cookie-parser**: 🍪 Middleware para manipulação de cookies.
- **jsonwebtoken**: 🛡️ Biblioteca para criação e verificação de tokens JWT (JSON Web Tokens).
- **mongoose**: 📊 ODM (Object Data Modeling) para MongoDB e Node.js.
- **dotenv**: 🌱 Biblioteca para carregar variáveis de ambiente.
npm install -
## 📌 Funcionalidades

Este sistema permite:

- **Autenticação de usuários** com cadastro e login via JWT.
- **Gerenciamento de permissões de usuários** com base em diferentes **cargos** (roles):
  - **Usuário comum**: Acesso limitado.
  - **Gerente**: Acesso a funcionalidades intermediárias.
  - **Administrador**: Acesso total e controle de todos os recursos.

## 🔑 Como Usar

### 1. Instalar as Dependências

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/uallace-macedo/MERN-RBAC.git
cd MERN-RBAC
npm install -g yarn # caso não tenha o yarn instalado
yarn
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```bash
SERVER_PORT=porta_do_servidor
JWT_SECRET=token_jwt
MONGODB_URI=link_cluster_mongodb
```

### 3. Rode o projeto
```bash
yarn start
```


## 📂 Estrutura do Projeto

### 🛣️ Rotas

- **POST /api/register**: Registra um novo usuário.
- **POST /api/login**: Faz login e gera um token JWT.
- **GET /api/users/user**: Acesso para usuários comuns (necessita de autenticação).
- **GET /api/users/manager**: Acesso para gerentes (necessita de autenticação).
- **GET /api/users/admin**: Acesso para administradores (necessita de autenticação).

### 🔧 Middlewares

- **verifyToken**: Verifica se o token JWT é válido e garante que o usuário esteja autenticado.
- **authorizeRoles**: Autoriza o acesso a determinadas rotas baseado nos cargos (roles) do usuário. Os cargos podem ser: **user**, **manager** ou **admin**.

### 📜 Controllers

- **AuthController**: Controla as rotas de login e registro de usuários.
- **UserController**: Controla as rotas de acesso para usuários, gerentes e administradores.

### 📁 Arquivos Importantes

- **auth.route.js**: Roteamento para registro e login de usuários.
- **user.route.js**: Roteamento para os recursos de usuários com base nas permissões de cargo.
- **auth.controller.js**: Lógica de autenticação e registro de usuários.
- **user.controller.js**: Lógica de acesso aos recursos conforme o cargo do usuário.
- **role.middleware.js**: Middleware para verificar permissões de acesso com base no cargo do usuário.

## 📝 Exemplos de Requisições

### 1. **Login**

Requisição: `POST /api/login`

Exemplo de corpo da requisição:

```
{
  "name": "usuario1",
  "password": "senha123"
}
```

Resposta de sucesso (200):

```
{
  "success": true,
  "message": "Logado com sucesso!"
}
```

Respostas de erro:

- **Campos ausentes (400)**:

```
{
  "success": false,
  "message": "Por favor, preencha todos os campos"
}
```

- **Usuário ou senha incorretos (400)**:

```
{
  "success": false,
  "message": "Usuário ou senha incorreto."
}
```

### 2. **Registrar um Novo Usuário**

Requisição: `POST /api/register`

Exemplo de corpo da requisição:

```
{
  "name": "usuario2",
  "password": "senha456",
  "role": "manager"
}
```

Resposta de sucesso (201):

```
{
  "success": true,
  "message": "Usuário registrado como: usuario2"
}
```

Respostas de erro:

- **Campos ausentes (400)**:

```
{
  "success": false,
  "message": "Por favor, preencha todos os campos"
}
```

- **Usuário já cadastrado (400)**:

```
{
  "success": false,
  "message": "Esse usuário já foi cadastrado. Tente outro!"
}
```

### 3. **Acessos Baseados em Permissões**

- **/api/users/user**: Acesso para usuários comuns, que podem visualizar informações básicas.
- **/api/users/manager**: Acesso para gerentes, que têm permissões intermediárias.
- **/api/users/admin**: Acesso para administradores, que possuem permissões completas.

Todas essas rotas exigem que o usuário esteja autenticado com um token JWT válido, além de verificar se o usuário tem o cargo necessário para acessar a rota.

### ⚙️ Tratamento de Erros

O sistema trata os seguintes erros:

1. **Campos ausentes (para login e registro)**:
   - Quando os campos `name` ou `password` não são preenchidos corretamente:

```
{
  "success": false,
  "message": "Por favor, preencha todos os campos"
}
```

2. **Usuário ou senha incorretos (para login)**:
   - Caso o usuário não exista no banco ou a senha esteja incorreta:

```
{
  "success": false,
  "message": "Usuário ou senha incorreto."
}
```

3. **Usuário já cadastrado (para registro)**:
   - Quando o nome de usuário já foi registrado:

```
{
  "success": false,
  "message": "Esse usuário já foi cadastrado. Tente outro!"
}
```

## ⚡ Contribuições

Se você deseja contribuir com este projeto, fique à vontade para fazer um **fork** e enviar um **pull request** com melhorias, correções ou novos recursos!
