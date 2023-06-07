### Contact APP

Sua Solução para organizar contatos!

## Endpoints da aplicação

Segue os endpoints disponiveis da aplicação:

POST /login: Gera o token de autenticação.\
GET /client: Lista todos os clientes.\
POST /client: Criação de um novo cliente.\
GET /client/profile: Lista o cliente logado.\
PATCH /client/:id: Atualização um cliente.\
DELETE /client/:id: Deleta o cliente.\
POST /contact: Criação de um novo contato.\
GET /contact: Lista todos os contatos do cliente logado.\
PATCH /contact/:id: Atualiza um contato.\
DELETE /contact/:id: deleta um contato.

## Execução do Projeto

1. Para executar este projeto, é necessário executar o comando para instalar as dependências, que serão utilizadas. Portanto utilize o comando abaixo para instalar as dependências:

```bash
# Utilizando o yarn
yarn

# Utilizando o npm
npm install
```

2. Configuração de variáveis de ambiente:

- Renomeie o arquivo .env.example para .env.
- Corrija as variáveis de ambiente no arquivo .env com as informações da sua máquina.

3. Execute as migrações do banco de dados:

```bash

# Utilizando o yarn
yarn run migrate

# Utilizando o npm
npm run migrate
```

4. Inicie o servidor:

```bash
# Utilizando o yarn
yarn dev

# Utilizando o npm
npm run dev
```

1. Após fazer todos os passos descritos a aplicação estará sendo executado em http://localhost:3000.